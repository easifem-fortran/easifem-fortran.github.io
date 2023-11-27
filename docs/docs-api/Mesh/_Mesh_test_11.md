# Mesh example 11

!!! example ""
    This example shows how to get the element to element connectivity data in the mesh.

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
  INTEGER( I4B ), ALLOCATABLE :: nptrs( :, : )
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

!!! note "Full information"
    Now we get the full information about the element connected to the given global element numbers. In this case we set `onlyElements=.FALSE.`, or you can ignore this argument as it is optional, with default value of `.FALSE.`.

```fortran
  nptrs = obj%GetElementToElements( globalElement=250, onlyElements=.FALSE. )
  CALL Display( nptrs, "Element connected to iel=250")
```

We get the following output.

| global Element number of neighbour | facet number of parent | facet number of neighbour |
| --- | --- | --- |
| 352 | 1 | 3 |
| 221 | 2 | 3 |
| 229 | 3 | 2 |

- The first column is the global element number of neighbour.
- The second column is the local facet number of the parent (iel=250)
- The third column is the local facet number of neighbour

!!! note "Less information"
    If you only want the global element numbers of the neighbours, then you can set onlyElements=.TRUE.

```fortran
  nptrs = obj%GetElementToElements( globalElement=250, onlyElements=.TRUE. )
  CALL Display( nptrs, "Element connected to iel=250")
```

!!! note "Full information"
    Now we get the full information about the element connected to the given global element numbers.

```fortran
  nptrs = obj%GetElementToElements( globalElement=316, onlyElements=.FALSE. )
  CALL Display( nptrs, "Element connected to iel=316")
```


!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
