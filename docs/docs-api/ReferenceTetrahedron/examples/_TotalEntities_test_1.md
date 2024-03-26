---
title: ReferenceTetrahedron TotalEntities example 1
---

```fortran
program main 
use easifemBase
implicit none 

INTEGER(I4B) :: ans(4), exac_ans(4) 

ans = TotalEntities_Tetrahedron(Tetrahedron4)
exac_ans = [4, 6, 4, 1]
CALL OK(all(ans .eq. exac_ans), "TotalEntities_Tetrahedron: ")

ans = TotalEntities_Tetrahedron(Tetrahedron10)
exac_ans = [10, 6, 4, 1]
CALL OK(all(ans .eq. exac_ans), "TotalEntities_Tetrahedron: ")

end program main
```
