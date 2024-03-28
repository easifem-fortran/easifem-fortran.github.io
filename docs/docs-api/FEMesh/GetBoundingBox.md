# GetBoundingBox

## Interface

```fortran
  MODULE PURE FUNCTION getBoundingBox(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    TYPE(BoundingBox_) :: ans
  END FUNCTION getBoundingBox
```

```fortran
  MODULE PURE FUNCTION getBoundingBox(obj, nodes, local_nptrs)  &
    & RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: nodes(:, :)
    !! Nodal coordinates in XiJ format
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_nptrs(:)
    TYPE(BoundingBox_) :: ans
  END FUNCTION getBoundingBox
```
