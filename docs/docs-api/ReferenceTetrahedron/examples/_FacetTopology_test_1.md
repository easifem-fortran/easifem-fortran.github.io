---
title: FaceTopology Example 1
---

```fortran
PROGRAM main
USE easifembase
IMPLICIT NONE

TYPE(ReferenceTopology_) :: topo(4)


CALL FacetTopology_Tetrahedron(ans=topo, elemType=Tetrahedron4, nptrs=[1,2,3,4])
CALL Display(topo(1), "topo(1): " )

CALL FacetTopology_Tetrahedron(ans=topo, elemType=Tetrahedron10,  &
  & nptrs=arange(1, 10))

CALL Display(topo(1), "topo(1): " )

END PROGRAM main
```
