---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
    - BlockMatrixField/Initiate
    - BlockMatrixField/Display
    - BlockMatrixField/Spy
    - BlockMatrixField/Deallocate
    - BlockMatrixField/Import
    - BlockMatrixField/Export
---

# BlockMatrixField example 8

This example shows the use of [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( BlockMatrixField_) :: obj
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_) :: meshfile
  TYPE( HDF5File_ ) :: blockMatrixOutfile
  CHARACTER( LEN = *), PARAMETER :: meshFilename="./mesh_tri3.h5"
  CHARACTER( LEN =* ), PARAMETER :: blockMatrixOutfileName= &
    & "./bmf_outfile_common_domain.h5"
  !> main
  ! #HDF5File/#Initiate
  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )
  ! #HDF5File/#Open
  CALL meshfile%Open()
  ! #Domain/Initiate
  CALL dom%Initiate( meshfile, "")
  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "READWRITE" )
  CALL blockMatrixOutfile%open()
  CALL obj%Import(blockMatrixOutfile, "/BlockMatrixField", dom=dom)
  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixFieldState" )
  CALL blockMatrixOutfile%Deallocate()
  ! #BlockMatrixField/Deallocate
  CALL obj%Deallocate( )
  !> cleanup
  CALL meshfile%Deallocate()
  CALL dom%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
