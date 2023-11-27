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
  INTEGER( I4B ), PARAMETER :: maxIter = 100
  INTEGER( I4B ), PARAMETER :: tMaterials= 1
  INTEGER( I4B ), PARAMETER :: tDirichletBC = 3
  INTEGER( I4B ), PARAMETER :: tNeumannBC = 0
  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"
  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"
  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"
  INTEGER( I4B ), PARAMETER :: postProcessOpt = 1
  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_GMRES
  INTEGER(I4B), PARAMETER :: ls_preconditionOption= NO_PRECONDITION
  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes
  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence
  INTEGER( I4B ), PARAMETER :: ls_maxIter = 100
  LOGICAL( LGT ), PARAMETER :: ls_relativeToRHS = .TRUE.
  INTEGER( I4B ), PARAMETER :: ls_KrylovSubspaceSize=20
  REAL( DFP ) , PARAMETER :: ls_rtol=1.0E-10
  REAL( DFP ) , PARAMETER :: ls_atol=1.0E-10
  TYPE(MeshSelection_) :: region
  INTEGER( I4B ), PARAMETER :: solid_meshID(1)=[1]
  REAL(DFP), PARAMETER :: solid_massDensity = 1000.0
  REAL(DFP), PARAMETER :: solid_dynamicViscosity = 0.001_DFP
  CHARACTER(LEN=*), PARAMETER :: solid_stressStrainModel = "LinearElasticModel"
  INTEGER( I4B ), PARAMETER :: solid_ElasticityType=IsoLinearElasticModel
  LOGICAL( LGT ), PARAMETER :: solid_isPlaneStress = .FALSE.
  LOGICAL( LGT ), PARAMETER :: solid_isPlaneStrain = .TRUE.
  REAL( DFP ), PARAMETER :: solid_PoissonRatio = 0.3_DFP
  REAL( DFP ) , PARAMETER :: solid_YoungsModulus = 1.0E+6
  REAL( DFP ), PARAMETER :: U1_right = 0.1_DFP
  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()
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
    !!& materialInterfaces=materialInterfaces, &
    & maxIter=maxIter, &
    & tMaterials=tMaterials, &
    & tDirichletBC=tDirichletBC, &
    & tNeumannBC=tNeumannBC, &
    & baseInterpolationForSpace=baseInterpolationForSpace, &
    & baseContinuityForSpace=baseContinuityForSpace, &
    & quadratureTypeForSpace=quadratureTypeForSpace, &
    & postProcessOpt=postProcessOpt)
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
```

Add solid material.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=dom%GetNSD(), meshID=solid_meshID)
  CALL SetSolidMaterialParam( &
    & param=param, &
    & name="solidMaterial", &
    & massDensity=solid_massDensity, &
    & stressStrainModel=solid_stressStrainModel)

  CALL SetLinearElasticModelParam( &
    & param=param, &
    & ElasticityType=solid_ElasticityType, &
    & isPlaneStress=solid_isPlaneStress, &
    & isPlaneStrain=solid_isPlaneStrain, &
    & PoissonRatio=solid_PoissonRatio, &
    & YoungsModulus=solid_YoungsModulus &
    & )

  CALL obj%AddSolidMaterial( &
    & materialNo=1, &
    & materialName="solidMaterial", &
    & param=param, &
    & region=region)
  CALL region%DEALLOCATE()
```

Now we show how to add dirichlet boundary condition. To this end first we create an instance of [MeshSelection](../MeshSelection/MeshSelection_.md) to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel.

set parameters for dirichlet boundary condition:

```fortran
#define BOTTOM 1
#define RIGHT 2
#define TOP 3
#define LEFT 4
```

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="U1=0", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE. )
```

select the mesh region:

```fortran
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[LEFT] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddDisplacementDirichletBC( &
    & dbcNo=1, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetDisplacementDirichletBCPointer( dbcNo=1 )
  CALL dbc%Set( ConstantNodalValue=0.0_DFP )
  dbc=>NULL()
```

AddDirichletBC, U2=0,
set parameters for dirichlet boundary condition:

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="U2=0", &
    & idof=2, &
    & nodalValueType = Constant, &
    & useFunction=.FALSE. )
```

select the mesh region:

```fortran
  CALL region%Deallocate()
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[LEFT, RIGHT] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddDisplacementDirichletBC( &
    & dbcNo=2, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetDisplacementDirichletBCPointer( dbcNo=2 )
  CALL dbc%Set( ConstantNodalValue = 0.0_DFP )
  dbc=>NULL()
  CALL region%Deallocate()
```

AddDirichletBC, U1=U,
set parameters for dirichlet boundary condition:

```fortran
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="U1=U", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE. )
```

select the mesh region:

```fortran
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  CALL region%Add( dim=obj%nsd-1, meshID=[RIGHT] )
  CALL region%Set()
```

Add dirichlet boundary condition and the region to kernel:

```fortran
  CALL obj%AddDisplacementDirichletBC( &
    & dbcNo=3, &
    & param=param, &
    & boundary=region )
  dbc => obj%GetDisplacementDirichletBCPointer( dbcNo=3 )
  CALL dbc%Set( ConstantNodalValue=U1_right )
  dbc=>NULL()
```

Set

```fortran
  CALL obj%Set()
```

```fortran
  CALL obj%Display("")
```

```fortran
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL domainFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
