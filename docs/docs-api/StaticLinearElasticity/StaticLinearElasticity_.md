# Introduction

`StaticLinearElasticity_` class is designed for simulating the static response of linear elastic solid materials. It is a child of [[AbstractKernel_]].

## Getting started

### Construct by using `Initiate`

The following code demonstrates how we can initiate the `StaticLinearElastic` kernel by using `Initiate` method.

```fortran
  type( StaticLinearElasticity_ ) :: obj
  type( ParameterList_ ) :: param
  type( domain_ ) :: dom
  type( MeshSelection_ ) :: region
  CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
  CHARACTER( LEN = * ), PARAMETER :: sleFileName="./templateSLE1.hdf5"
  type( HDF5File_ ) :: domainFile, sleFile
  !> main program starts here
  call Display( "TESTING INITIATE, ADDMATERIAL, EXPORT")
  call FPL_INIT(); call param%initiate()
  call setStaticLinearElasticityParam( param=param, engine="NATIVE_SERIAL", &
    & CoordinateSystem=KERNEL_PLANE_STRESS, tMaterials=2, &
    & totalDirichletBC=3, domainFile=domainFileName, BaseContinuity="H1", &
    & BaseInterpolation="LagrangeInterpolation", &
    & QuadratureType="GaussLegendre" )
  call setLinSolverParam( param=param, solverName=LIS_CG,&
    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
  !> initiating domain
  call Display( "INITIATING DOMAIN" )
  call domainFile%initiate( filename=domainFileName, mode="READ" )
  call domainFile%open()
  call dom%initiate( domainFile, '' )
  !> initiating kernel
  call Display( "INITIATING STATIC LINEAR ELASTICITY KERNEL" )
  call obj%initiate( param=param, dom=dom )
  !> now we add material
  !> first we select mesh region
  call region%initiate( isSelectionByMeshID=.TRUE. )
  call region%add( xidim=1, meshID=[1,5,6] )
  call region%add( xidim=2, meshID=[1] )
  !> now we add it to the kernel
  call obj%addMaterial( materialNo=1, region=region )
  !> now we select another region
  call region%Deallocate()
  call region%initiate( isSelectionByMeshID=.TRUE. )
  call region%add( xidim=1, meshID=[2,3,4] )
  call region%add( xidim=2, meshID=[2] )
  !> now we add it to the kernel
  call obj%addMaterial( materialNo=2, region=region )
  !> preparing solid material
  call setSolidParam( param=param, name="Solid", massDensity=5000.0_DFP, &
    & stressStrainModel="LinearElasticModel" )
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  call obj%addMaterial( materialNo=1, materialName="Solid", param=param )
  call setSolidParam( param=param, name="Solid", massDensity=8000.0_DFP, &
    & stressStrainModel="LinearElasticModel" )
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 2.0D+6 )
  call obj%addMaterial( materialNo=2, materialName="Solid", param=param )
  call obj%set()
  call sleFile%initiate( filename=sleFileName, mode="NEW" )
  call sleFile%open()
  call obj%export( hdf5=sleFile, group='' )
  call obj%Deallocate( )
  !> Deallocating stuffs
  call dom%Deallocate()
  call domainFile%close(); call domainFile%Deallocate()
  call sleFile%close(); call sleFile%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE()
```

### Construct by using `Import`

