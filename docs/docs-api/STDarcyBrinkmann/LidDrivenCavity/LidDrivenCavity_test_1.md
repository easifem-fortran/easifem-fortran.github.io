---
title: LidDrivenCavity example 1
authors: Vikas Sharma, Ph. D.
date: 20 Jan 2022
update: 20 Jan 2022
tags:
  - STDarcyBrinkmann/Initiate
  - STDarcyBrinkmann/AddPorousMaterial
  - STDarcyBrinkmann/AddVelocityBC
  - STDarcyBrinkmann/GetVelocityBCPointer
  - STDarcyBrinkmann/AddPressureBC
  - STDarcyBrinkmann/GetPressureBCPointer
  - STDarcyBrinkmann/Set
  - STDarcyBrinkmann/AssembleTanMat
---

# LidDrivenCavity example 1

!!! note ""
    This example solves a benchmark problem of LidDrivenCavity.

- Mesh used for velocity and pressure field is the same.

![](./meshP.png)
![](./meshV.png)

## Modules & Classes

- [[STDarcyBrinkmann_]]

## Usages

!!! note ""
    IMPORT the modules.

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE STDarcyBrinkmann_Class
  IMPLICIT NONE
```

!!! note ""
    Define the variables.

```fortran
  TYPE(STDarcyBrinkmann_) :: obj
  TYPE(ParameterList_) :: param
  TYPE(HDF5File_) :: domainFileForPressure
  TYPE(HDF5File_) :: domainFileForVelocity
  TYPE( HDF5File_ ) :: outfile
  TYPE(MeshSelection_) :: region
  TYPE(Domain_), TARGET :: domainForPressure
  TYPE(Domain_), TARGET :: domainForVelocity
  TYPE(DomainPointer_) :: domains(2)
  CLASS(DirichletBC_), POINTER :: dbc => NULL()
  CHARACTER(LEN=*), PARAMETER :: &
    & domainFileNameForPressure = "./mesh.h5"
  CHARACTER(LEN=*), PARAMETER :: &
    & domainFileNameForVelocity = "./mesh.h5"
  CHARACTER( LEN = * ), PARAMETER :: &
    & outfileName="./LidDrivenCavity.output.h5"
  INTEGER(I4B), PARAMETER :: nnt = 2
  INTEGER(I4B), PARAMETER :: TotalTimeSteps = 1
  REAL(DFP), PARAMETER :: startTime=0.0_DFP
  REAL(DFP), PARAMETER :: endTime=1.0_DFP
  REAL(DFP), PARAMETER :: dt=0.01_DFP
  INTEGER( I4B ), PARAMETER :: maxIter=5
  REAL( DFP ), PARAMETER :: tol_Pressure=1.0D-8
  REAL( DFP ), PARAMETER :: tol_Velocity=1.0D-8
  INTEGER(I4B), PARAMETER :: tPorousMaterials = 1
  INTEGER(I4B), PARAMETER :: tFluidMaterials = 1
  INTEGER(I4B), PARAMETER :: tDirichletBCForVelocity = 3
  INTEGER(I4B), PARAMETER :: tDirichletBCForPressure = 1
  INTEGER(I4B), PARAMETER :: maxIter_LinSolver = 20 * 100
  INTEGER(I4B), PARAMETER :: KrylovSubspaceSize = 20
  REAL(DFP), PARAMETER :: rtol_LinSolver=1.0D-8
  REAL(DFP), PARAMETER :: atol_LinSolver=1.0D-12
  INTEGER(I4B), PARAMETER :: LinSolver_name = LIS_GMRES
  INTEGER(I4B), PARAMETER :: preconditionOption = LIS_GMRES
  REAL(DFP), PARAMETER :: porosity=1.0
  REAL(DFP), PARAMETER :: massdensity_soil=1700.0
  REAL(DFP), PARAMETER :: permeability=1.0D+20
  REAL(DFP), PARAMETER :: massdensity_fluid=1000.0
  REAL(DFP), PARAMETER :: dynamicViscosity=0.001_DFP
  REAL(DFP), PARAMETER :: V_TOP=0.001_DFP
  LOGICAL( LGT ) :: convg
  INTEGER( I4B ) :: iter
  INTEGER( I4B ) :: its
```

!!! note ""
    Initiate an instance of [[ParameterList_]], param, this will be used to initiate several objects.

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

!!! note "SetSTDarcyBrinkmannParam"

```fortran
  CALL SetSTDarcyBrinkmannParam( &
    & param=param, &
    & engine="NATIVE_SERIAL", &
    & nnt=nnt, &
    & startTime=startTime, &
    & endTime=endTime, &
    & dt=dt, &
    & CoordinateSystem=KERNEL_2D, &
    & maxIter=maxIter, &
    & convergenceType=absoluteConvergence, &
    & toleranceForPressure=tol_pressure, &
    & toleranceForVelocity=tol_velocity, &
    & tPorousMaterials=tPorousMaterials, &
    & tFluidMaterials=tFluidMaterials, &
    & tDirichletBCForPressure=tDirichletBCForPressure, &
    & tDirichletBCForVelocity=tDirichletBCForVelocity, &
    & domainFileForPressure=domainFileNameForPressure, &
    & domainFileForVelocity=domainFileNameForVelocity)
