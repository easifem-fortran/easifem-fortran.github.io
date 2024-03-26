---
title: ReferenceTetrahedron TetrahedronVolume3D Example
---

```fortran
program main
use easifemBase
implicit none

REAL( DFP ) :: ans1, ans2 

call TetrahedronVolume3D(RefCoord_Tetrahedron("UNIT"), ans1 )
call TetrahedronVolume3D(RefCoord_Tetrahedron("BIUNIT"), ans2 )


CALL Display(ans1, "ans1: ")
CALL Display(ans2, "ans2: ")
CALL Display(ans2/ans1, "unit to biunit : ")
CALL Display(ans1/ans2, "biunit to unit : ")
end program main
```
