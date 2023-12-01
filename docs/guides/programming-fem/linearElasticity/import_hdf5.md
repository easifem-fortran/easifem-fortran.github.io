---
sidebar_position: 5
---

# Construct by using import

**Template**

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

Following code demonstrates the construction of linear elastic model using `Import` command.

First we `export` the `hdf5` file using following code.

```fortran
type( LinearElasticModel_ ) :: obj
type( ParameterList_ ) :: param
type( hdf5File_ ) :: hdf5
call FPL_INIT; call param%initiate()
call setLinearElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .FALSE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
call obj%initiate( param )
call hdf5%initiate( "./TemplateLinearElasticModel1.hdf5", &
  & mode="NEW" )
call hdf5%open()
call obj%export( hdf5, "" )
call hdf5%close
call hdf5%Deallocate()
call param%Deallocate(); call FPL_FINALIZE
```

Now we create an instance of `LinearElasticModel_` by importing the `hdf5` file.

```fortran
type( LinearElasticModel_ ) :: obj
type( hdf5File_ ) :: hdf5
type( ParameterList_ ) :: param
call FPL_INIT; call param%initiate()
call hdf5%initiate( "./TemplateLinearElasticModel1.hdf5", &
  & mode="READ" ); call hdf5%open()
call obj%import( hdf5, "" )
call obj%display(msg="")
call hdf5%close(); call hdf5%Deallocate()
call param%Deallocate(); call FPL_FINALIZE
```