| Dataset                              |   Data type   |                            Value                             |                                                      Comment |
| ------------------------------------ | :-----------: | :----------------------------------------------------------: | -----------------------------------------------------------: |
| `domainFile`                         |    String     |                                                              |                                   The path of the  mesh file |
| `name`                               |    String     |                   `StaticLinearElasticity`                   |                                             It is a constant |
| `engine`                             |    String     |      `NATIVE_SERIAL` `NATIVE_OMP` `NATIVE_MPI` `PETSC`       |                                                              |
| `BasseContinuity`                    |    String     |                  `H1`,`H1Div`,`H1Curl`,`DG`                  |                                Continuity of shape function. |
| `BaseInterpolation`                  |    String     | `LagrangeInterpolation`, `HermitInterpolation`, `SerendipityInterpolation`, `HierarchyInterpolation` |                             Interpolation of shape functions |
| `QuadratureType`                     |    String     |                       `GaussLegendre`                        |                                                              |
| `CoordinateSystem`                   |    String     | `1D_H`, `1D_V`,`AXISYM`, `PLANE_STRAIN`, `PLANE_STRESS`, `3D` | This  variable  defines the spatial dimension of the partial differential equation. |
| `tMaterials`                         |    Integer    |                                                              |        Total number of materials present in the computations |
|                                      |               |                                                              |                                                            . |
| `Material1`                          | Group dataset |                              /                               | This is a group dataset, that is, a directory. Its content depends upon the  child of `Solid_` class. Please refer to the manual. |
| `Material2`                          | Group dataset |                              /                               |                                                              |
| `boundaryCondition`                  | Group dataset |                              /                               |                                                              |
| `boundaryCondition/totalDirichletBC` |    Integer    |                                                              |               Total number of  Dirichlet boundary conditions |
| `boundaryCondition/DirichletBC1`...  | Group dataset |                              /                               |                        Dirichlet Boundary Condition 1, 2,... |
| `Material1`...                       | Group dataset |                              /                               |                                                              |
|                                      |               |                                                              |                                                              |
| `linSolver`                          | Group dataset |                              /                               | This is a group dataset , that is, a directory. Its  content depends upon the child of `abstractLinSolver`. Please check the manual of individual child, for more detail |

The **template** of `DirichletBC1` is given below.

| Variable         | Data type |                  Value                   |    Comment |
| ---------------- | :-------: | :--------------------------------------: | ---------: |
| `name`           |           |                                          |            |
| `idof`           |           |                                          |            |
| `nodalValueType` |  String   | `CONSTANT`, `SPACE`, `TIME`, `SPACETIME` |            |
| `UseFunction`    |   BOOL    |                                          |            |
| `Boundary`       |   Group   |                    /                     | `Boundary` |

The **template** of `Boundary` , which is an instance of `MeshSelection_`, is given below.

| Variable              | Data type |     Value     |                                                      Comment |
| --------------------- | :-------: | :-----------: | -----------------------------------------------------------: |
| `isSelectionByMeshID` |   Bool    | True or False | Optional. Set it  to true, if you want  to select by supply `meshID` |
| `isSelectionByElemID` |   Bool    | True or False | Optional. Set it  to true, if you want  to select by supply `elemID` |
| `isSelectionByBox`    |   Bool    | True or False | Optional. Set it  to true, if you want  to select by supply  bounding box |
| `isSelectionByNode`   |   Bool    |               |                                                              |
| `PointMeshID`         |           |               |                                                              |
| `CurveMeshID`         |           |               |                                                              |
| `SurfaceMeshID`       |           |               |                                                              |
| `PointElemNum`        |           |               |                                                              |
| `CurveElemNum`        |           |               |                                                              |
| `SurfaceElemNum`      |           |               |                                                              |
| `VolumeElemNum`       |           |               |                                                              |
| `NodeNum`             |           |               |                                                              |

The **template** of `Material1` is given below

| Variable               |   Data type   |     Value     |                                                      Comment |
| ---------------------- | :-----------: | :-----------: | -----------------------------------------------------------: |
| `isSelectionByMeshID`  |     Bool      | True or False | Optional. Set it  to true, if you want  to select by supply `meshID` |
| `isSelectionByElemNum` |     Bool      | True or False | Optional. Set it  to true, if you want  to select by supply `elemID` |
| `isSelectionByBox`     |     Bool      | True or False | Optional. Set it  to true, if you want  to select by supply  bounding box |
| `isSelectionByNodeNum` |     Bool      |               |                                                              |
| `PointMeshID`          |               |               |                                                              |
| `CurveMeshID`          |               |               |                                                              |
| `SurfaceMeshID`        |               |               |                                                              |
| `VolumeMeshID`         |               |               |                                                              |
| `PointElemNum`         |               |               |                                                              |
| `CurveElemNum`         |               |               |                                                              |
| `SurfaceElemNum`       |               |               |                                                              |
| `VolumeElemNum`        |               |               |                                                              |
| `NodeNum`              |               |               |                                                              |
| `name`                 |    String     |               |                                                              |
| `massDensity`          |     REAL      |               |                                                              |
| `stressStrainModel`    | Group dataset |       /       |                                                              |
|                        |               |               |                                                              |

