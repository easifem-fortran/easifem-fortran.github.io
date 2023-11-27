# XiDimension

Returns the xidimension of an element

```fortran
  MODULE PURE FUNCTION Elem_XiDimension1(ElemType) RESULT(Ans)
    INTEGER(I4B) :: Ans
    INTEGER(I4B), INTENT(IN) :: ElemType
  END FUNCTION Elem_XiDimension1
```

```fortran
  MODULE PURE FUNCTION Elem_Xidimension2(obj) RESULT(Ans)
    CLASS(ReferenceElement_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION Elem_Xidimension2
```
