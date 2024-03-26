---
title: ReferenceTetrahedron FacetElements Example 1
---

```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE

TYPE(ReferenceTetrahedron_) :: obj
TYPE(ReferenceElement_ ) :: faces(4)


CALL Initiate(obj=obj, nsd=3)
CALL FacetElements_Tetrahedron(obj, faces)

CALL Display(faces(1), "faces(1): " )

END PROGRAM main
```
