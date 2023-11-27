In this example we show how to set entries in MatrixField.

In this example we set the following methods defined in [MatrixField_](../MatrixField/MatrixField_.md)

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
  TYPE( HDF5File_) :: meshfile, outfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : ), amat(:, : )
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" )
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()
```


```fortran
  CALL SetMatrixFieldParam( param=param, name="K", matrixProp="UNSYM", &
    & spaceCompo=1, timeCompo=1, fieldType=FIELD_TYPE_NORMAL )
  CALL obj%Initiate( param, dom )
```

```fortran
  CALL obj%Set( globalNode = [5], value= 100.0_DFP )
  amat = obj%mat
  CALL Display( MdEncode(amat), "obj%mat = ")
```

result:

|   |   |   |   |     |
|---|---|---|---|-----|
| 0 | 0 | 0 | 0 | 0   |
| 0 | 0 | 0 | 0 | 0   |
| 0 | 0 | 0 | 0 | 0   |
| 0 | 0 | 0 | 0 | 0   |
| 0 | 0 | 0 | 0 | 100 |

```fortran
  CALL obj%Set( value= 200.0_DFP )
  amat = obj%mat
  CALL Display( MdEncode(amat), "obj%mat = " // char_lf)
```

result:

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
| 200 | 200 | 0   | 200 | 200 |
| 200 | 200 | 200 | 0   | 200 |
| 0   | 200 | 200 | 200 | 200 |
| 200 | 0   | 200 | 200 | 200 |
| 200 | 200 | 200 | 200 | 200 |

```fortran
  CALL obj%Set(globalNode=[1,2,5], value=0.0_DFP )
  amat = obj%mat
  CALL Display( MdEncode(amat), "obj%mat = " // char_lf)
```

Result:

|     |     |     |     |     |
|-----|-----|-----|-----|-----|
| 0   | 0   | 0   | 200 | 0   |
| 0   | 0   | 200 | 0   | 0   |
| 0   | 200 | 200 | 200 | 200 |
| 200 | 0   | 200 | 200 | 200 |
| 0   | 0   | 200 | 200 | 0   |

Cleanup:

```fortran
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
```

```fortran
END PROGRAM main
```
