# Size

## Interface

```fortran
  MODULE PURE FUNCTION size(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    !! mesh object
    INTEGER(I4B) :: ans
  END FUNCTION size
```
