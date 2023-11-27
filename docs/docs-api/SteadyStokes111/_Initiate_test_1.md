This example shows how to set the parameters for steady stokes flow kernel.
Then we initiate the kernel and display its content on the screen.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE SteadyStokes111_Class
  IMPLICIT NONE
  TYPE( SteadyStokes111_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( HDF5File_ ) :: domainFile
  TYPE( Domain_ ) :: dom
  INTEGER( I4B ), PARAMETER :: refPressureNode=2
  REAL( DFP ), PARAMETER :: refPressure = 0.0_DFP
  INTEGER( I4B ), PARAMETER :: tDirichletBCForVelocity = 2
  INTEGER( I4B ), PARAMETER :: tDirichletBCForPressure = 0
  INTEGER( I4B ), PARAMETER :: tFluidMaterials= 1
  INTEGER( I4B ), PARAMETER :: stabParamOption= 1
  LOGICAL( LGT ), PARAMETER :: isSubscalePressure = .FALSE.
  LOGICAL( LGT ), PARAMETER :: isBoundarySubscale = .FALSE.
  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]
  LOGICAL( LGT ), PARAMETER :: isConservativeForm = .TRUE.
  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"
  CHARACTER( * ), PARAMETER :: domainFileName="./long_pipe_tri3.h5"
  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN
  INTEGER( I4B ), PARAMETER :: maxIter = 100
  REAL( DFP ), PARAMETER :: rtoleranceForPressure = 1.0E-6
  REAL( DFP ), PARAMETER :: rtoleranceForVelocity = 1.0E-6
  REAL( DFP ), PARAMETER :: atoleranceForPressure = 1.0E-6
  REAL( DFP ), PARAMETER :: atoleranceForVelocity = 1.0E-6
  REAL( DFP ), PARAMETER :: toleranceForSteadyState = 1.0E-6
  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"
  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"
  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"
  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_GMRES
  INTEGER(I4B), PARAMETER :: ls_preconditionOption= LEFT_PRECONDITION
  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes
  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence
  INTEGER( I4B ), PARAMETER :: ls_maxIter = 100
  LOGICAL( LGT ), PARAMETER :: ls_relativeToRHS = .TRUE.
  INTEGER( I4B ), PARAMETER :: ls_KrylovSubspaceSize=20
  REAL( DFP ) , PARAMETER :: ls_rtol=1.0E-10
  REAL( DFP ) , PARAMETER :: ls_atol=1.0E-10
```

Set parameters for kernel.

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

Set parameters for the kernel.

```fortran
  CALL SetSteadyStokes111Param( &
    & param=param, &
    & isConservativeForm=isConservativeForm, &
    & gravity = gravity, &
    & isSubscalePressure = isSubscalePressure, &
    & isBoundarySubscale = isBoundarySubscale, &
    & stabParamOption = stabParamOption, &
    & domainFile = domainFileName, &
    & engine=engine, &
    & CoordinateSystem=KERNEL_CARTESIAN, &
    & maxIter =maxIter, &
    & rtoleranceForPressure = rtoleranceForPressure, &
    & rtoleranceForVelocity = rtoleranceForVelocity, &
    & atoleranceForPressure = atoleranceForPressure, &
    & atoleranceForVelocity = atoleranceForVelocity, &
    & toleranceForSteadyState = toleranceForSteadyState, &
    & tFluidMaterials=tFluidMaterials, &
    & tDirichletBCForPressure=tDirichletBCForPressure, &
    & tDirichletBCForVelocity=tDirichletBCForVelocity, &
    & baseInterpolationForSpace=baseInterpolationForSpace, &
    & baseContinuityForSpace=baseContinuityForSpace, &
    & quadratureTypeForSpace=quadratureTypeForSpace, &
    & refPressureNode=refPressureNode, &
    & refPressure=refPressure &
    & )
```

Setting parameters for linear solver.

```fortran
  CALL SetLinSolverParam( &
    & param=param, &
    & solverName=ls_solverName,&
    & preconditionOption=ls_preconditionOption, &
    & convergenceIn=ls_convergenceIn, &
    & convergenceType=ls_convergenceType, &
    & maxIter=ls_maxIter, &
    & relativeToRHS=ls_relativeToRHS, &
    & KrylovSubspaceSize=ls_KrylovSubspaceSize, &
    & rtol=ls_rtol, &
    & atol=ls_atol )
```

Initiate domain by reading data from a domain file.

```fortran
  CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )
  CALL domainFile%Open()
  CALL dom%Initiate( domainFile, "" )
```

Initiate the kernel.

```fortran
  CALL obj%Initiate(param=param, dom=dom )
  CALL obj%Display("")
```

```fortran
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL domainFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