The **template** for `stressStrainModel`, which is an instance of  `LinearElasticModel_` is given below.

| Variable name    | Data type |              Value               |                                                      Comment |
| ---------------- | :-------: | :------------------------------: | -----------------------------------------------------------: |
| `name`           |  String   |       `LinearElasticModel`       |         It is constant, which denotes the name of the class. |
| `elasticityType` |  String   | `ISO`, `ANISO`, `ORTHO`, `TRANS` |                        It denotes the linear elasticity type |
| `isPlaneStress`  |  String   |            `T`or `F`             | If the problem is 2D, and plane stress then set it to .TRUE. |
| `isPlaneStrain`  |  String   |            `T` or `F`            | If the problem is 2D, and plane strain , then set it to .FALSE. |
| `lambda`         |   REAL    |                                  |               This is required when `ISO` option is selected |
| `ShearModulus`   |   REAL    |                                  |               This is required when `ISO` option is selected |
| `YoungsModulus`  |   REAL    |                                  |               This is required when `ISO` option is selected |
| `PoissonRatio`   |   REAL    |                                  |               This is required when `ISO` option is selected |
| `C`              | REAL(6,6) |                                  |           This is necessary when `ANISO` option is selected. |
| `invC`           | REAL(6,6) |                                  |           This is necessary when `ANISO` option is selected. |

The **template** of `linSolver`, which is an instance of `LinearSolver_` class, with engine type `NATIVE_SERIES` is given below.

| Variable             | Data type |                 Value                 |                                                      Comment |
| -------------------- | :-------: | :-----------------------------------: | -----------------------------------------------------------: |
| `engine`             |  String   |            `NATIVE_SERIAL`            | This variable helps us to create correct child of `AbstractLinSolver` class. For other children we have following values reserved  : `NATIVE_OMP`,`NATIVE_MPI`,`PETSC`,`LIS_SERIAL`,`LIS_OMP`,`LIS_MPI` |
| `solverName`         |  String   |                 `CG`                  |                                           This is a constant |
| `preconditionOption` |  String   | `LEFT`, `RIGHT`, `LEFT_RIGHT`, `NONE` |             What type of preconditioning do you want to use? |
| `convergenceIn`      |  String   |        `RESIDUAL`, `SOLUTION`         |  Should we check convergence in `residual` or the `solution` |
| `convergenceType`    |  String   |         `ABSOLUT`, `RELATIVE`         |                 Absolute convergence or relative convergence |
| `relativeToRHS`      |   Char    |               `T`, `F`                |                 It is used when convergence Type is relative |
| `maxIter`            |    INT    |                                       |                                 Maximum number of iterations |
| `KrylovSubspaceSize` |    INT    |                                       | This is used when GMRES is used, you can set it to 15 to 20. |
| `relativeTolerance`  |   REAL    |                                       |              Tolerance for checking the relative convergence |
| `absoluteTolerance`  |   REAL    |                                       |              Tolerance for checking the absolute convergence |

First we export the data to a `hdf5` file using the following commands.

