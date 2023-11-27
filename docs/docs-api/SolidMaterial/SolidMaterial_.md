# Introduction

`SolidMaterial_` is a child of `AbstractMaterial_` class [[AbstractMaterial_]]. It can define solid materials, like steel, brass, copper, among others.

`SolidMaterial_` also encapsulates the abstract model for defining the material constitutive behavior.

## Structure

The header of `SolidMaterial_` is given below, or you can see it here <a href="https://vickysharma0812.github.io/easifem-materials/type/solidmaterial_.html#src">:material-github: :material-webpack:</a>

```{.f90 title="Header of SolidMaterial"}
--8<-- "SolidMaterial_header.F90"
```

**Class diagram** is shown below.

- [ ] Add class diagram at [[SolidMaterial_]]

## Construction by using `Initiate()` method

To construct an instance by using `Initiate()` we need to first set the parameters.

- First, call `setSolidMaterialParam()`, which will set the essential parameters in `param`
- Then, pass `param` to `Initiate()` method.
- If you want to initiate the `stressStrainModel`, then make sure to set the information in the `param`.
- More information about the `stressStrainModel` can be found in [[AbstractSolidMechanicsModel_]]

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
TYPE( SolidMaterial_ ) :: obj
TYPE( ParameterList_ ) :: param
INTEGER( I4B ) :: ierr
!> main
CALL FPL_Init(); CALL param%initiate()
CALL setSolidMaterialParam( param=param, name="SolidMaterial", &
  & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel" )
CALL setLinearElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .TRUE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
CALL param%Print()
CALL obj%initiate( param )
CALL obj%display( msg="Testing setSolidMaterialParam" )
CALL FPL_FINALIZE; CALL param%Deallocate()
END PROGRAM main
```

??? note "Click here to see the output of `param%print()`"
    ```text
    Key = LinearElasticModel/ShearModulus, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.384615384615385E+006
    Key = LinearElasticModel/PoissonRatio, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.300000000000000E+000
    Key = LinearElasticModel/isPlaneStress, Data Type = L, Dimensions = 0, Bytes = 4, Value = F
    Key = Solid/massDensity, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.500000000000000E+004
    Key = LinearElasticModel/YoungsModulus, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.100000000000000E+007
    Key = Solid/stressStrainModel, Data Type = DLCA, Dimensions = 0, Bytes = 18, Value = LinearElasticModel
    Key = LinearElasticModel/elasticityType, Data Type = DLCA, Dimensions = 0, Bytes = 3, Value = ISO
    Key = LinearElasticModel/lambda, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.576923076923077E+006
    Key = Solid/name, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = SolidMaterial
    Key = LinearElasticModel/isPlaneStrain, Data Type = L, Dimensions = 0, Bytes = 4, Value = T

```

??? note "Click here to see the output of `obj%display( msg="Testing setSolidMaterialParam" )`"
    ```text
    Testing setSolidMaterialParam
    Name: SolidMaterial
    massDensity: 5000.00
    stressStrainModel:
    name: LinearElasticModel
    elasticityType: IsoLinearElasticModel
    isPlaneStress: False
    isPlaneStrain: True
    Poisson ratio: 0.300000
    Shear modulus: 384615.
    Youngs modulus: 1.00000E+6
    Lambda: 576923.
    Tangent matrix:
    ------------------------------------------
        1.34615E+6  5.76923E+5  0.00000E+0
        5.76923E+5  1.34615E+6  0.00000E+0
        0.00000E+0  0.00000E+0  3.84615E+5
    Compliance matrix:
    ---------------------------------------------
        9.10000E-7  -3.90000E-7  0.00000E+0
        -3.90000E-7   9.10000E-7  0.00000E+0
        0.00000E+0   0.00000E+0  2.60000E-6
```

## Construct by using `Import`

The template is given below.

| Variable            |   Data type   | Value | Comment |
| ------------------- | :-----------: | :---: | ------- |
| `name`              |    String     |       |         |
| `massDensity`       |     REAL      |       |         |
| `stressStrainModel` | Group dataset |   /   |         |
|                     |               |       |         |

`stressStrainModel` is a group data set, which means it is a directory. The structure/ template of the this data set depends upon the child of `AbstractSolidMechanicsModel_`.

The **Template** for `LinearElasticModel` is given below.

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

In what follows we explain how to construct the instance by importing the information.

First we export the data in the `hdf5` file.

```fortran
  type( Solid_ ) :: obj
  type( ParameterList_ ) :: param
  type( hdf5File_ ) :: hdf5
  integer( i4b ) :: ierr
  call display( "TEST-0")
  call FPL_Init(); call param%initiate()
  ierr = param%set( key="name", value="Solid1" )
  ierr = param%set( key="massDensity", value=1000.0_DFP )
  ierr = param%set( key="stressStrainModel", value="LinearElasticModel")
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStress = .FALSE., &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  call obj%initiate( param )
  call hdf5%initiate( filename="./TemplateSolid1.hdf5", mode="NEW" )
  call hdf5%open()
  call obj%export( hdf5, "" )
  call hdf5%close(); call hdf5%Deallocate()
  call FPL_FINALIZE; call param%Deallocate()
```

Now we can import data from this file and construct an instance of `Solid_` class.

```fortran
  type( MeshSelection_ ) :: obj
  type( Domain_ ) :: dom
  type( HDF5File_ ) :: hdf5
  call display( "TEST-0")
  call hdf5%initiate(filename="./templateMeshSelection.hdf5", mode="READ")
  call hdf5%open()
  call obj%import(hdf5=hdf5, group='')
  call obj%set()
  call obj%display('')
  call hdf5%close(); call hdf5%Deallocate()
  call obj%Deallocate()
```
