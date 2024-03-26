---
title: HighOrderElement Example 1
---

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(ReferenceTriangle_) :: obj
TYPE(ReferenceTriangle_) :: high_obj

REAL(DFP) :: avar, xij(2, 3)

CALL Initiate(obj=obj, nsd=2_I4B)

CALL obj%highOrderElement(order=2, highOrderObj=high_obj, ipType=Equidistance)

CALL Display(high_obj, "order 2 triangle:")

END PROGRAM main
```
