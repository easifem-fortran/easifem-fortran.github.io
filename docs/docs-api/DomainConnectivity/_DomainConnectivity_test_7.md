In this example we will generate node to node connectivity information between part of velocity-domain (2,1) and part of pressure-Domain (1,4).

Pressure domain consists Triangle3 elements as shown below.

![mesh_tri3](figures/mesh_tri3.png)

Velocity domain consists Triangle6 elements as shown below.

![mesh_tri6](figures/mesh_tri6.png)


``` fortran
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
  INTEGER( I4B ), POINTER :: nodeToNode( : )
  REAL( DFP ), POINTER :: pressureNode( :, : )
  REAL( DFP ), POINTER :: velocityNode( :, : )
  INTEGER( I4B ), PARAMETER :: dim1=2, entityNum1=1, dim2=1, entityNum2=4
  INTEGER( I4B ) :: ii
```


```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL pressureMeshFile%Open()
```


```fortran
  CALL velocityDomain%Initiate( velocityMeshFile, "")
  CALL velocityMeshFile%Deallocate()
  CALL pressureDomain%Initiate( pressureMeshFile, "")
  CALL pressureMeshFile%Deallocate()
```


```fortran
  CALL obj%InitiateNodeToNodeData( domain1=velocityDomain, &
    & domain2=pressureDomain, dim1=dim1, entityNum1=entityNum1, &
    & dim2=dim2, entityNum2=entityNum2 )
  nodeToNode => obj%getNodeToNodePointer()
  velocityMesh => velocityDomain%getMeshPointer( dim1, entityNum1 )
  pressureMesh => pressureDomain%getMeshPointer( dim2, entityNum2 )
  pressureNode => pressureDomain%getNodeCoordPointer()
  velocityNode => velocityDomain%getNodeCoordPointer()
```

Simple testing

```fortran
  DO ii = velocityMesh%minNptrs, velocityMesh%maxNptrs
    IF( .NOT. velocityMesh%isNodePresent( globalNode=ii ) ) CYCLE
    IF( nodeToNode( ii ) .EQ. 0 ) CYCLE
    IF( ALL( velocityNode(:,velocityDomain%getLocalNodeNumber(ii)) &
      & .APPROXEQ. pressureNode(:, &
      & pressureDomain%getLocalNodeNumber(nodeToNode(ii)))) ) THEN
      CALL Display( "velocity Node = " // TOSTRING(ii)  &
        & // " matches with pressure Node = " // TOSTRING( nodeToNode(ii)))
    ELSE
      CALL Display( "ERROR: velocity Node = " // TOSTRING(ii)  &
        & // " not matches with pressure Node = "  &
        & // TOSTRING( nodeToNode(ii)))
      STOP
    END IF
  END DO
```

cleanup

```fortran
  CALL pressureDomain%Deallocate()
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
