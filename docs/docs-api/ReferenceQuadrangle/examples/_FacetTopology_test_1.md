---
title: FacetTopology_Quadrangle Example 1
---

```fortran
program main
use easifemBase

block 
  TYPE(ReferenceTopology_) :: ans(4)
  CALL FacetTopology_Quadrangle(Quadrangle4, [1,2,3,4], ans)
  CALL Display(ans(2), "second face: ")
end block

block 
  TYPE(ReferenceTopology_) :: ans(4)
  CALL FacetTopology_Quadrangle(Quadrangle8, [1,2,3,4,5,6,7,8], ans)
  CALL Display(ans(2), "second face: ")
end block

end program main
```
