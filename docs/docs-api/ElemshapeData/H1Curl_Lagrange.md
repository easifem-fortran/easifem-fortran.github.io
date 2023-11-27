# H1Curl_Lagrange

```fortran
  MODULE PURE SUBROUTINE H1Curl_Lagrange(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(H1Curl_), INTENT(IN) :: continuityType
    CLASS(LagrangeInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE H1Curl_Lagrange
```

This method belongs to the generic method [[#Initiate]].
