We test `Set` method to construct an instance of ScalarMeshField_

In this case the mesh field variable is constant in space.

The mesh is given below

![](./figures/mesh.png)

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( ScalarMeshField_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( FEVariable_ ) :: fevar
  INTEGER( I4B ), PARAMETER :: nns = 1
  REAL( DFP ) :: val( nns )
  INTEGER( I4B ) :: iel
```

Initiate and open the mesh file which is in [HDF5File_](../HDF5File/HDF5File_.md) format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

Initiate an instance of ScalarMeshField_.

```fortran
  CALL FPL_INIT(); CALL param%initiate()
  CALL setScalarMeshFieldParam( &
    & param=param, &
    & name='aScalar', &
    & fieldType=FIELD_TYPE_CONSTANT, &
    & engine='NATIVE_SERIAL', &
    & defineOn=Quadrature, &
    & nns=nns)
  CALL obj%Initiate( param=param, mesh=amesh )
```

To set the entries inside an instance of ScalarMeshField_, first one must create an instance of [FEVariable_](../FEVariable/FEVariable_.md). Then one can pass this FEVariable to the instance of ScalarMeshField_. Also note that we use `globalElement` number.

Because our Scalar mesh field is a constant in this example, we do not need to set the value for each element. Also note that if the mesh field was not constant, then the below code implies we are settings the values for each element to the same value. It is like all components of a vector have same value.

```fortran
  CALL RANDOM_NUMBER( val )
  fevar = QuadratureVariable( val, TypeFEVariableScalar, &
    & TypeFEVariableSpace )
  CALL obj%set( fevar=fevar )
```

We can get the entries inside an instance of ScalarMeshField_ only as an instance of [FEVariable_](../FEVariable/FEVariable_.md). Also note that we use `globalElement` number.

```fortran
  CALL obj%get( fevar=fevar )
  CALL Display( fevar, "fevar : " )
```

cleaning up.

```fortran
  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
