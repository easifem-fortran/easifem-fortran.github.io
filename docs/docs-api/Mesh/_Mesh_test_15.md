# Mesh example 15

!!! example ""
    This example shows the use of  `GetFacetElementType` method of [[Mesh_]] class.

!!! note ""
    In this example we do not create an instance of [[Domain_]], therefore,
    we cannot create the information about `DOMAIN_BOUNDARY_ELEMENT`.

The mesh is given below

![[figures/mesh.png]]

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
    Getting the facet element type of a given cell element. In this example, cell element is a triangle, so there are 3 faces. Each face can be `INTERNAL_ELEMENT`, DOMAIN_ELEMENT.

In the case given  below all faces are `INTERNAL_ELEMENT`

```fortran
  iel = 20
  CALL Display( obj%getConnectivity( iel ), "cellElement ( "//tostring(iel)&
    & // " ) = " )
  CALL Display( obj%isBoundaryElement( iel ), "isBoundaryElement=" )
  CALL Display( obj%getFacetElementType( iel ), &
      & "facet element type=" )
```

In this case two faces are `INTERNAL_ELEMENT`, and one face is `DOMAIN_BOUNDARY_ELEMENT`.

```fortran
  iel = 17
  CALL Display( obj%getConnectivity( iel ), "cellElement ( "//tostring(iel)&
    & // " ) = " )
  CALL Display( obj%isBoundaryElement( iel ), "isBoundaryElement=" )
  CALL Display( obj%getFacetElementType( iel ), &
      & "facet element type=" )
  !!
```

In this case two faces are `INTERNAL_ELEMENT`, and one face is `DOMAIN_BOUNDARY_ELEMENT`

```fortran
  iel = 23
  CALL Display( obj%getConnectivity( iel ), "cellElement ( "//tostring(iel)&
    & // " ) = " )
  CALL Display( obj%getFacetElementType( iel ), &
      & "facet element type=" )
  CALL Display( obj%isBoundaryElement( iel ), "isBoundaryElement=" )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
