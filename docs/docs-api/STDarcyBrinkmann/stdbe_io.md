---
title: STDarcyBrinkmann IO methods
author: Vikas Sharma, Ph.D.
date: 15 Nov 2021
update: 15 Nov 2021
---

# STDarcyBrinkmann IO methods


### Import

!!! note ""
	Import the data from [[HDF5File_]] to initiate an instance of [[STDarcyBrinkmann_]]


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