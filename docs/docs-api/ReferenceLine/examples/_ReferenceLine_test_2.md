---
title: ReferenceLine_Pointer example 1
---

In this example we make higher order line element.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CLASS(ReferenceElement_), POINTER :: obj_ptr => NULL()
TYPE(ReferenceLine_) :: obj

obj_ptr => ReferenceLine_Pointer(nsd=1)

CALL Display(obj_ptr, 'obj_ptr : ')
CALL obj_ptr%highOrderElement(Order=2, highOrderobj=obj, ipType=Equidistance)

CALL Display(obj, "Second Order Lagrange Element : ")
END PROGRAM main
```
