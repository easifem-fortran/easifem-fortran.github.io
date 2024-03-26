---
title: FacetElements Example 1
---

```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE

TYPE(ReferenceHexahedron_) :: obj
TYPE(ReferenceElement_ ) :: faces(6)


CALL Initiate(obj=obj, nsd=3)
CALL FacetElements_Hexahedron(obj, faces)

CALL Display(faces(1), "faces(1): " )

END PROGRAM main
```
