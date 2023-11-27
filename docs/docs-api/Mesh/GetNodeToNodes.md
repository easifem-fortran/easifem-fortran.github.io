# GetNodeToNodes

## Interface

```fortran
  MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
    & RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT), INTENT(IN) :: IncludeSelf
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getNodeToNodes
```

```fortran
  MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
    & RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode( : )
    LOGICAL(LGT), INTENT(IN) :: IncludeSelf
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getNodeToNodes
```
