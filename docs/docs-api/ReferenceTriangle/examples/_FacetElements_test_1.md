---
title: ReferenceTriangle FacetElements Example 1
---

```fortran
program main
use easifemBase

block 
TYPE(ReferenceElement_) :: ans(3)
CALL FacetElements_Triangle(Triangle3, 2, ans)
CALL Display(ans(2), "second face: ")
end block

block 
TYPE(ReferenceElement_) :: ans(3)
CALL FacetElements_Triangle(Triangle6, 2, ans)
CALL Display(ans(2), "second face: ")
end block

end program main
```
