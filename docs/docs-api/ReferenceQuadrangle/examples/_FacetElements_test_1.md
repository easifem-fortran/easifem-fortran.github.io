---
title: ReferenceQuadrangle FacetElements Example 1
---

```fortran
program main
use easifemBase

block 
TYPE(ReferenceElement_) :: ans(4)
CALL FacetElements_Quadrangle(Quadrangle4, 2, ans)
CALL Display(ans(2), "case 1 second face: ")
end block

block 
TYPE(ReferenceElement_) :: ans(4)
CALL FacetElements_Quadrangle(Quadrangle8, 2, ans)
CALL Display(ans(2), "case 2 second face: ")
end block

block 
TYPE(ReferenceElement_) :: ans(4)
CALL FacetElements_Quadrangle(Quadrangle9, 2, ans)
CALL Display(ans(2), "case 3 second face: ")
end block

end program main
```
