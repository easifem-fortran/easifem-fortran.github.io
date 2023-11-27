# DG_Hierarchy

```fortran
  MODULE PURE SUBROUTINE DG_Hierarchy(obj, quad, refelem, &
    & continuityType, interpolType)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    CLASS(QuadraturePoint_), INTENT(IN) :: quad
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    CLASS(DG_), INTENT(IN) :: continuityType
    CLASS(HierarchyInterpolation_), INTENT(IN) :: interpolType
  END SUBROUTINE DG_Hierarchy
```

This method belongs to the generic method [[#Initiate]].
