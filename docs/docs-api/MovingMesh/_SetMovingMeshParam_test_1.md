This example shows how to set the parameters for steady stokes flow kernel

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE MovingMesh_Class
  IMPLICIT NONE
  TYPE( MovingMesh_ ) :: obj
  TYPE( HDF5File_ ) :: domainFile
  TYPE( Domain_ ) :: dom
  TYPE( ParameterList_ ) :: param
  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"
  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN
  INTEGER( I4B ), PARAMETER :: nsd = 2
  INTEGER( I4B ), PARAMETER :: nnt = 1
  REAL( DFP ), PARAMETER :: dt = 0.0_DFP
  REAL( DFP ), PARAMETER :: startTime = 0.0_DFP
  REAL( DFP ), PARAMETER :: endTime = 0.0_DFP
  REAL( DFP ), PARAMETER :: currentTime = 0.0_DFP
  INTEGER( I4B ), PARAMETER :: currentTimeStep = 1
  INTEGER( I4B ), PARAMETER :: totalTimeStep = 1
  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]
  CHARACTER( * ), PARAMETER :: domainFileName="./mesh.h5"
  INTEGER( I4B ), PARAMETER :: materialInterfaces(3) = [1,2,3]
  INTEGER( I4B ), PARAMETER :: maxIter = 100
  INTEGER( I4B ), PARAMETER :: tMaterials= 1
  INTEGER( I4B ), PARAMETER :: tDirichletBC = 2
  INTEGER( I4B ), PARAMETER :: tNeumannBC = 1
  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"
  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"
  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"
  INTEGER( I4B ), PARAMETER :: postProcessOpt = 1
```

Set parameters for kernel.

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

Set parameters for the kernel.

```fortran
  CALL SetMovingMeshParam( &
    & param=param, &
    & engine=engine, &
    & coordinateSystem=coordinateSystem, &
    & nsd=nsd, &
    & nnt=nnt, &
    & dt=dt, &
    & startTime=startTime, &
    & endTime=endTime, &
    & currentTime=currentTime, &
    & currentTimeStep=currentTimeStep, &
    & totalTimeStep=totalTimeStep, &
    & gravity=gravity, &
    & domainFile=domainFileName, &
    & materialInterfaces=materialInterfaces, &
    & maxIter=maxIter, &
    & tMaterials=tMaterials, &
    & tDirichletBC=tDirichletBC, &
    & tNeumannBC=tNeumannBC, &
    & baseInterpolationForSpace=baseInterpolationForSpace, &
    & baseContinuityForSpace=baseContinuityForSpace, &
    & quadratureTypeForSpace=quadratureTypeForSpace, &
    & postProcessOpt=postProcessOpt)
```

Let us print the parameter list.

```fortran
    CALL param%Print()
```

Let us check the essential parameter.

```fortran
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  END PROGRAM main
```
