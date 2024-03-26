This example show how to initiate an instance of `Domain_` from the `HDF5File_` 
mesh/domain file. 

It tests `GetTotalElements`, and `OPERATOR(.tElements.)` methods

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: obj
  TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 
  INTEGER( I4B ), PARAMETER :: telems_0d = 4, telems_1d = 8, telems_2d = 14, telems_3d=0, telems = 26

  CALL meshfile%Initiate(filename, "READ")
  CALL meshfile%Open()

  CALL obj%Initiate(meshfile, '')

  ! Let us now demonstrate the usage of `GetTotalElements` 
  ! which returns the total number of Elements in the 
  ! [[Domain_]], or part of domain (i.e. [[Mesh_]])

  ! Let us Get total number of Elements in the domain.

  CALL IS( obj%GetTotalElements(), telems, "GetTotalElements: " )

  ! Let us not Get total number of Elements 
  CALL IS( obj%GetTotalElements(dim=2, entityNum=1), telems_2d, &
      & "obj%GetTotalElements(dim=2, entityNum=1): " )

  ! Let us now Get total number of Elements in 2D, i.e. Elements in all 2D mesh.
  CALL IS( obj%GetTotalElements(dim=2), telems_2d, "obj%GetTotalElements(dim=2): " )

  ! Let us now Get total number of Elements in 1D, i.e. Elements in all 1D mesh.
  CALL IS( obj%GetTotalElements(dim=1), telems_1d, "obj%GetTotalElements(dim=1): " )

  CALL IS( .tElements. obj, telems, ".tElements. obj: " )

  ! Let us not Get total number of Elements in the left mesh [[Mesh_]]
  CALL IS( obj .tElements. [2,1], telems_2d, "obj .tElements. [2,1]: " )

  ! Let us now Get total number of Elements in 2D, i.e. Elements in all 2D mesh.
  CALL IS( obj .tElements. 2, telems_2d, "obj .tElements. 2: " )

  ! Let us now Get total number of Elements in 1D, i.e. Elements in all 1D mesh.
  CALL IS( obj .tElements. 1, telems_1d, "obj .tElements. 1: " )

  CALL meshfile%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
