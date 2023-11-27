# DG_Hermit

```fortran
  MODULE PURE SUBROUTINE DG_Hermit(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(DG_), INTENT(IN) :: continuityType
    CLASS(HermitInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE DG_Hermit
```

This method belongs to the generic method [[#Initiate]].
