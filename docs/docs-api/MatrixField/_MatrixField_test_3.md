In this example we show how to set entries in MatrixField.

In this example we set the following methods defined in [[MatrixField_]]


- [SetMatrixFieldParam](SetMatrixFieldParam.md)
- [Initiate](docs-api/MatrixField/Initiate.md)
- [Export](Export.md)
- [Set](Set.md)

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

```fortran
  TYPE( Domain_) :: dom
  TYPE( MatrixField_ ) :: obj
  TYPE( HDF5File_) :: meshfile, hdf5file
  TYPE( ParameterList_ ) :: param
  TYPE( RealMatrix_ ) :: realmat
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  CHARACTER(LEN=*), parameter :: filename="./test_4.h5"
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" ); CALL meshfile%Close()
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()
```

```fortran
  CALL SetMatrixFieldParam( param=param, name="K", matrixProp="UNSYM", &
    & spaceCompo=1, timeCompo=1, fieldType=FIELD_TYPE_NORMAL )
  CALL obj%Initiate( param, dom )
```

```fortran
  CALL hdf5file%Initiate( filename=filename, mode="NEW" )
  CALL hdf5file%Open()
  CALL obj%Export(hdf5=hdf5file,group='/matrixField')
```

```fortran
  CALL Initiate( realmat, 3, 3 )
  CALL SET(realmat, val=[1.0_DFP, 2._DFP, 3._DFP], indx=1,  &
    & extraOption=MATRIX_ROW)
  CALL SET(realmat, val=[4.0_DFP, 5._DFP, 6._DFP], indx=2,  &
    & extraOption=MATRIX_ROW)
  CALL SET(realmat, val=[7.0_DFP, 8._DFP, 9._DFP], indx=3,  &
    & extraOption=MATRIX_ROW)
```

```fortran
  CALL obj%Set( globalNode=[1,2,5], value=realmat%val, storageFMT=FMT_NODES )
  realmat = obj%mat
  CALL hdf5file%write( '/Ans1', realmat%val )
```

```fortran
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
```

```fortran
END PROGRAM main
```
