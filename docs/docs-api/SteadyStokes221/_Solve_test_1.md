This example tests and demonstrates the usage of `Solve()` method.

Use modules

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE SteadyStokes221_Class
  IMPLICIT NONE
```

Declare variables

```fortran
  TYPE( SteadyStokes221_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( DomainPointer_ ) :: domains(2)
  CLASS( Domain_ ), POINTER :: dom => NULL()
  CHARACTER( LEN = * ), PARAMETER :: domainFileNamePressure="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: domainFileNameVelocity="./mesh_tri6.h5"
  TYPE(String) :: filename(2)
  TYPE( MeshSelection_ ) :: region
  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()
  INTEGER( I4B ) :: intDebug
```

Set parameters

Initiate an instance of [ParameterList_](../ParameterList/ParameterList_.md), param, this will be used to initiate several objects.

```fortran title="Initiate param"
  CALL FPL_INIT(); CALL param%Initiate()
```

```fortran {5} title="set SteadyStokes221 parameters"
  CALL SetSteadyStokes221Param( &
    & param=param, &
    & isConservativeForm=.TRUE., &
    & gravity = [0.0_DFP, -9.8_DFP, 0.0_DFP], &
    & domainFileForPressure = domainFileNamePressure, &
    & domainFileForVelocity = domainFileNameVelocity, &
    & engine="NATIVE_SERIAL", &
    & CoordinateSystem=KERNEL_CARTESIAN, &
    & maxIter = 100, &
    & rtoleranceForPressure = REAL( 1.0E-6, DFP ), &
    & rtoleranceForVelocity = REAL( 1.0E-6, DFP ), &
    & atoleranceForPressure = REAL( 1.0E-6, DFP ), &
    & atoleranceForVelocity = REAL( 1.0E-6, DFP ), &
    & toleranceForSteadyState = REAL( 1.0E-6, DFP ), &
    & tFluidMaterials=1, &
    & tDirichletBCForPressure=1, &
    & tDirichletBCForVelocity=3, &
    & baseInterpolationForSpace="LagrangeInterpolation", &
    & baseContinuityForSpace="H1", &
    & quadratureTypeForSpace="GaussLegendre", &
    & postProcessOpt=1)
```

```fortran title="Set param for linSolver"
  CALL SetLinSolverParam( &
    & param=param, &
    & solverName=LIS_GMRES,&
    & preconditionOption=NO_PRECONDITION, &
    & convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, &
    & maxIter=100, &
    & relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20, &
    & rtol=REAL( 1.0E-10, DFP ), &
    & atol=REAL( 1.0D-10, DFP ) )
```

Initiate domain

```fortran {1} title="Initiate domain"
  filename = [String(domainFileNameVelocity), &
    & String(domainFileNamePressure)]
  CALL e%setQuietMode(.TRUE.)
  CALL Initiate(domains=domains, filename=filename)
```

:::caution In line 1, make sure that Velocity domain comes first.
:::

Initiate kernel

```fortran {1} title="Initiate kernel"
  CALL e%setQuietMode(.TRUE.)
  CALL obj%Initiate(param=param, domains=domains )
```

Here, line 1 is to allow verbosity.

Add fluid material to kernel. To do so, we first create an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md). Then we add this instance to the kernel.

```fortran title="adding fluid material"
  CALL e%setQuietMode(.TRUE.)
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd, meshID=[1] )
  CALL SetFluidMaterialParam( &
    & param=param, &
    & name="fluidMaterial", &
    & massDensity=1000.0_DFP, &
    & dynamicViscosity = 0.001_DFP, &
    & stressStrainModel="NewtonianFluidModel" )
  CALL SetNewtonianFluidModelParam( &
    & param = param, &
    & dynamicViscosity = 0.001_DFP )
```

```fortran
  CALL e%setQuietMode(.TRUE.)
  CALL obj%AddFluidMaterial( &
    & materialNo=1, &
    & materialName="fluidMaterial", &
    & param=param, &
    & region=region)
  CALL region%Deallocate()
```

Add Dirichlet boundary condition

V1=0, Now we show how to add dirichlet boundary condition. To this end first we create an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md) to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel.

Set parameters for dirichlet boundary condition:

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="ZeroV1", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE. )
```

Select the mesh region:

```fortran
#define BOTTOM 1
#define RIGHT 2
#define TOP 3
#define LEFT 4
```

```fortran
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, RIGHT, LEFT] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddVelocityDirichletBC( &
    & dbcNo=1, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=1 )
  CALL dbc%Set( ConstantNodalValue=0.0_DFP )
  dbc=>NULL()
```

V1=U, Set parameters for dirichlet boundary condition:

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="UpstreamV1", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE. )
```

Select the mesh region:

```fortran
  CALL region%Deallocate()
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[TOP] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddVelocityDirichletBC( &
    & dbcNo=2, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=2 )
  CALL dbc%Set( ConstantNodalValue=0.001_DFP )
  dbc=>NULL()
  CALL region%Deallocate()
```

V2=0, Set parameters for dirichlet boundary condition:

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="ZeroV2", &
    & idof=2, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE. )
```

Select the mesh region:

```fortran
  CALL region%Deallocate()
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, RIGHT, TOP, LEFT] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddVelocityDirichletBC( &
    & dbcNo=3, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=3 )
  CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()
  CALL region%Deallocate()
```

P=0, Set parameters for dirichlet boundary condition:

```fortran
CALL SetDirichletBCParam( &
  & param=param, &
  & name="ZeroP", &
  & idof=1, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE. )
```

Select the mesh region:

```fortran
CALL region%Deallocate()
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM] )
CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddPressureDirichletBC( dbcNo=1, param=param, &
    & boundary=region )
  dbc => obj%GetPressureDirichletBCPointer( dbcNo=1 )
  CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()
  CALL region%Deallocate()
```

Now that we are done with the setup, we should call `Set` method. In this method, the kernel checks the data, configuration, and intiates appropriate variables.

```fortran
  call display("solve test 1 set ()")
  CALL obj%Set()
```

AssembleTanMat

```fortran title="assembling tangent matrix"
  CALL e%setQuietMode(.TRUE.)
  call display("solve test 1 AssembleTanmat()")
  CALL obj%AssembleTanmat()
```

```comment
  CALL obj%Kmat%SPY(filename="./Kmat", ext=".png")
  CALL obj%Gmat%SPY(filename="./Gmat", ext=".png")
```

AssembleRHS

```fortran
  CALL e%setQuietMode(.TRUE.)
  call display("solve test 1 AssembleRHS()")
  CALL obj%AssembleRHS()
```

Assemble

```fortran
  call display("solve test 1 Assemble()")
  CALL e%setQuietMode(.TRUE.)
  CALL obj%Assemble()
```

Solve

```fortran
  call display("solve test 1 Solve()")
  CALL e%setQuietMode(.FALSE.)
  CALL obj%Solve()
  CALL Display("========= Solve test 1 Debug 1 =========")
```

Cleanup

```fortran
  CALL obj%Deallocate()
  CALL Display("========= Solve test 1 Debug 2 =========")
  CALL param%Deallocate()
  CALL Display("========= Solve test 1 Debug 3 =========")
  CALL FPL_FINALIZE()
  CALL Display("========= Solve test 1 Debug 4 =========")
END PROGRAM main
```
