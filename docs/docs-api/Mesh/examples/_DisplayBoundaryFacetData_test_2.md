This example shows how to use `DisplayBoundaryFacetData` method to display the boundary facet data.

In this example we do create an instance of Domain, therefore,
we build the information about `DOMAIN_BOUNDARY_ELEMENT` and `BOUNDARY_ELEMENT`.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  CLASS( Mesh_ ), POINTER :: obj
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_ ) :: domainFile
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./mesh.h5"

  CALL domainFile%Initiate( FileName=filename, MODE="READ" )
  CALL domainFile%Open()
  CALL dom%Initiate(hdf5=domainFile, group="" )
  obj => dom%getMeshPointer(dim=dom%getNSD(), entityNum=1)

  CALL obj%DisplayBoundaryFacetData( "BoundaryFacetData = " )

  CALL obj%Deallocate()
  CALL domainFile%Deallocate()
END PROGRAM main
```
