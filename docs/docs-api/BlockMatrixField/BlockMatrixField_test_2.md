---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
    - BlockMatrixField/Initiate
    - BlockMatrixField/Display
    - BlockMatrixField/Deallocate
---

# BlockMatrixField example 2

This example shows the use of `Initiate` method, [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

- [[ParameterList_]]

```fortran
  TYPE( BlockMatrixField_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER( LEN = * ), PARAMETER :: meshFilename="./mesh_tri3.h5"
```

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
  CALL SetBlockMatrixFieldParam(param=param, name="K",  &
    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &
    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &
    & matrixProp="UNSYM" )
  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "")
  CALL obj%Initiate(param=param, dom=dom)
  CALL obj%Display("")
  CALL obj%Deallocate( )
```

```fortran
  !> cleanup
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  CALL meshfile%Deallocate()
  CALL dom%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
