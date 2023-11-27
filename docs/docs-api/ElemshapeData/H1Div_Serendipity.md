# H1Div_Serendipity

```fortran
  MODULE PURE SUBROUTINE H1Div_Serendipity(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(H1Div_), INTENT(IN) :: continuityType
    CLASS(SerendipityInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1Div_Serendipity
```

This method belongs to the generic method [[#Initiate]].
