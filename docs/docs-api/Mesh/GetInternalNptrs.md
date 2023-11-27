# GetInternalNptrs

## Interface

```fortran
  MODULE PURE FUNCTION getInternalNptrs(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getInternalNptrs
```
