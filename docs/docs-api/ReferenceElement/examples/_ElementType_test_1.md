```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK(ElementType("Line2") .EQ. Line2, "ElementType: ")
CALL OK(ElementType("Line3") .EQ. Line3, "ElementType: ")
CALL OK(ElementType("Line4") .EQ. Line4, "ElementType: ")
CALL OK(ElementType("Line5") .EQ. Line5, "ElementType: ")
CALL OK(ElementType("Line6") .EQ. Line6, "ElementType: ")

CALL OK(ElementType("Triangle3") .EQ. Triangle3, "ElementType: ")
CALL OK(ElementType("Triangle6") .EQ. Triangle6, "ElementType: ")
CALL OK(ElementType("Triangle9") .EQ. Triangle9, "ElementType: ")
CALL OK(ElementType("Triangle10") .EQ. Triangle10, "ElementType: ")
CALL OK(ElementType("Triangle12") .EQ. Triangle12, "ElementType: ")
CALL OK(ElementType("Triangle15a") .EQ. Triangle15a, "ElementType: ")
CALL OK(ElementType("Triangle15b") .EQ. Triangle15b, "ElementType: ")
CALL OK(ElementType("Triangle21") .EQ. Triangle21, "ElementType: ")

CALL OK(ElementType("Quadrangle4") .EQ. Quadrangle4, "ElementType: ")
CALL OK(ElementType("Quadrangle8") .EQ. Quadrangle8, "ElementType: ")
CALL OK(ElementType("Quadrangle9") .EQ. Quadrangle9, "ElementType: ")
CALL OK(ElementType("Quadrangle16") .EQ. Quadrangle16, "ElementType: ")

CALL OK(ElementType("Tetrahedron4") .EQ. Tetrahedron4, "ElementType: ")
CALL OK(ElementType("Tetrahedron10") .EQ. Tetrahedron10, "ElementType: ")
CALL OK(ElementType("Tetrahedron20") .EQ. Tetrahedron20, "ElementType: ")
CALL OK(ElementType("Tetrahedron35") .EQ. Tetrahedron35, "ElementType: ")
CALL OK(ElementType("Tetrahedron56") .EQ. Tetrahedron56, "ElementType: ")

CALL OK(ElementType("Hexahedron8") .EQ. Hexahedron8, "ElementType: ")
CALL OK(ElementType("Hexahedron20") .EQ. Hexahedron20, "ElementType: ")
CALL OK(ElementType("Hexahedron27") .EQ. Hexahedron27, "ElementType: ")
CALL OK(ElementType("Hexahedron64") .EQ. Hexahedron64, "ElementType: ")
CALL OK(ElementType("Hexahedron125") .EQ. Hexahedron125, "ElementType: ")

CALL OK(ElementType("Prism6") .EQ. Prism6, "ElementType: ")
CALL OK(ElementType("Prism15") .EQ. Prism15, "ElementType: ")
CALL OK(ElementType("Prism18") .EQ. Prism18, "ElementType: ")

CALL OK(ElementType("Pyramid5") .EQ. Pyramid5, "ElementType: ")
CALL OK(ElementType("Pyramid13") .EQ. Pyramid13, "ElementType: ")
CALL OK(ElementType("Pyramid14") .EQ. Pyramid14, "ElementType: ")

END PROGRAM main
```
