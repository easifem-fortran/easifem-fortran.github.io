# IsDomainBoundaryElement

## Interface

```fortran
  MODULE PURE FUNCTION isDomainBoundaryElement(obj, globalElement) &
    & RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT) :: ans
  END FUNCTION isDomainBoundaryElement
```
