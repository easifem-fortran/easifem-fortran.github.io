```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Domain_) :: dom
  TYPE( MatrixFieldLis_ ) :: obj
  TYPE( HDF5File_) :: meshfile, hdf5file
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  CHARACTER(*), PARAMETER :: engine="LIS_OMP"

  CALL FPL_INIT(); CALL param%Initiate()

  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" )
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()

  CALL SetMatrixFieldParam( &
    & param=param, &
    & name="K", &
    & matrixProp="UNSYM", &
    & spaceCompo=2, &
    & timeCompo=1, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine )

  CALL obj%Initiate( param=param, dom=dom )

  CALL obj%Display("MatrixFieldLis = ")

  CALL hdf5file%Initiate( filename="./matrixField.h5", mode="NEW" )
  CALL hdf5file%Open()
  CALL obj%Export(hdf5=hdf5file,group='')
  CALL hdf5file%Deallocate()

  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE()

END PROGRAM main
```

```txt title="results"
#MatrixFieldLis =
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
# lis_ptr: 94147318938688
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# isPmatInitiated : FALSE
# Shape: Square
# lis_ia ALLOCATED
# lis_ja ALLOCATED
```
