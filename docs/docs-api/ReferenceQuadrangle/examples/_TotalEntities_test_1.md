---
title: TotalEntities_Quadrangle example 1
---

```fortran
PROGRAM main
USE easifemBase

IMPLICIT NONE

CALL Display(TotalEntities_Quadrangle(Quadrangle), "Quadrangle: ")
CALL Display(TotalEntities_Quadrangle(Quadrangle8), "Quadrangle8: ")
CALL Display(TotalEntities_Quadrangle(Quadrangle9), "Quadrangle8: ")

END PROGRAM main
```
