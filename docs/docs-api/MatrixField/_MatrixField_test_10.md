In this example we check the following methods defined in MatrixField.

- [SetMatrixFieldParam](SetMatrixFieldParam.md)
- [Initiate](docs-api/MatrixField/Initiate.md)
- [Export](Export.md)

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

```fortran
  TYPE( Domain_) :: dom
  TYPE( MatrixField_ ) :: obj
  TYPE( HDF5File_) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
 character(*), parameter :: engine="LIS_OMP"
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

```fortran
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" )
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()
```

```fortran
  CALL SetMatrixFieldParam( param=param, name="K", matrixProp="UNSYM", &
    & spaceCompo=2, timeCompo=1, fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine )
```

```fortran
  CALL obj%Initiate( param=param, dom=dom )
  CALL obj%Display("MatrixField = ")
```

```fortran
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE()
```

```fortran
END PROGRAM main
```
