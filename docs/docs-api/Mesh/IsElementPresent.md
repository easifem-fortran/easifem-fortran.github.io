# IsElementPresent

## Interface

```fortran
  MODULE PURE FUNCTION isElementPresent(obj, GlobalElement) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: GlobalElement
    LOGICAL(LGT) :: ans
  END FUNCTION isElementPresent
```
