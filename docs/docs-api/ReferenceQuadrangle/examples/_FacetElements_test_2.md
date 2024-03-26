---
title: ReferenceQuadrangle FacetElements Example 2
---

```fortran
program main
use easifemBase

type(ReferenceQuadrangle_) :: obj
call Initiate(obj=obj, nsd=2)

block 
TYPE(ReferenceElement_) :: ans(4)
CALL FacetElements_Quadrangle(obj, ans)
CALL Display(ans(2), "case 1 second face: ")
end block

end program main
```
