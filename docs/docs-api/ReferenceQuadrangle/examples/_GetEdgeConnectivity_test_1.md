---
title: ReferenceQuadrangle GetEdgeConnectivity Example 1
---

```fortran
program main
use easifemBase

block 
INTEGER( I4B ) :: con(2, 4)
CALL GetEdgeConnectivity_Quadrangle(con=con, order=1)
CALL Display(con, "GetEdgeConnectivity(order=2)")
end block

block 
INTEGER( I4B ) :: con(3, 4)
CALL GetEdgeConnectivity_Quadrangle(con=con, order=2)
CALL Display(con, "GetEdgeConnectivity(order=2)")
end block

block 
INTEGER( I4B ) :: con(2, 4)
CALL GetEdgeConnectivity_Quadrangle(con=con, order=1, opt=2)
CALL Display(con, "GetEdgeConnectivity(order=2)")
end block

block 
INTEGER( I4B ) :: con(3, 4)
CALL GetEdgeConnectivity_Quadrangle(con=con, order=2, opt=2)
CALL Display(con, "GetEdgeConnectivity(order=2)")
end block

end program main
```
