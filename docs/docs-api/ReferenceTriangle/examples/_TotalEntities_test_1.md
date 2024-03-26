---
title: TotalEntities_Triangle example 1
---

```fortran
PROGRAM main
USE easifemBase

IMPLICIT NONE

CALL Display(TotalEntities_Triangle(Triangle), "Triangle: ")
CALL Display(TotalEntities_Triangle(Triangle6), "Triangle6: ")
CALL Display(TotalEntities_Triangle(Triangle10), "Triangle10: ")

END PROGRAM main
```
