# GetGlobalNodeNumber

## Interface

```fortran
  MODULE PURE FUNCTION getGlobalNodeNumber(obj, localNode) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localNode(:)
    INTEGER(I4B) :: ans(SIZE(localNode))
  END FUNCTION getGlobalNodeNumber
```

```fortran
  MODULE PURE FUNCTION getGlobalNodeNumber(obj, localNode) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localNode
    INTEGER(I4B) :: ans
  END FUNCTION getGlobalNodeNumber
```
