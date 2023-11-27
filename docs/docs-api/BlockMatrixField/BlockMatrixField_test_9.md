---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
    - BlockMatrixField/Import
    - BlockMatrixField/Shape
    - BlockMatrixField/Deallocate
    - HDF5File/Initiate
    - HDF5File/Open
    - Domain/Initiate
---

# BlockMatrixField example 9

This example shows the use of `SetBlockMatrixFieldParam`, [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

- [[Domain_]]
- [[HDF5File_]]
- [[ParameterList_]]
- [[BlockMatrixField_]]

```fortran
  TYPE( BlockMatrixField_ ) :: obj
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_ ) :: meshfile
  TYPE( HDF5File_ ) :: blockMatrixOutfile
  CHARACTER( LEN = * ), PARAMETER :: meshFilename="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &
    & "./bmf_outfile_common_domain.h5"
```

```fortran
  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "")
  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "READWRITE" )
  CALL blockMatrixOutfile%open()
  CALL obj%Import(blockMatrixOutfile, "/BlockMatrixField", dom=dom)
  CALL blockMatrixOutfile%Deallocate()
  CALL Display( obj%Shape(), "Shape : [426,426]")
  CALL Display( obj%SIZE(1), "SIZE : [426]")
  CALL Display( obj%SIZE(2), "SIZE : [426]")
  CALL Display( obj%SIZE(), "SIZE : [1,81,476]")
```

```fortran
  CALL obj%Deallocate( )
  CALL meshfile%Deallocate()
  CALL dom%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
