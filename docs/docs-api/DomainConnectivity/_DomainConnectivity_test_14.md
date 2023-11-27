In this example we will generate cell to cell connectivity information between part of  velocity-domain and part of velocity-Domain.

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
  CLASS( Mesh_ ), POINTER :: velocityMesh => NULL()
  INTEGER( I4B ), POINTER :: cellToCell( : ) => NULL()
  INTEGER( I4B ) :: ii
  INTEGER(i4b) :: dim1=1, dim2=1, entity1=1, entity2=1
```

Create domain for velocity variables, 🎇 READ the mesh file, and ⭕ initiates the domain for pressure

```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL velocityDomain%Initiate( velocityMeshFile, "")
  CALL velocityMeshFile%Deallocate()
```

Initiates the node to node connectivity DATA. It is important that we initiate the node to node DATA before initiating cell to cell DATA.

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=velocityDomain, &
    & domain2=velocityDomain, dim1=dim1, entityNum1=entity1, dim2=dim2, &
    & entityNum2=entity2)
```

This will create node-to-node connectivity DATA from domain1 (dim=2, entityNum=1) to domain2 (dim=2, entityNum=2).

Now we can initiate cell-to-cell DATA between the above mentioned meshes.

```fortran
  CALL obj%InitiateCellToCellData( domain1=velocityDomain, &
    & domain2=velocityDomain, dim1=dim1, entityNum1=entity1, dim2=dim2, &
    & entityNum2=entity2)
```

Now let us run some checks on the results. This is ONLY for the testing purpose. IF you want, you can skip this part, and move on to the next examples.

```fortran
  cellToCell => obj%getCellToCellPointer()
  velocityMesh => velocityDomain%getMeshPointer(dim=dim1, &
    & entityNum=entity1)
  DO ii = velocityMesh%minElemNum, velocityMesh%maxElemNum
    IF (.NOT. velocityMesh%isElementPresent(ii)) CYCLE
    IF (cellToCell(ii) .NE. ii) THEN
      CALL FAIL("DomainConnectivity-test-11 has failed")
      STOP
    END IF
  END DO
  CALL PASS("DomainConnectivity-test has passed")
```

Cleaning up.

```fortran
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
