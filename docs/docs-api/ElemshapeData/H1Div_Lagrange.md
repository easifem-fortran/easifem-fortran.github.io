# H1Div_Lagrange

```fortran
  MODULE PURE SUBROUTINE H1Div_Lagrange(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(H1Div_), INTENT(IN) :: continuityType
    CLASS(LagrangeInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1Div_Lagrange
```

This method belongs to the generic method [[#Initiate]].
