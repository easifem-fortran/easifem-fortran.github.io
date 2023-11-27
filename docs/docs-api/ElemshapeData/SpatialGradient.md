# SpatialGradient

```fortran
  MODULE PURE FUNCTION SpatialGradient(obj, val) RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(IN) :: val
    TYPE(FEVariable_) :: ans
  END FUNCTION SpatialGradient
```

```fortran
  MODULE PURE FUNCTION SpatialGradient(obj, val) RESULT(Ans)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(IN) :: val
    TYPE(FEVariable_) :: ans
  END FUNCTION SpatialGradient
```