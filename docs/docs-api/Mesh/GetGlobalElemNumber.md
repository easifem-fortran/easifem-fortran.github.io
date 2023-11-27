# GetGlobalElemNumber

## Interface

```fortran
  MODULE PURE FUNCTION getGlobalElemNumber(obj, LocalElement) &
    & RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: LocalElement(:)
    INTEGER(I4B) :: ans(SIZE(LocalElement))
  END FUNCTION getGlobalElemNumber
```

```fortran
  MODULE PURE FUNCTION getGlobalElemNumber(obj, LocalElement) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: LocalElement
    INTEGER(I4B) :: ans
  END FUNCTION getGlobalElemNumber
```
