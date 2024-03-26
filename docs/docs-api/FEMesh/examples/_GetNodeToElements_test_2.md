---
title: "FEMesh GetNodeToElements Example 2"
---

This example shows how to get the node to element connectivity data in the mesh.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh_two_region.h5"
  CALL e%SetQuietMode(.TRUE.)
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  !Open the mesh file
  CALL meshfile%Open()
  CALL obj%SetShowTime(.true.)
  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, dim=2)
  ! Initiate dynamic data structure
  CALL obj%InitiateNodeToElements()
  !Display the content of mesh.
  CALL obj%DisplayMeshInfo(filename)
  ! Display the mesh data

  block 
    INTEGER( I4B ), ALlOCATABLE :: ans(:), exact_ans(:)
    INTEGER( I4B ), PARAMETER :: globalNode = 2

    ans = obj%GetNodeToElements(globalNode)
    ans = sort(ans)
    exact_ans = [19, 20]
    CALL OK(ALL(exact_ans .eq. ans), "GetNodeToElements: " )
  end block


  block 
    INTEGER( I4B ), ALlOCATABLE :: ans(:), exact_ans(:)
    INTEGER( I4B ), PARAMETER :: globalNode = 1

    ans = obj%GetNodeToElements(globalNode)
    ans = sort(ans)
    exact_ans = [18]
    CALL OK(ALL(exact_ans .eq. ans), "GetNodeToElements: " )
  end block

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
