# IsVolume

Returns true if element is a volume element

```fortran
  MODULE PURE FUNCTION isVolume(ElemType) RESULT(Ans)
    LOGICAL(LGT) :: Ans
    INTEGER(I4B), INTENT(IN) :: ElemType
  END FUNCTION isVolume
```
