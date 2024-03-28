# GetLocalElemNumber

## Interface

```fortran
  MODULE PURE FUNCTION getLocalElemNumber(obj, GlobalElement) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: GlobalElement(:)
    INTEGER(I4B) :: ans(SIZE(GlobalElement))
  END FUNCTION getLocalElemNumber
```

```fortran
  MODULE PURE FUNCTION getLocalElemNumber(obj, GlobalElement) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: GlobalElement
    INTEGER(I4B) :: ans
  END FUNCTION getLocalElemNumber
```
