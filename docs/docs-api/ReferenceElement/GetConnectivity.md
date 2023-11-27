# GetConnectivity

```fortran
  MODULE PURE FUNCTION getConnectivity(obj) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getConnectivity
```
