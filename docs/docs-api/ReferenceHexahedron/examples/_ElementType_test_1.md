---
title: ElementType_Hexahedron example 1
---

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE

  CALL OK(ElementType_Hexahedron("Hexahedron8") .EQ. Hexahedron8,  &
    & "ElementType_Hexahedron: ")

  CALL OK(ElementType_Hexahedron("Hexahedron20") .EQ. Hexahedron20,  &
    & "ElementType_Hexahedron: ")


  CALL OK(ElementType_Hexahedron("Hexahedron27") .EQ. Hexahedron27,  &
    & "ElementType_Hexahedron: ")

  CALL OK(ElementType_Hexahedron("Hexahedron64") .EQ. Hexahedron64,  &
    & "ElementType_Hexahedron: ")

  CALL OK(ElementType_Hexahedron("Hexahedron125") .EQ. Hexahedron125,  &
    & "ElementType_Hexahedron: ")

END PROGRAM main
```
