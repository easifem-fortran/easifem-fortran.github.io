In this example we will generate cell to cell connectivity information between velocity-domain and velocity-Domain.

Pressure domain consists Triangle3 elements as shown below.

![mesh_tri3](figures/mesh_tri3.png)

Velocity domain consists Triangle6 elements as shown below.

![mesh_tri6](figures/mesh_tri6.png)

Importing modules and variables

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(DomainConnectivity_) :: obj
  TYPE( Domain_ ) :: velocityDomain
  TYPE( HDF5File_ ) :: velocityMeshFile
  CLASS( Mesh_ ), POINTER :: velocityMesh
  CLASS( ReferenceElement_ ), POINTER :: refelem
  INTEGER( I4B ), POINTER :: cellToCell( : )
  INTEGER( I4B ) :: ii, iel
  INTEGER(I4B), PARAMETER :: dim1=2, dim2=2, entity1=1, entity2=1
```

Initiate domain for velocity variable.

```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL velocityDomain%Initiate( velocityMeshFile, "")
```

Initiate node to node DATA.

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=velocityDomain, &
    & domain2=velocityDomain )
  CALL PASS("InitiateNodeToNodeData()")
```

This will create node to node connectivity DATA from domain1 (dim=2, entityNum=1) to domain2 (dim=2, entityNum=2).

Initiate cell to cell connectivity DATA.

```fortran
  CALL obj%InitiateCellToCellData(domain1=velocityDomain, &
    & domain2=velocityDomain)
```

now let us run some tests, this  is only for testing purpose, so you can ignore the forthcoming section.

```fortran
    cellToCell => obj%getCellToCellPointer()
    DO iel = velocityDomain%minElemNum, velocityDomain%maxElemNum
      IF (.NOT. velocityDomain%isElementPresent(iel)) CYCLE
      IF (cellToCell(iel) .EQ. 0) THEN
        velocityMesh => velocityDomain%getMeshPointer(globalElement=iel)
        refelem => velocityMesh%getRefElemPointer()
        IF (refelem%xidimension .EQ. velocityDomain%getNSD()) &
          & CALL fail("CellToCell: error code 1")
      ELSE
        IF (cellToCell(iel) .NE. iel) THEN
          CALL fail("CellToCell: error code 2")
          STOP
        END IF
      END IF
    END DO
    CALL PASS("InitiateCellToCellData()")
```


```fortran
  CALL velocityMeshFile%Deallocate()
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
