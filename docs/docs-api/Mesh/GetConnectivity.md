# GetConnectivity

## Interface

```fortran
  MODULE PURE FUNCTION getConnectivity(obj, globalElement) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getConnectivity
```
