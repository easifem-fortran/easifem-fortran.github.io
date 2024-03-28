# GetElemNum

## Interface

```fortran
  MODULE FUNCTION getElemNum(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION getElemNum
```