```fortran
 type( StaticLinearElasticity_ ) :: obj
  type( ParameterList_ ) :: param
  type( domain_ ) :: dom
  CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"
  CHARACTER( LEN = * ), PARAMETER :: sleFileName="./templateSLE1.hdf5"
  type( HDF5File_ ) :: domainFile, sleFile
  !> main program starts here
  call Display( "TESTING INITIATE, ADDMATERIAL, EXPORT")
  call FPL_INIT(); call param%initiate()
  call setStaticLinearElasticityParam( param=param, engine="NATIVE_SERIAL", &
    & CoordinateSystem=KERNEL_PLANE_STRESS, tMaterials=2, &
    & totalDirichletBC=3, domainFile=domainFileName, BaseContinuity="H1", &
    & BaseInterpolation="LagrangeInterpolation", &
    & QuadratureType="GaussLegendre" )
  call setLinSolverParam( param=param, solverName=LIS_CG,&
    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
  !> initiating domain
  call Display( "INITIATING DOMAIN" )
  call domainFile%initiate( filename=domainFileName, mode="READ" )
  call domainFile%open()
  call dom%initiate( domainFile, '' )
  !> initiating kernel
  call Display( "INITIATING STATIC LINEAR ELASTICITY KERNEL" )
  call obj%initiate( param=param, dom=dom )
  !> now we add material
  call obj%addMaterial( materialNo=1, xidim=1, meshID=[1,5,6], &
    & isSelectionByMeshID=.TRUE. )
  call obj%addMaterial( materialNo=1, xidim=2, meshID=[1] )
  call obj%addMaterial( materialNo=2, xidim=1, meshID=[2,3,4], &
    & isSelectionByMeshID=.TRUE. )
  call obj%addMaterial( materialNo=2, xidim=2, meshID=[2] )
  !> preparing solid material
  call setSolidParam( param=param, name="Solid", massDensity=5000.0_DFP, &
    & stressStrainModel="LinearElasticModel" )
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  call obj%addMaterial( materialNo=1, materialName="Solid", param=param )
  call setSolidParam( param=param, name="Solid", massDensity=8000.0_DFP, &
    & stressStrainModel="LinearElasticModel" )
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 2.0D+6 )
  call obj%addMaterial( materialNo=2, materialName="Solid", param=param )
  call obj%set()
  call sleFile%initiate( filename=sleFileName, mode="NEW" )
  call sleFile%open()
  call obj%export( hdf5=sleFile, group='' )
  call obj%Deallocate( )
  !> Deallocating stuffs
  call dom%Deallocate()
  call domainFile%close(); call domainFile%Deallocate()
  call sleFile%close(); call sleFile%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE()
```

Then, we import the data using the following code.

```fortran
  type( StaticLinearElasticity_ ) :: obj
  type( domain_ ) :: dom
  CHARACTER( LEN = * ), PARAMETER :: domainFilePath="./mesh.h5"
  CHARACTER( LEN = * ), PARAMETER :: kernelFilePath="./templateSLE1.hdf5"
  type( HDF5File_ ) :: domainFile, kernelFile
  call Display( "TESTING INITIATE & IMPORT")
  !> initiating domain
  call Display( "INITIATING DOMAIN" )
  call domainFile%initiate( filename=domainFilePath, mode="READ" )
  call domainFile%open()
  call dom%initiate( domainFile, '' )
  !> initiating kernel
  call Display( "INITIATING KERNEL" )
  call kernelFile%initiate( filename=kernelFilePath, mode="READ" )
  call kernelFile%open()
  call obj%import( hdf5=kernelFile, group='', dom=dom )
  call obj%set()
  call obj%Deallocate( )
  !> Deallocating stuffs
  call dom%Deallocate()
  call domainFile%close(); call domainFile%Deallocate()
  call kernelFile%close(); call kernelFile%Deallocate()
```

## Adding materials

In this section we demonstrate how to add materials to the kernel. It is a two step process.

1. Add the mesh region
2. Add the material

The following code explains how to add the mesh region

```fortran
type( MeshSelection_ ) :: region
 call region%initiate( isSelectionByMeshID=.TRUE. )
 call region%add( xidim=1, meshID=[1,5,6] )
 call region%add( xidim=2, meshID=[1] )
 call obj%addMaterial( materialNo=1, region=region )
 !> now we select another region
  call region%Deallocate()
  call region%initiate( isSelectionByMeshID=.TRUE. )
  call region%add( xidim=1, meshID=[2,3,4] )
  call region%add( xidim=2, meshID=[2] )
  !> now we add it to the kernel
  call obj%addMaterial( materialNo=2, region=region )
```

The following code explains how to add material to the kernel
