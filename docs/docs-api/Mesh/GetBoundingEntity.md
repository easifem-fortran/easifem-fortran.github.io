# GetBoundingEntity

## Interface

```fortran
  MODULE PURE FUNCTION getBoundingEntity(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getBoundingEntity
```
