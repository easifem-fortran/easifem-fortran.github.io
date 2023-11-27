In this example we initiate a rectangle matrix, such matrices are necessary in mixed finite element formulation, where different order interpolation is used. In this example we set the following methods defined in [MatrixField_](../MatrixField/MatrixField_.md)

- [SetRectangleMatrixFieldParam](SetRectangleMatrixFieldParam.md)
- [Initiate](docs-api/MatrixField/Initiate.md)
- [Export](Export.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

!!! note "Declare variables"

```fortran
  TYPE( Domain_ ), TARGET :: vel_dom, press_dom
  TYPE( DomainPointer_ ) :: domains(2)
```

- [Domain_](../Domain/Domain_.md) for velocity and pressure

```fortran
  TYPE( MatrixField_ ) :: obj
```

- [MatrixField_](../MatrixField/MatrixField_.md)

```fortran
  TYPE( HDF5File_ ) :: vel_dom_file
  TYPE( HDF5File_ ) :: press_dom_file
  TYPE( HDF5File_ ) :: outfile
```

- [HDF5File_](../HDF5File/HDF5File_.md) domain file for velocity, pressure, and output file.

```fortran
  CHARACTER(LEN=*), PARAMETER :: vel_dom_filename="../data/mesh1_tri6.h5"
  CHARACTER(LEN=*), PARAMETER :: press_dom_filename="../data/mesh1_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: outfilename="./test_9.h5"
```

- velocity, pressure and output file name.

```fortran
  TYPE( ParameterList_ ) :: param
```

- [ParameterList_](../ParameterList/ParameterList_.md)

```fortran
  INTEGER( I4B ) :: ierr
  REAL(DFP), ALLOCATABLE :: amat(:,:)
```


```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL vel_dom_file%Initiate( filename=vel_dom_filename, mode="READ" )
  CALL vel_dom_file%Open()
  CALL vel_dom%Initiate( vel_dom_file, "" )
  CALL vel_dom%InitiateNodeToNodes()
  CALL vel_dom_file%Deallocate()
```

Make domain of pressure.

```fortran
  CALL press_dom_file%Initiate( filename=press_dom_filename, mode="READ" )
  CALL press_dom_file%Open()
  CALL press_dom%Initiate( press_dom_file, "" )
  CALL press_dom%InitiateNodeToNodes()
  CALL press_dom_file%Deallocate()
```

SetRectangleMatrixFieldParam

- [SetRectangleMatrixFieldParam](SetRectangleMatrixFieldParam.md)

```fortran
  CALL SetRectangleMatrixFieldParam( &
    & param=param, &
    & name="G", &
    & matrixProp="RECTANGLE", &
    & physicalVarNames=["V", "P"], &
    & spaceCompo=[2, 1], &
    & timeCompo=[1,1], &
    & fieldType=FIELD_TYPE_NORMAL )
  !!
  CALL param%Display("")
  !!
```

Result

```txt
[1] Key = MatrixField/timeCompo, Data Type = I4P, Dimensions = 1, Bytes = 8, Value = 1,1
[2] Key = MatrixField/tPhysicalVarNames, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 2
[38] Key = MatrixField/matrixProp, Data Type = DLCA, Dimensions = 0, Bytes = 9, Value = RECTANGLE
[52] Key = MatrixField/physicalVarName1, Data Type = DLCA, Dimensions = 0, Bytes = 1, Value = V
[53] Key = MatrixField/physicalVarName2, Data Type = DLCA, Dimensions = 0, Bytes = 1, Value = P
[77] Key = MatrixField/name, Data Type = DLCA, Dimensions = 0, Bytes = 1, Value = G
[94] Key = MatrixField/spaceCompo, Data Type = I4P, Dimensions = 1, Bytes = 8, Value = 2,1
[94] Key = MatrixField/fieldType, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
```

```fortran
  domains(1)%ptr => vel_dom
  domains(2)%ptr => press_dom
  CALL obj%Initiate( param, domains )
```

```fortran
  amat = obj%mat
  CALL Display(SHAPE(obj%mat), "shape = ")
```

```txt
shape =
--------
   26
    5
```

```fortran
  CALL obj%Display("Gmat = ")
```

```fortran
  CALL obj%SPY(filename="./test_9", ext=".svg")
```

```fortran
  CALL outfile%Initiate(filename=outfilename, mode="NEW" )
  CALL outfile%Open()
  CALL obj%export(hdf5=outfile, group="/Gmat")
  CALL outfile%Deallocate()
```

```txt
---------------------------------- row     1 ----------------------------------
 col:    1     :    2     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     2 ----------------------------------
 col:    1     :    2     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     3 ----------------------------------
 col:    1     :    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     4 ----------------------------------
 col:    1     :    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     5 ----------------------------------
 col:    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     6 ----------------------------------
 col:    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     7 ----------------------------------
 col:    1     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     8 ----------------------------------
 col:    1     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row     9 ----------------------------------
 col:    1     :    2     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    10 ----------------------------------
 col:    1     :    2     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    11 ----------------------------------
 col:    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    12 ----------------------------------
 col:    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    13 ----------------------------------
 col:    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    14 ----------------------------------
 col:    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    15 ----------------------------------
 col:    1     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    16 ----------------------------------
 col:    1     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    17 ----------------------------------
 col:    1     :    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    18 ----------------------------------
 col:    1     :    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    19 ----------------------------------
 col:    1     :    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    20 ----------------------------------
 col:    1     :    2     :    3     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    21 ----------------------------------
 col:    1     :    2     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    22 ----------------------------------
 col:    1     :    2     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    23 ----------------------------------
 col:    1     :    3     :
   4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    24 ----------------------------------
 col:    1     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    25 ----------------------------------
 col:    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
 ---------------------------------- row    26 ----------------------------------
 col:    2     :    3     :    4     :    5     :
 val: 0.00D+00 : 0.00D+00 : 0.00D+00 : 0.00D+00 :
```

![](figures/test_9.svg)


```fortran
  CALL obj%Deallocate()
  CALL vel_dom%Deallocate()
  CALL press_dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
