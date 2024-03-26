---
title: ElementOrder_Hexahedron example 1
---

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE

  CALL OK(ElementOrder_Hexahedron(elemType=Hexahedron8) .EQ. 1,  &
    & "ElementOrder_Hexahedron(1): ")

  CALL OK(ElementOrder_Hexahedron(elemType=Hexahedron20) .EQ. 2,  &
    & "ElementOrder_Hexahedron(2): ")

  CALL OK(ElementOrder_Hexahedron(elemType=Hexahedron27) .EQ. 2,  &
    & "ElementOrder_Hexahedron(3): ")
END PROGRAM main
```
