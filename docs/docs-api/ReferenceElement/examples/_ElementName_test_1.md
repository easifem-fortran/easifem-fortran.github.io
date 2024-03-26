```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK(ElementName(Line2) .EQ. "Line2", "ElementName: ")
CALL OK(ElementName(Line3) .EQ. "Line3", "ElementName: ")
CALL OK(ElementName(Line4) .EQ. "Line4", "ElementName: ")
CALL OK(ElementName(Line5) .EQ. "Line5", "ElementName: ")
CALL OK(ElementName(Line6) .EQ. "Line6", "ElementName: ")

CALL OK(ElementName(Triangle3) .EQ. "Triangle3", "ElementName: ")
CALL OK(ElementName(Triangle6) .EQ. "Triangle6", "ElementName: ")
CALL OK(ElementName(Triangle9) .EQ. "Triangle9", "ElementName: ")
CALL OK(ElementName(Triangle10) .EQ. "Triangle10", "ElementName: ")
CALL OK(ElementName(Triangle12) .EQ. "Triangle12", "ElementName: ")
CALL OK(ElementName(Triangle15a) .EQ. "Triangle15a", "ElementName: ")
CALL OK(ElementName(Triangle15b) .EQ. "Triangle15b", "ElementName: ")
CALL OK(ElementName(Triangle21) .EQ. "Triangle21", "ElementName: ")

CALL OK(ElementName(Quadrangle4) .EQ. "Quadrangle4", "ElementName: ")
CALL OK(ElementName(Quadrangle8) .EQ. "Quadrangle8", "ElementName: ")
CALL OK(ElementName(Quadrangle9) .EQ. "Quadrangle9", "ElementName: ")
CALL OK(ElementName(Quadrangle16) .EQ. "Quadrangle16", "ElementName: ")

CALL OK(ElementName(Tetrahedron4) .EQ. "Tetrahedron4", "ElementName: ")
CALL OK(ElementName(Tetrahedron10) .EQ. "Tetrahedron10", "ElementName: ")
CALL OK(ElementName(Tetrahedron20) .EQ. "Tetrahedron20", "ElementName: ")
CALL OK(ElementName(Tetrahedron35) .EQ. "Tetrahedron35", "ElementName: ")
CALL OK(ElementName(Tetrahedron56) .EQ. "Tetrahedron56", "ElementName: ")

CALL OK(ElementName(Hexahedron8) .EQ. "Hexahedron8", "ElementName: ")
CALL OK(ElementName(Hexahedron20) .EQ. "Hexahedron20", "ElementName: ")
CALL OK(ElementName(Hexahedron27) .EQ. "Hexahedron27", "ElementName: ")
CALL OK(ElementName(Hexahedron64) .EQ. "Hexahedron64", "ElementName: ")
CALL OK(ElementName(Hexahedron125) .EQ. "Hexahedron125", "ElementName: ")

CALL OK(ElementName(Prism6) .EQ. "Prism6", "ElementName: ")
CALL OK(ElementName(Prism15) .EQ. "Prism15", "ElementName: ")
CALL OK(ElementName(Prism18) .EQ. "Prism18", "ElementName: ")

CALL OK(ElementName(Pyramid5) .EQ. "Pyramid5", "ElementName: ")
CALL OK(ElementName(Pyramid13) .EQ. "Pyramid13", "ElementName: ")
CALL OK(ElementName(Pyramid14) .EQ. "Pyramid14", "ElementName: ")

END PROGRAM main
```
