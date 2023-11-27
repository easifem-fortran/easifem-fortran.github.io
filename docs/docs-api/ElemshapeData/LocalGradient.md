# LocalGradient

```fortran
  MODULE PURE FUNCTION LocalGradient_1(obj, val) RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(IN) :: val
    TYPE(FEVariable_) :: ans
  END FUNCTION LocalGradient_1
```

```fortran
  MODULE PURE FUNCTION LocalGradient_2(obj, val) RESULT(Ans)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(IN) :: val
    TYPE(FEVariable_) :: ans
  END FUNCTION LocalGradient_2
```
