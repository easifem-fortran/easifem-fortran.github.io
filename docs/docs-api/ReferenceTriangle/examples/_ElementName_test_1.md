```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Triangle(Triangle3) .EQ. "Triangle3", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle6) .EQ. "Triangle6", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle9) .EQ. "Triangle9", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle10) .EQ. "Triangle10", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle12) .EQ. "Triangle12", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle15a) .EQ. "Triangle15a", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle15b) .EQ. "Triangle15b", "ElementName_Triangle: " )
CALL OK( ElementName_Triangle(Triangle21) .EQ. "Triangle21", "ElementName_Triangle: " )

END PROGRAM main
```
