# GetBoundaryNptrs

## Interface

```fortran
  MODULE PURE FUNCTION getBoundaryNptrs(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getBoundaryNptrs
```
