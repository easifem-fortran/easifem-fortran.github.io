In this example we will generate cell to cell connectivity information between velocity-domain and pressure-Domain.

Pressure domain consists Triangle3 elements as shown below.

![mesh_tri3](figures/mesh_tri3.png)

Velocity domain consists Triangle6 elements as shown below.

![mesh_tri6](figures/mesh_tri6.png)

Importing modules and variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(DomainConnectivity_) :: obj
  TYPE( Domain_ ) :: pressureDomain
  TYPE( Domain_ ) :: velocityDomain
  TYPE( HDF5File_ ) :: pressureMeshFile
  TYPE( HDF5File_ ) :: velocityMeshFile
  CLASS( Mesh_ ), POINTER :: velocityMesh
  CLASS( Mesh_ ), POINTER :: pressureMesh
  CLASS( ReferenceElement_ ), POINTER :: velocityRefelem
  CLASS( ReferenceElement_ ), POINTER :: pressureRefelem
  CLASS( ReferenceElement_ ), POINTER :: refelem
  INTEGER( I4B ), POINTER :: cellToCell( : )
  INTEGER( I4B ) :: ii, iel
```

Open the mesh file for pressure and velocity domain

```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL pressureMeshFile%Open()
```

Initiate the domain for pressure and velocity

```fortran
  CALL velocityDomain%Initiate( velocityMeshFile, "")
  CALL pressureDomain%Initiate( pressureMeshFile, "")
```

Initiate node to node data between velocity domain and pressure domain.

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=velocityDomain, &
    & domain2=pressureDomain )
  CALL PASS("InitiateNodeToNodeData()")
```

Now that node-to-node data is ready, let us initiate cell to cell data from velocity domain to pressure domain.

```fortran
  CALL obj%InitiateCellToCellData( domain1=velocityDomain, &
    & domain2=pressureDomain )
```

now let us run some tests to check the validity of the data. This is only for testing purpose, so you can ignore the forthcoming section.

```fortran
    cellToCell => obj%getCellToCellPointer()
    DO iel = velocityDomain%minElemNum, velocityDomain%maxElemNum
      IF (.NOT. velocityDomain%isElementPresent(iel)) CYCLE
      IF (cellToCell(iel) .EQ. 0) THEN
        velocityMesh => velocityDomain%getMeshPointer(globalElement=iel)
        refelem => velocityMesh%getRefElemPointer()
        IF (refelem%xidimension .EQ. velocityDomain%getNSD()) THEN
          CALL fail("CellToCell: error code 1")
          STOP
        END IF
      ELSE
        !! here i am checking if the cellToCell(iel) is present in
        !! in the pressure domain or not.
        !! If it is present then it should be a cell element.
        ii = cellToCell(iel)
        IF (.NOT. pressureDomain%isElementPresent(ii)) THEN
          CALL fail("CellToCell: error code 2")
          STOP
        ELSE
          velocityMesh => velocityDomain%getMeshPointer(globalElement=iel)
          velocityRefelem => velocityMesh%getRefElemPointer()
          pressureMesh => pressureDomain%getMeshPointer(globalElement=ii)
          pressureRefelem => pressureMesh%getRefElemPointer()
          IF (pressureRefelem%xidimension .NE. velocityRefelem%xidimension) THEN
            CALL fail("CellToCell: error code 3")
            STOP
          END IF
        END IF
      END IF
    END DO
    CALL PASS("InitiateCellToCellData()")
```

```fortran
  CALL pressureMeshFile%Deallocate()
  CALL velocityMeshFile%Deallocate()
  CALL pressureDomain%Deallocate()
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
