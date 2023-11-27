In this example we will generate cell to cell connectivity information between pressure-domain and pressure-Domain.

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
  TYPE( Domain_ ) :: pressureDomain
  TYPE( HDF5File_ ) :: pressureMeshFile
  CLASS( Mesh_ ), POINTER :: pressureMesh
  CLASS( ReferenceElement_ ), POINTER :: refelem
  INTEGER( I4B ), POINTER :: cellToCell( : )
  INTEGER( I4B ) :: ii, iel
  INTEGER(I4B), PARAMETER :: dim1=2, dim2=2, entity1=1, entity2=1
```

Initiate domain for pressure variable.

```fortran
  CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL pressureMeshFile%Open()
  CALL pressureDomain%Initiate( pressureMeshFile, "")
```

Initiate node to node DATA.

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=pressureDomain, &
    & domain2=pressureDomain )
  CALL PASS("InitiateNodeToNodeData()")
```

This will create node to node connectivity DATA from domain1 (dim=2, entityNum=1) to domain2 (dim=2, entityNum=2).

Initiate cell to cell connectivity DATA.

```fortran
  CALL obj%InitiateCellToCellData(domain1=pressureDomain, &
    & domain2=pressureDomain)
```

now let us run some tests.

```fortran
    cellToCell => obj%getCellToCellPointer()
    DO iel = pressureDomain%minElemNum, pressureDomain%maxElemNum
      IF (.NOT. pressureDomain%isElementPresent(iel)) CYCLE
      IF (cellToCell(iel) .EQ. 0) THEN
        pressureMesh => pressureDomain%getMeshPointer(globalElement=iel)
        refelem => pressureMesh%getRefElemPointer()
        IF (refelem%xidimension .EQ. pressureDomain%getNSD()) &
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
  CALL pressureMeshFile%Deallocate()
  CALL pressureDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
