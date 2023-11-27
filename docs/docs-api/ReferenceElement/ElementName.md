# ElementName

Returns element name in character from element number/type

```fortran
  MODULE PURE FUNCTION Element_Name(ElemType) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: ElemType
    CHARACTER(LEN=50) :: Ans
  END FUNCTION Element_Name
```
