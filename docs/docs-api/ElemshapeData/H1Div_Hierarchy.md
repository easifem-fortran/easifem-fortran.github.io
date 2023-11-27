# H1Div_Hierarchy

```fortran
  MODULE PURE SUBROUTINE H1Div_Hierarchy(obj, quad, refElem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    CLASS(H1Div_), INTENT(IN) :: continuityType
    CLASS(HermitInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1Div_Hierarchy
```

This method belongs to the generic method [[#Initiate]].
