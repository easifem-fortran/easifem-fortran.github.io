In this example we will generate node to node connectivity information between part of velocity-domain and part of velocity-Domain.

Velocity domain consists Triangle6 elements as shown below.

![mesh_tri6](figures/mesh_tri6.png)

Import modules and define variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(DomainConnectivity_) :: obj
  TYPE( Domain_ ) :: velocityDomain
  TYPE( HDF5File_ ) :: velocityMeshFile
  CLASS( Mesh_ ), POINTER :: velocityMesh
  INTEGER( I4B ), POINTER :: nodeToNode( : )
  REAL( DFP ), POINTER :: velocityNode( :, : )
  INTEGER( I4B ) :: ii
```

```fortran
  CALL velocityMeshFile%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  CALL velocityMeshFile%Open()
  CALL velocityDomain%Initiate( velocityMeshFile, "")
  CALL velocityMeshFile%Deallocate()
```

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=velocityDomain, &
    & domain2=velocityDomain, dim1=2, entityNum1=1, dim2=2, entityNum2=1)
  nodeToNode => obj%getNodeToNodePointer()
  velocityMesh => velocityDomain%getMeshPointer( 2, 1 )
  velocityNode => velocityDomain%getNodeCoordPointer()
```

Simple testing

```fortran
  DO ii = velocityMesh%minNptrs, velocityMesh%maxNptrs
    IF( .NOT. velocityMesh%isNodePresent( globalNode=ii ) ) CYCLE
    IF( nodeToNode( ii ) .EQ. 0 ) THEN
      CALL Display( "ERRRO: nodeToNode( "//TOSTRING(ii) // ") = 0 " )
      STOP
    END IF
    IF( ALL( velocityNode(:,velocityDomain%getLocalNodeNumber(ii)) &
      & .APPROXEQ.  &
      & velocityNode(:, &
      & velocityDomain%getLocalNodeNumber(nodeToNode(ii)))) ) THEN
      !CALL Display( "velocity Node = " // TOSTRING(ii)  &
      !  & // " matches with velocity Node = " // TOSTRING( nodeToNode(ii)))
    ELSE
      CALL Display( "ERROR: velocity Node = " // TOSTRING(ii)  &
        & // " not matches with velocity Node = "  &
        & // TOSTRING( nodeToNode(ii)))
      STOP
    END IF
  END DO
  CALL OK(.true.)
```

cleaning up

```fortran
  CALL velocityDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
