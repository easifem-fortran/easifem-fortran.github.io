In this example we initiate a rectangle matrix, such matrices are necessary in mixed finite element formulation, where different order interpolation is used. 

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

```fortran
  TYPE( Domain_ ), TARGET :: vel_dom, press_dom
  TYPE( DomainPointer_ ) :: domains(2)
```

```fortran
  TYPE( MatrixField_ ) :: obj
```

```fortran
  TYPE( HDF5File_ ) :: vel_dom_file
  TYPE( HDF5File_ ) :: press_dom_file
  TYPE( HDF5File_ ) :: outfile
  TYPE( HDF5File_ ) :: importfile
```

```fortran
  CHARACTER(LEN=*), PARAMETER :: vel_dom_filename="../data/mesh1_tri6.h5"
  CHARACTER(LEN=*), PARAMETER :: press_dom_filename="../data/mesh1_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: importfilename="./test_9.h5"
  CHARACTER( LEN = * ), PARAMETER :: outfilename="./test_10.h5"
```

```fortran
  TYPE( ParameterList_ ) :: param
```

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

```fortran
  CALL press_dom_file%Initiate( filename=press_dom_filename, mode="READ" )
  CALL press_dom_file%Open()
  CALL press_dom%Initiate( press_dom_file, "" )
  CALL press_dom%InitiateNodeToNodes()
  CALL press_dom_file%Deallocate()
```

```fortran
  domains(1)%ptr => vel_dom
  domains(2)%ptr => press_dom
  CALL importfile%initiate(filename=importfilename, mode="READ")
  CALL importfile%open()
  CALL obj%Import( hdf5=importfile, domains=domains, group="/Gmat" )
  CALL importfile%Deallocate()
  call display("success")
```

```fortran
  amat = obj%mat
  CALL Display(SHAPE(obj%mat), "shape = ")
```

```fortran
  CALL obj%Display("Gmat = ")
```

Result:

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
 col:    1     :    3     :    4     :    5     :
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

```fortran
  CALL obj%SPY(filename="./test_10", ext=".svg")
```

![](figures/test_10.svg)

```fortran
  CALL outfile%Initiate(filename=outfilename, mode="NEW" )
  CALL outfile%Open()
  CALL obj%export(hdf5=outfile, group="/Gmat")
  CALL outfile%Deallocate()
```

```fortran
  CALL obj%Deallocate()
  CALL vel_dom%Deallocate()
  CALL press_dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