```

!!! note "LinSolver"

```fortran
  CALL SetLinSolverParam( &
    & param=param, &
    & solverName=LinSolver_name,&
    & preconditionOption=NO_PRECONDITION, &
    & convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, &
    & maxIter=maxIter_LinSolver, &
    & relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=KrylovSubspaceSize, &
    & rtol=rtol_LinSolver, &
    & atol=atol_LinSolver )
```

!!! note "domainForPressure"

```fortran
  CALL domainFileForPressure%Initiate( &
    & filename=domainFileNameForPressure, &
    & MODE="READ")
  CALL domainFileForPressure%Open()
  CALL domainForPressure%Initiate(domainFileForPressure, "")
  CALL domainFileForPressure%Deallocate()
```

!!! note "domainForVelocity"

```fortran
  CALL domainFileForVelocity%Initiate(filename=domainFileNameForVelocity, &
  & MODE="READ")
  CALL domainFileForVelocity%Open()
  CALL domainForVelocity%Initiate(domainFileForVelocity, "")
  CALL domainFileForVelocity%Deallocate()
```

!!! note "domains"
    Packing domains in a vector of [[DomainPointer_]]

```fortran
  domains(1)%ptr => domainForVelocity
  domains(2)%ptr => domainForPressure
```

!!! note "STDarcyBrinkmann%Initiate"

```fortran
  CALL obj%Initiate(param=param, domains=domains)
```

!!! note "AddPorousMaterial"

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  !!
  CALL region%Add(dim=obj%nsd, meshID=[1])
  !!
  CALL SetPorousMaterialParam( &
    & param=param, &
    & name="porousMaterial", &
    & massdensity=massdensity_soil, &
    & porosity=porosity, &
    & permeability=permeability )
  !!
  CALL obj%AddPorousMaterial( &
    & materialNo=1, &
    & materialName="porousMaterial", &
    & param=param, &
    & region=region)
  !!
  CALL region%Deallocate()
```

!!! note "AddFluidMaterial"

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  !!
  CALL region%Add(dim=obj%nsd, meshID=[1])
  !!
  CALL SetFluidMaterialParam( &
    & param=param, &
    & name="fluidMaterial", &
    & massDensity=massdensity_fluid, &
    & dynamicViscosity=dynamicViscosity )
  !!
  CALL obj%AddFluidMaterial( &
    & materialNo=1, &
    & materialName="fluidMaterial", &
    & param=param, &
    & region=region )
  !!
  CALL region%Deallocate()
```

!!! note "AddVelocityBC"

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="Vx=0", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  !!
  CALL region%Initiate( &
    & isSelectionByMeshID=.TRUE., &
    & isSelectionByNodeNum=.TRUE. )
  CALL region%Add(dim=obj%nsd-1, meshID=[1])
  CALL region%Add(nodenum=&
    & domainForVelocity%getInternalNptrs( &
    & dim=obj%nsd-1, &
    & entityNum=[2,4] ) )
  CALL region%Set()
  !!
  CALL obj%AddVelocityBC(dbcNo=1, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=0.0_DFP)
  dbc => NULL()
```

!!! note "AddVelocityBC"

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="Vy=0", &
    & idof=2, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  !!
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=obj%nsd-1, meshID=[1])
  CALL region%Add(nodenum=&
    & domainForVelocity%getInternalNptrs( &
    & dim=obj%nsd-1, &
    & entityNum=[2,4] ) )
  CALL region%Set()
  !!
  CALL obj%AddVelocityBC(dbcNo=2, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=2)
  CALL dbc%Set(ConstantNodalValue=0.0_DFP)
  dbc => NULL()
```

!!! note "AddVelocityBC"

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="Vx=V", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  !!
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=obj%nsd-1, meshID=[3])
  CALL region%Set()
  !!
  CALL obj%AddVelocityBC(dbcNo=3, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=3)
  CALL dbc%Set(ConstantNodalValue=V_TOP)
  dbc => NULL()
```

!!! note "AddPressureBC"

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="P=0", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  !!
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=obj%nsd-1, meshID=[3])
  CALL region%Set()
  !!
  CALL obj%AddPressureBC(dbcNo=1, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetPressureBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=0.0_DFP)
  dbc => NULL()
```

!!! note "Set"

```fortran
  CALL obj%Set( )
  !!CALL obj%Display( 'obj: ' )
```

```fortran
    CALL outfile%Initiate(outfileName, "NEW")
    CALL outfile%Open()
```

!!! note "AssembleTanMat"

```fortran
  DO its = 1, TotalTimeSteps
    obj%currentTimeStep = its
    CALL obj%ApplyDirichletBC()
    DO iter = 1, maxIter
      obj%iterdata%iterationNumber=iter
      CALL obj%AssembleTanmat()
      CALL obj%AssembleRHS()
      CALL obj%Assemble()
      CALL obj%Solve()
      convg = obj%isConverged()
      CALL obj%sol%Display( &
        & 'main, solution at iteration ' &
        & // tostring( iter ), &
        & unitno=10 )
      IF( convg ) THEN
        CALL obj%Update(reset=.FALSE.)
        EXIT
      ELSE
        CALL obj%UpdateIteration(reset=.FALSE.)
      END IF
    END DO
    !!
    IF( .NOT. convg ) THEN
      CALL Display( 'No convergence achieved, stopped ' )
      STOP
    ELSE
      CALL obj%WriteData(outfile, "/"//tostring(its))
    END IF
  END DO
```

!!! settings "Cleanup"

```fortran
  CALL outfile%Deallocate()
  CALL obj%Deallocate()
  CALL domainForPressure%Deallocate()
  CALL domainForVelocity%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
