# H1Div_Hermit

```fortran
  MODULE PURE SUBROUTINE H1Div_Hermit(obj, quad, refElem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    CLASS(H1Div_), INTENT(IN) :: continuityType
    CLASS(HierH1Div_HermitInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1Div_Hermit
```

This method belongs to the generic method [[#Initiate]].