# H1_Hermit

```fortran
  MODULE PURE SUBROUTINE H1_Hermit(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(H1_), INTENT(IN) :: continuityType
    CLASS(HermitInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1_Hermit
```

This method belongs to the generic method [[#Initiate]].