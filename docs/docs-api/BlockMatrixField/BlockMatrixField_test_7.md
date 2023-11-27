---
tags:
    - BlockMatrixField
    - BlockMatrixField/SetBlockMatrixFieldParam
    - BlockMatrixField/CheckEssentialParam
    - BlockMatrixField/Initiate
    - BlockMatrixField/Display
    - BlockMatrixField/Spy
    - BlockMatrixField/Deallocate
    - BlockMatrixField/Export
---

# BlockMatrixField example 7

This example shows the use of [BlockMatrixField](BlockMatrixField_.md)

## Usage

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  !
  ! [[ParameterList_]], [[BlockMatrixField_]]
  !
  TYPE( BlockMatrixField_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_ ) :: meshfile
  TYPE( HDF5File_ ) :: blockMatrixOutfile
  CHARACTER( LEN = * ), PARAMETER :: meshFilename="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &
    & "./bmf_outfile_common_domain.h5"
  !> main
  CALL FPL_INIT(); CALL param%Initiate()
  ! #BlockMatrixField/SetBlockMatrixFieldParam
  CALL SetBlockMatrixFieldParam(param=param, name="K",  &
    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &
    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &
    & matrixProp="UNSYM" )
  ! #HDF5File/#Initiate
  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )
  ! #HDF5File/#Open
  CALL meshfile%Open()
  ! #Domain/Initiate
  CALL dom%Initiate( meshfile, "")
  ! #BlockMatrixField/Initiate
  CALL obj%Initiate(param=param, dom=dom)
  ! #BlockMatrixField/Export
  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "NEW" )
  CALL blockMatrixOutfile%open()
  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixField")
  CALL blockMatrixOutfile%Deallocate()
  ! #BlockMatrixField/Deallocate
  CALL obj%Deallocate( )
  !> cleanup
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  CALL meshfile%Deallocate()
  CALL dom%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
