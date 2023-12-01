---
sidebar_position: 3 
sidebar_label: "Import from HDF5 file"
---

# Construct by importing HDF5 file

The template is given below.

| Variable            |   Data type   | Value | Comment |
| ------------------- | :-----------: | :---: | ------- |
| `name`              |    String     |       |         |
| `massDensity`       |     REAL      |       |         |
| `stressStrainModel` | Group dataset |   /   |         |
|                     |               |       |         |

`stressStrainModel` is a group data set, which means it is a directory. The structure/ template of the this data set depends upon the child of `AbstractSolidMechanicsModel_`.

The **Template** for `LinearElasticModel` is given below.

| Variable name    | Data type |              Value               |                                                         Comment |
| ---------------- | :-------: | :------------------------------: | --------------------------------------------------------------: |
| `name`           |  String   |       `LinearElasticModel`       |            It is constant, which denotes the name of the class. |
| `elasticityType` |  String   | `ISO`, `ANISO`, `ORTHO`, `TRANS` |                           It denotes the linear elasticity type |
| `isPlaneStress`  |  String   |            `T`or `F`             |    If the problem is 2D, and plane stress then set it to .TRUE. |
| `isPlaneStrain`  |  String   |            `T` or `F`            | If the problem is 2D, and plane strain , then set it to .FALSE. |
| `lambda`         |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `ShearModulus`   |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `YoungsModulus`  |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `PoissonRatio`   |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `C`              | REAL(6,6) |                                  |              This is necessary when `ANISO` option is selected. |
| `invC`           | REAL(6,6) |                                  |              This is necessary when `ANISO` option is selected. |

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
