---
title: FacetTopology Example 1
---

```fortran
program main
use easifemBase

block 
  TYPE(ReferenceTopology_) :: ans(2)
  CALL FacetTopology_Line(Line2, [1,2], ans)
  CALL Display(ans(2), "second face: ")
end block

block 
  TYPE(ReferenceTopology_) :: ans(2)
  CALL FacetTopology_Line(Line3, [1,2,3], ans)
  CALL Display(ans(2), "second face: ")
end block

end program main
```
