In this example we show how to set entries in MatrixField.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Domain_) :: dom
  TYPE( MatrixFieldLis_ ) :: obj
  TYPE( HDF5File_) :: meshfile
  TYPE( ParameterList_ ) :: param
  TYPE( RealMatrix_ ) :: realmat
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  CHARACTER(LEN=*), PARAMETER :: filename="./test_4.h5"
  CHARACTER(LEN=*), PARAMETER :: engine="LIS_OMP"
  CHARACTER( LEN = * ), PARAMETER :: name="K"
  CHARACTER( LEN = * ), PARAMETER :: matrixProp="UNSYM"
  INTEGER( I4B ), PARAMETER :: spaceCompo = 1
  INTEGER( I4B ), PARAMETER :: timeCompo = 1

  CALL FPL_INIT(); CALL param%Initiate()
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" ); CALL meshfile%Close()
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()

  CALL SetMatrixFieldParam( &
    & param=param, &
    & name="K", &
    & matrixProp="UNSYM", &
    & engine=engine, &
    & spaceCompo=spaceCompo, &
    & timeCompo=timeCompo, &
    & fieldType=FIELD_TYPE_NORMAL )
  CALL obj%Initiate( param, dom )

  CALL Initiate( realmat, 3, 3 )
  CALL SET(realmat, val=[1.0_DFP, 2._DFP, 3._DFP], indx=1,  &
    & extraOption=MATRIX_ROW)
  CALL SET(realmat, val=[4.0_DFP, 5._DFP, 6._DFP], indx=2,  &
    & extraOption=MATRIX_ROW)
  CALL SET(realmat, val=[7.0_DFP, 8._DFP, 9._DFP], indx=3,  &
    & extraOption=MATRIX_ROW)
  CALL Display(realmat, "realmat = ")

  CALL obj%Set( &
    & iNodeNum=[1,5,10], &
    & jNodeNum=[1,5,10], &
    & ivar=1, &
    & jvar=1, &
    & idof=1, &
    & jdof=1, &
    & value=realmat%val )
  realmat = obj%mat

  CALL Display(MdEncode(realmat%val), "obj%mat = ")

  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()

END PROGRAM main
```

results:

obj%mat =

|  |  |  |  |  |  |  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| 1 | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 7 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 9 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
