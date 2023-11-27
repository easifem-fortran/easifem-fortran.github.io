# TotalEntities

Total entities present in an element

```fortran
  MODULE PURE FUNCTION RefElem_TotalEntities(ElemType) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: ElemType
    INTEGER(I4B) :: ans(4)
  END FUNCTION RefElem_TotalEntities
```
