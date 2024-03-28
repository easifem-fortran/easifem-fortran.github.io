# GetLocalNodeNumber

## Interface

```fortran
  MODULE PURE FUNCTION getLocalNodeNumber(obj, globalNode) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B) :: ans(SIZE(globalNode))
  END FUNCTION getLocalNodeNumber
```

```fortran
  MODULE PURE FUNCTION getLocalNodeNumber(obj, globalNode) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B) :: ans
  END FUNCTION getLocalNodeNumber
```
