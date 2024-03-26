---
title: TotalEntities_Line example 1
---

```fortran
PROGRAM main
USE easifemBase

IMPLICIT NONE

CALL Display(TotalEntities_Line(Line), "Line: ")
CALL Display(TotalEntities_Line(Line3), "Line3: ")
CALL Display(TotalEntities_Line(Line4), "Line4: ")

END PROGRAM main
```
