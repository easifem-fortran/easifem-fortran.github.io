---
title: ReferenceTriangle FacetTopology Example 1
---

```fortran
program main
use easifemBase

block 
  TYPE(ReferenceTopology_) :: ans(3)
  CALL FacetTopology_Triangle(Triangle3, [1,2,3], ans)
  CALL Display(ans(2), "second face: ")
end block

block 
  TYPE(ReferenceTopology_) :: ans(3)
  CALL FacetTopology_Triangle(Triangle6, [1,2,3,4, 5,6], ans)
  CALL Display(ans(2), "second face: ")
end block

end program main
```
