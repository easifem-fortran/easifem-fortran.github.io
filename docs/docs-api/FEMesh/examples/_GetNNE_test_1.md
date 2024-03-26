---
title:  FEMesh GetNNE Example 1
---

This example tests the `GetNNE` method, which returns the total number of nodes in an element.

The element number should be global element number.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER( LEN = *), PARAMETER :: filename= &
    & "../../Mesh/examples/meshdata/small_mesh_two_region.h5"

  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, dim=2)


  CALL OK(obj%GetNNE( obj%GetGlobalElemNumber(1) ) .EQ. 4_I4B, "NNE: ")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
