# Mesh example 27

!!! example ""
    This example shows how to use `InitiateFacetElemSD` method to initiate element shape data on facet elements.

## Modules and classes

- [[Mesh_]]
- [[HDF5File_]]

## Usage

!!! note ""
    Import modules and declare variables

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./mesh.h5"
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

```fortran
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

!!! note ""
    Initiating the element shape data on cells.

```fortran
  CALL obj%InitiateElemSD( orderSpace=1, linSpaceElem=obj%refelem, &
    & spaceElem=obj%refelem, &
    & quadTypeForSpace = "GaussLegendre", &
    & continuityTypeForSpace = "H1", &
    & interpolTypeForSpace = "LagrangeInterpolation" )
  !!
```

!!! note ""
    Initiating the element shape data on facet elements.

```fortran
  CALL obj%InitiateFacetElemSD( &
    & orderSpace=1, &
    & linSpaceElem=obj%facetElements, &
    & spaceElem=obj%facetElements, &
    & quadTypeForSpace = "GaussLegendre", &
    & continuityTypeForSpace = "H1", &
    & interpolTypeForSpace = "LagrangeInterpolation" )
  !!
  CALL obj%DisplayFacetElemSD( "DisplayFacetElemSD = " )
  !!
  CALL obj%DisplayFacetElements( "DisplayFacetElements = " )
  !!
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
