# IsBoundaryNode

## Interface

```fortran
  MODULE PURE FUNCTION isBoundaryNode(obj, globalNode) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT) :: ans
  END FUNCTION isBoundaryNode
```
