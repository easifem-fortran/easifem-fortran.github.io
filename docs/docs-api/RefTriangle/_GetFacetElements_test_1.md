``` fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(RefTriangle_) :: obj
TYPE(AbstractRefElementPointer_), ALLOCATABLE :: facelem(:)
INTEGER(I4B) :: ii

CALL obj%Initiate(nsd=2, &
  & baseInterpol="Orthogonal", &
  & baseContinuity="H1")

CALL obj%GetFacetElements(facelem)

DO ii = 1, SIZE(facelem)
  CALL facelem(ii)%ptr%Display("FacetElem("//tostring(ii)//"): ")
END DO

END PROGRAM main
```

