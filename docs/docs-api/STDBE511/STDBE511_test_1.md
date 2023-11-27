---
author: Vikas Sharma, Ph.D.
date: 2 Nov 2022
tags:
    - SetSTDBE511Param
    - SetLinSolverParam
    - Domain/Initiate
---

# STDBE511 example 1

- Both fluid and porous medium are considered
- L = 0.1 m
- dx = 0.1/50
- K0 = E-10 m2
- Da = E-8
- V_TOP = 0.01
- dt = dx / V_TOP = 0.2
- StabOption=1

Mesh:

![](figures/mesh.png)

In this example we test following:

- [[STDBE511_#SetSTDBE511Param]]
- [[LinSolver_#SetLinSolverParam]]
- [[Domain_#Initiate]]

[TOC]

## Header

!!! note "Some simulation parameter"

```fortran
#define _K0_ 1.0E-10
#define _PHI_ 0.5_DFP
#define _DT_ 0.2
#define _VTOP_ 0.01_DFP
#define _MU_FLUID_ 0.001
#define _RHO_FLUID_ 1000.0
#define _TIMESTEPS_ maxI4B
#define _MAX_ITER_ 20
#define _tDBC4P_ 0
#define _REF_PRESSURE_NODE_ 90
#define _STAB_PARAM_OPTION_ 1
#define _MATERTIAL_INTERFACES_ [7]
#define _SAVE_STATE_FREQ_ 100
#define _WRITE_FREQ_ 1
```

|         varName          |              Comment               |
|:------------------------:|:----------------------------------:|
|          `_K0_`          |      permeability of the soil      |
|         `_PHI_`          |        porosity of the soil        |
|          `_DT_`          |           time step size           |
|         `_VTOP_`         |          velocity at top           |
|       `_MU_FLUID_`       |     dynamic viscosity of fluid     |
|      `_RHO_FLUID_`       |       mass-density of fluid        |
|      `_TIMESTEPS_`       |        number of time steps        |
|       `_MAX_ITER_`       | maximum number of Newton iteration |
|        `_tDBC4P_`        |  total Dirichlet BC for pressure   |
|  `_REF_PRESSURE_NODE_`   | reference node number for pressure |
|  `_STAB_PARAM_OPTION_`   |        stabilization option        |
| `_MATERTIAL_INTERFACES_` |  mesh-id of fluid-soil interfaces  |
|   `_SAVE_STATE_FREQ_`    |        save-state frequency        |
|      `_WRITE_FREQ_`      |          write-frequency           |

!!! note "Include modules"

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE STDBE511_Class
  IMPLICIT NONE
```

## Declare variables

```fortran
  TYPE(STDBE511_) :: obj
  TYPE(ParameterList_) :: param
  TYPE(HDF5File_) :: domainFile
  TYPE( HDF5File_ ) :: outfile
  TYPE( HDF5File_ ) :: statefile
  TYPE(MeshSelection_) :: region
  TYPE(Domain_), TARGET :: dom
  CLASS(DirichletBC_), POINTER :: dbc => NULL()
  CHARACTER(LEN=*), PARAMETER :: &
    & domainFileName = "./mesh.h5"
  CHARACTER( LEN = * ), PARAMETER :: &
    & outfilePrefix="./output"
  CHARACTER( LEN = * ), PARAMETER :: &
    & statePrefix="./state"
  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_2D
  INTEGER( I4B ), PARAMETER :: SaveStateFrequency = _SAVE_STATE_FREQ_
  INTEGER( I4B ), PARAMETER :: writeFrequency = _WRITE_FREQ_
  INTEGER( I4B ) :: backupNumber
```

| var-name             |                          comment                          |
|:---------------------|:---------------------------------------------------------:|
| `obj`                |             Instance of [[STDBE511_]] kernel              |
| `param`              |         parameters instance of [[ParameterList_]]         |
| `domainFile`         |                 domain file [[HDF5File_]]                 |
| `outfile`            |                 output file [[HDF5File_]]                 |
| `statefile`          |                 state file [[HDF5File_]]                  |
| `region`             |              mesh region [[MeshSelection_]]               |
| `dom`                |                    domain [[Domain_]]                     |
| `dbc`                | instance of dirichlet boundary condition [[NeumannBC_]] |
| `domainFileName`     |                     domain file name                      |
| `outfilePrefix`      |                    output file prefix                     |
| `statePrefix`        |                     state file prefix                     |
| `coordinateSystem`   |                     coordinate system                     |
| `saveStateFrequency` |             saving frequency for state files              |
| `writeFrequency`     |             write frequency for output files              |
| `backupNumber`       |                     interal variable                      |

!!! note "Linear solver parameters"

```fortran
  INTEGER(I4B), PARAMETER :: LinSolver_name = LIS_GMRES
  INTEGER(I4B), PARAMETER :: KrylovSubspaceSize = 50
  INTEGER(I4B), PARAMETER :: maxIter_LinSolver = -1
  REAL(DFP), PARAMETER :: rtol_LinSolver=1.0D-6
  REAL(DFP), PARAMETER :: atol_LinSolver=1.0D-10
  INTEGER(I4B), PARAMETER :: preconditionOption = NO_PRECONDITION
  INTEGER(I4B), PARAMETER :: convergenceIn_LinSolver = convergenceInRes
  INTEGER(I4B), PARAMETER :: convergenceType_LinSolver = relativeConvergence
  LOGICAL( LGT ), PARAMETER :: relativeToRHS = .FALSE.
```

| var-name                    |                         comment                         |
|:----------------------------|:-------------------------------------------------------:|
| `LinSolver_name`            |                  name of linear solver                  |
| `KrylovSubspaceSize`        |                 a parameter for linsol                  |
| `maxIter_LinSolver`         |           max number of iterations in linsol            |
| `rtol_LinSolver`            |              relative tolerance for linsol              |
| `atol_LinSolver`            |              absolute tolerance for linsol              |
| `preconditionOption`        |                   precondition option                   |
| `convergenceIn_LinSolver`   |             convergence criteria for linsol             |
| `convergenceType_LinSolver` | convergence criteria for linsol: relative or absolute.  |
| `relativeToRHS`             | if convergence is relative then relative to RHS or not. |

Currently, `NO_PRECONDITON` means diagonal preconditioning will be selected.

!!! note "Iteration parameters"

```fortran
  INTEGER(I4B), PARAMETER :: nnt = 2
  INTEGER( I4B ), PARAMETER :: stabParamOption = _STAB_PARAM_OPTION_
  INTEGER( I4B ), PARAMETER :: maxIter= _MAX_ITER_
  INTEGER(I4B), PARAMETER :: TotalTimeSteps = _TIMESTEPS_
  REAL(DFP), PARAMETER :: startTime=0.0_DFP
  REAL(DFP), PARAMETER :: dt= _DT_
  REAL(DFP), PARAMETER :: endTime=dt*TotalTimeSteps
  REAL( DFP ), PARAMETER :: atol_Pressure=1.0D-10
  REAL( DFP ), PARAMETER :: rtol_Pressure=1.0D-10
  REAL( DFP ), PARAMETER :: atol_Velocity=1.0D-6
  REAL( DFP ), PARAMETER :: rtol_Velocity=1.0D-6
  REAL( DFP ), PARAMETER :: tol_steadyState = 1.0E-8
  LOGICAL( LGT ), PARAMETER :: resetIteration = .FALSE.
  LOGICAL( LGT ), PARAMETER :: resetTimeStep = .FALSE.
```

| var-name          |                         comment                         |
|:------------------|:-------------------------------------------------------:|
| `nnt`             |                 number of nodes in time                 |
| `stabParamOption` |             stabilization parameter option              |
| `maxIter`         |               maximum number of iteration               |
| `TotalTimeSteps`  |      total number of time steps for the simulation      |
| `startTime`       |                start time of simulation                 |
| `dt`              |              time step size of simulation               |
| `endTime`         |                 end time of simulation                  |
| `atol_Pressure`   | absolute tolerance for checking convergence in pressure |
| `rtol_Pressure`   | relative tolerance for checking convergence in pressure |
| `atol_Velocity`   | absolute tolerance for checking convergence in velocity |
| `rtol_Velocity`   | relative tolerance for checking convergence in velocity |
| `tol_steadyState` |           tolerance for checking steady state           |
| `resetIteration`  |      reset variables to zero after each iteration       |
| `resetTimeStep`   |      reset variables to zero after each time step       |

!!! note "Materials and boundary conditions"

```fortran
  INTEGER(I4B), PARAMETER :: tPorousMaterials = 2
  INTEGER(I4B), PARAMETER :: tFluidMaterials = 1
  INTEGER(I4B), PARAMETER :: tDirichletBCForVelocity = 3
  INTEGER(I4B), PARAMETER :: tDirichletBCForPressure = _tDBC4P_
  INTEGER( I4B ), PARAMETER :: refPressureNode = _REF_PRESSURE_NODE_
  INTEGER( I4B ), PARAMETER :: materialInterfaces(1) = _MATERTIAL_INTERFACES_
  REAL(DFP), PARAMETER :: porosity= _PHI_
  REAL(DFP), PARAMETER :: permeability = _K0_
  REAL(DFP), PARAMETER :: massdensity_soil=1700.0
  REAL(DFP), PARAMETER :: massdensity_fluid = _RHO_FLUID_
  REAL(DFP), PARAMETER :: dynamicViscosity = _MU_FLUID_
  REAL(DFP), PARAMETER :: V_TOP= _VTOP_
```

| var-name                  |                     comment                     |
|:--------------------------|:-----------------------------------------------:|
| `tPorousMaterials`        |               total porous media                |
| `tFluidMaterials`         |              total fluid material               |
| `tDirichletBCForVelocity` | total dirichlet boundary condition for velocity |
| `tDirichletBCForPressure` | total dirichlet boundary condition for pressure |
| `refPressureNode`         |       reference node number for pressure        |
| `porosity`                |                porosity of soil                 |
| `massdensity_soil`        |              mass density of soil               |
| `permeability`            |              permeability of soil               |
| `massdensity_fluid`       |              mass density of fluid              |
| `dynamicViscosity`        |           dynamic viscosity of fluid            |
| `V_TOP`                   |               velocity at the top               |

!!! note "Internal variables"

```fortran
  LOGICAL( LGT ) :: convg
  INTEGER( I4B ) :: iter
  INTEGER( I4B ) :: its
  REAL( DFP ) :: t1, t2, t2t1
```

## SetSTDBE511Param

- [[STDBE511_#SetSTDBE511Param]]

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  !!
  CALL SetSTDBE511Param( &
    & param=param, &
    & materialInterfaces=materialInterfaces, &
    & stabParamOption=stabParamOption, &
    & engine="NATIVE_SERIAL", &
    & nnt=nnt, &
    & startTime=startTime, &
    & endTime=endTime, &
    & dt=dt, &
    & coordinateSystem=coordinateSystem, &
    & maxIter=maxIter, &
    & atoleranceForPressure=atol_pressure, &
    & atoleranceForVelocity=atol_velocity, &
    & rtoleranceForPressure=rtol_pressure, &
    & rtoleranceForVelocity=rtol_velocity, &
    & toleranceForSteadyState=tol_steadyState, &
    & tPorousMaterials=tPorousMaterials, &
    & tFluidMaterials=tFluidMaterials, &
    & tDirichletBCForVelocity=tDirichletBCForVelocity, &
    & tDirichletBCForPressure=tDirichletBCForPressure, &
    & domainFile=domainFileName)
```

## SetLinSolverParam

```fortran
  CALL SetLinSolverParam( &
    & param=param, &
    & solverName=LinSolver_name,&
    & preconditionOption=preconditionOption, &
    & convergenceIn=convergenceIn_LinSolver, &
    & convergenceType=convergenceType_LinSolver, &
    & maxIter=maxIter_LinSolver, &
    & relativeToRHS=relativeToRHS, &
    & KrylovSubspaceSize=KrylovSubspaceSize, &
    & rtol=rtol_LinSolver, &
    & atol=atol_LinSolver )
```

## Domain/Initiate

Domain for pressure and velocity field

```fortran
  CALL domainFile%Initiate( filename=domainFileName, MODE="READ")
  CALL domainFile%Open()
  CALL dom%Initiate(domainFile, "")
  CALL domainFile%Deallocate()
```

## Debug

```fortran
  CALL param%print()
```

!!! example "result"

```txt
[0] Key = LinSolver/preconditionOption, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[3] Key = LinSolver/engine, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = NATIVE_SERIAL
[3] Key = LinSolver/maxIter, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = -1
[4] Key = STDBE511/nnt, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 2
[5] Key = STDBE511/isCommonDomain, Data Type = L, Dimensions = 0, Bytes = 4, Value = T
[5] Key = STDBE511/baseInterpolationForVelocity, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
[5] Key = LinSolver/atol, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-009
[9] Key = STDBE511/baseContinuityForPressure, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
[14] Key = STDBE511/tFluidMaterials, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[14] Key = STDBE511/quadratureTypeForVelocity, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
[15] Key = STDBE511/baseInterpolationForPressure, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
[22] Key = STDBE511/timeDependency, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 2
[22] Key = LinSolver/rtol, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-005
[23] Key = LinSolver/convergenceIn, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[24] Key = STDBE511/stabParamOption, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[24] Key = STDBE511/quadratureTypeForPressure, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
[25] Key = STDBE511/startTime, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.000000000000000E+000
[25] Key = LinSolver/solverName, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 9
[26] Key = STDBE511/domainFileForVelocity, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = ./mesh.h5
[27] Key = STDBE511/tMaterialInterfaces, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[36] Key = STDBE511/domainFileForPressure, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = ./mesh.h5
[43] Key = STDBE511/materialInterfaces, Data Type = I4P, Dimensions = 1, Bytes = 4, Value = 7
[44] Key = STDBE511/baseContinuityForSpace, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
[50] Key = STDBE511/baseInterpolationForSpace, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
[51] Key = STDBE511/baseContinuityForTime, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
[51] Key = STDBE511/toleranceForSteadyState, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.999999993922529E-008
[53] Key = LinSolver/KrylovSubspaceSize, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 50
[57] Key = STDBE511/baseInterpolationForTime, Data Type = DLCA, Dimensions = 0, Bytes = 21, Value = LagrangeInterpolation
[58] Key = LinSolver/convergenceType, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[59] Key = STDBE511/quadratureTypeForSpace, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
[62] Key = STDBE511/tPorousMaterials, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 2
[64] Key = STDBE511/atoleranceForVelocity, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-005
[65] Key = LinSolver/relativeToRHS, Data Type = L, Dimensions = 0, Bytes = 4, Value = F
[66] Key = STDBE511/quadratureTypeForTime, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = GaussLegendre
[74] Key = STDBE511/atoleranceForPressure, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-009
[77] Key = STDBE511/coordinateSystem, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 3
[78] Key = STDBE511/endTime, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.429496735800000E+009
[79] Key = STDBE511/tDirichletBCForVelocity, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 3
[81] Key = STDBE511/rtoleranceForVelocity, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-005
[81] Key = STDBE511/tNeumannBCForVelocity, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[84] Key = STDBE511/dt, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.200000002980232E+000
[85] Key = STDBE511/name, Data Type = DLCA, Dimensions = 0, Bytes = 8, Value = STDBE511
[89] Key = STDBE511/tDirichletBCForPressure, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[91] Key = STDBE511/rtoleranceForPressure, Data Type = R8P, Dimensions = 0, Bytes = 8, Value =  0.100000000000000E-009
[91] Key = STDBE511/tNeumannBCForPressure, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[98] Key = STDBE511/engine, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = NATIVE_SERIAL
[98] Key = STDBE511/maxIter, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 20
[99] Key = STDBE511/baseContinuityForVelocity, Data Type = DLCA, Dimensions = 0, Bytes = 2, Value = H1
```

## Next

- [[STDBE511_test_2#STDBE511/Initiate]]

```fortran
END PROGRAM main
```
