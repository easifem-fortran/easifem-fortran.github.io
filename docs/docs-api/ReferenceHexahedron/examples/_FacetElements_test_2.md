---
title: FacetElements Example 2
---

```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE
TYPE(ReferenceElement_) :: faces(6)

CALL FacetElements_Hexahedron(elemType=Hexahedron8, nsd=3, ans=faces)
CALL Display(faces(1), "faces(1): ")

CALL FacetElements_Hexahedron(elemType=Hexahedron20, nsd=3, ans=faces)
CALL Display(faces(1), "faces(1): ")
END PROGRAM main
```
