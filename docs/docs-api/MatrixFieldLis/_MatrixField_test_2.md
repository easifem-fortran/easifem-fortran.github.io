In this example we initiate an instance of  Matrix by copying contents from other matrix.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Domain_ ) :: dom
  TYPE( MatrixFieldLis_ ) :: obj, obj2
  TYPE( HDF5File_ ) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  CHARACTER( LEN = * ), parameter :: engine="LIS_OMP"

  CALL FPL_INIT(); CALL param%Initiate()
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" ); CALL meshfile%Close()
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()

  CALL SetMatrixFieldParam( &
    & param=param, &
    & name="K", &
    & engine=engine, &
    & matrixProp="UNSYM", &
    & spaceCompo=2, &
    & timeCompo=1, &
    & fieldType=FIELD_TYPE_NORMAL )

  CALL obj%Initiate( param, dom )
  CALL obj2%Initiate( obj )
  CALL obj2%Display("obj2 = ")

  CALL obj%Deallocate()
  CALL obj2%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
#obj2 =
# isInitiated : TRUE
# name :K
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 24
# local_n: 24
# is: 1
# ie: 25
# lis_ptr: 94125215598560
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# isPmatInitiated : FALSE
# Shape: Square
# lis_ia ALLOCATED
# lis_ja ALLOCATED
```
