```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Hexahedron(Hexahedron8) .EQ. "Hexahedron8", "ElementName_Hexahedron: " )
CALL OK( ElementName_Hexahedron(Hexahedron20) .EQ. "Hexahedron20", "ElementName_Hexahedron: " )
CALL OK( ElementName_Hexahedron(Hexahedron27) .EQ. "Hexahedron27", "ElementName_Hexahedron: " )
CALL OK( ElementName_Hexahedron(Hexahedron64) .EQ. "Hexahedron64", "ElementName_Hexahedron: " )
CALL OK( ElementName_Hexahedron(Hexahedron125) .EQ. "Hexahedron125", "ElementName_Hexahedron: " )

END PROGRAM main
```
