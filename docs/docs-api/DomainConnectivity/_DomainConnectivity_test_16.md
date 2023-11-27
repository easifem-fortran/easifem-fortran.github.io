In this example, we will show how to USE [[DomainConnectivity_#InitiateCellToCellData]] method to generate cell-to-cell connectivity information between part of velocity-domain and part of pressure-Domain.

Pressure domain consists Triangle3 elements as shown below.

![mesh_tri3](figures/mesh_tri3.png)

Velocity domain consists Triangle6 elements as shown below.

![mesh_tri6](figures/mesh_tri6.png)

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
  INTEGER( I4B ), POINTER :: cellToCell( : )
  INTEGER( I4B ) :: ii
  INTEGER(i4b), PARAMETER :: dim1=2, dim2=2, entity1=1, entity2=1
```

Create domain for velocity variables, 🎇 READ the mesh file, and ⭕ initiates the domain for pressure

```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL velocityDomain%Initiate( velocityMeshFile, "")
  CALL velocityMeshFile%Deallocate()
```

Create domain for pressure variables, 🎇 READ the mesh file, and ⭕ initiates the domain for pressure

```fortran
  CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL pressureMeshFile%Open()
  CALL pressureDomain%Initiate( pressureMeshFile, "")
  CALL pressureMeshFile%Deallocate()
```

Initiates the node to node connectivity DATA. It is important that we initiate the node to node DATA before initiating cell to cell DATA.

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=pressureDomain, &
    & domain2=velocityDomain, dim1=dim1, entityNum1=entity1, dim2=dim2, &
    & entityNum2=entity2)
```

This will create node-to-node connectivity DATA from domain1 (dim=2, entityNum=1) to domain2 (dim=2, entityNum=2).

Now we can initiate cell-to-cell DATA between the above mentioned meshes.

```fortran
  CALL obj%InitiateCellToCellData( domain1=pressureDomain, &
    & domain2=velocityDomain, dim1=dim1, entityNum1=entity1, dim2=dim2, &
    & entityNum2=entity2)
```

Now let us run some checks on the results. This is ONLY for the testing purpose. IF you want, you can skip this part, and move on to the next examples.

```fortran
  cellToCell => obj%getCellToCellPointer()
  pressureMesh => pressureDomain%getMeshPointer(dim=dim1, &
    & entityNum=entity1)
  DO ii = pressureMesh%minElemNum, pressureMesh%maxElemNum
    IF (.NOT. pressureMesh%isElementPresent(ii)) CYCLE
    IF (cellToCell(ii) .EQ. 0) THEN
      CALL FAIL("DomainConnectivity-test has failed")
      STOP
    END IF
  END DO
  CALL PASS("DomainConnectivity-test has passed")
```


```fortran
  CALL pressureDomain%Deallocate()
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
