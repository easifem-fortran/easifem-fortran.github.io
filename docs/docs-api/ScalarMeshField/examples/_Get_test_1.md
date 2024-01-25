We test `Set` method to construct an instance of [ScalarMeshField_](ScalarMeshField_). In this case the mesh field variable is supposed to vary with the space.

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
  INTEGER( I4B ), PARAMETER :: nns = 6
  REAL( DFP ) :: val( nns )
  INTEGER( I4B ) :: iel
```

Initiate and open the mesh file which is in [HDF5File_](../HDF5File/HDF5File_.md) format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

Initiate an instance of [ScalarMeshField_](ScalarMeshField_)

```fortran
  CALL FPL_INIT(); CALL param%initiate()
  CALL setScalarMeshFieldParam( &
    & param=param, &
    & name='aScalar', &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine='NATIVE_SERIAL', &
    & defineOn=Quadrature, &
    & nns=nns)
  CALL obj%Initiate( param=param, mesh=amesh )
```

To set the entries inside an instance of [ScalarMeshField_](ScalarMeshField_), first one must create an instance of [FEVariable_](../FEVariable/FEVariable_.md). Then one can pass this FEVariable to the instance of [ScalarMeshField_](ScalarMeshField_). Also note that we use `globalElement` number.

```fortran
  DO iel = amesh%minElemNum, amesh%maxElemNum
    IF( .NOT. amesh%isElementPresent( iel ) ) CYCLE
    CALL RANDOM_NUMBER( val )
    fevar = QuadratureVariable( val, TypeFEVariableScalar, &
      & TypeFEVariableSpace )
    CALL obj%set( globalElement=iel, fevar=fevar )
  END DO
```

We can get the entries inside an instance of [ScalarMeshField_](ScalarMeshField_) only as an instance of [FEVariable_](../FEVariable/FEVariable_.md). Also note that we use `globalElement` number.

```fortran
  DO iel = amesh%minElemNum, amesh%maxElemNum
    IF( .NOT. amesh%isElementPresent( iel ) ) CYCLE
    CALL obj%get( globalElement=iel, fevar=fevar )
    CALL Display( fevar, "fevar : " )
  END DO
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
