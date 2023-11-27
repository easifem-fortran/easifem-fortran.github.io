In this example we will generate node to node-connectivity information between part of pressure-domain and part of pressure-Domain.

Pressure domain consists Triangle3 elements as shown below.

![mesh_tri3](figures/mesh_tri3.png)

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
  INTEGER( I4B ), POINTER :: nodeToNode( : )
  REAL( DFP ), POINTER :: pressureNode( :, : )
  INTEGER( I4B ) :: ii
```

```fortran
  CALL pressureMeshFile%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL pressureMeshFile%Open()
  CALL pressureDomain%Initiate( pressureMeshFile, "")
  CALL pressureMeshFile%Deallocate()
```

This will create node to node-connectivity data from domain1 (dim=2, entityNum=1) to domain2 (dim=2, entityNum=2).

```fortran
  CALL obj%InitiateNodeToNodeData( domain1=pressureDomain, &
    & domain2=pressureDomain, dim1=2, entityNum1=1, dim2=2, entityNum2=1)
  nodeToNode => obj%getNodeToNodePointer()
  pressureMesh => pressureDomain%getMeshPointer( 2, 1 )
  pressureNode => pressureDomain%getNodeCoordPointer()
```

```fortran
  DO ii = pressureMesh%minNptrs, pressureMesh%maxNptrs
    IF( .NOT. pressureMesh%isNodePresent( globalNode=ii ) ) CYCLE
    IF( ALL( pressureNode(:,pressureDomain%getLocalNodeNumber(ii)) &
      & .APPROXEQ.  &
      & pressureNode(:, &
      & pressureDomain%getLocalNodeNumber(nodeToNode(ii)))) ) THEN
      !CALL Display( "pressure Node = " // TOSTRING(ii)  &
      !  & // " matches with pressure Node = " // TOSTRING( nodeToNode(ii)))
    ELSE
      CALL Display( "ERROR: pressure Node = " // TOSTRING(ii)  &
        & // " not matches with pressure Node = "  &
        & // TOSTRING( nodeToNode(ii)))
      STOP
    END IF
  END DO

  call OK(.TRUE.)
```

Cleaning up.

```fortran
  CALL pressureDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
