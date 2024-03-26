---
title: FacetTopology Example 1
---

```fortran
PROGRAM main
USE easifemBase

BLOCK
  TYPE(ReferenceTopology_) :: ans(6)
  CALL FacetTopology_Hexahedron(Hexahedron8, arange(1, 8), ans)
  CALL Display(ans(2), "second face: ")
END BLOCK
END PROGRAM main
```
