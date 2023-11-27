In this example we initiate an instance of  Matrix by copying contents from other matrix. In this example we set the following methods defined in [[MatrixField_]]

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
  TYPE( Domain_ ) :: dom
  TYPE( MatrixField_ ) :: obj, obj2
  TYPE( HDF5File_ ) :: meshfile, hdf5file
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
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
    & spaceCompo=2, timeCompo=1, fieldType=FIELD_TYPE_NORMAL )
```

```fortran
  CALL obj%Initiate( param, dom )
```

```fortran
  CALL hdf5file%Initiate( filename="./matrixField.h5", mode="NEW" )
  CALL hdf5file%Open()
```

```fortran
  CALL obj2%Initiate( obj )
  CALL obj2%Export(hdf5=hdf5file,group='')
```

```fortran
  CALL hdf5file%Deallocate()
  CALL obj%Deallocate()
  CALL obj2%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
