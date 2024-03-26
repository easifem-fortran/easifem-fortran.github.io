---
title: ReferenceTetrahedron FacetElements Example 2
---

```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE

TYPE(ReferenceElement_ ) :: faces(4)


CALL FacetElements_Tetrahedron(Tetrahedron4, 3, faces)

CALL Display(faces(1), "faces(1): " )

END PROGRAM main
```
