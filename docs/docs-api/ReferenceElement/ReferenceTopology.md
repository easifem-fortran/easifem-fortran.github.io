# ReferenceTopology

```fortran
  MODULE PURE FUNCTION ReferenceTopology(Nptrs, Name) RESULT(obj)
    TYPE(ReferenceTopology_) :: obj
    INTEGER(I4B), INTENT(IN) :: Nptrs(:)
    INTEGER(I4B), INTENT(IN) :: Name
  END FUNCTION ReferenceTopology
```
