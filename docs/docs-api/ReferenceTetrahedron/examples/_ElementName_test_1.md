```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Tetrahedron(Tetrahedron4) .EQ. "Tetrahedron4", "ElementName_Tetrahedron: " )
CALL OK( ElementName_Tetrahedron(Tetrahedron10) .EQ. "Tetrahedron10", "ElementName_Tetrahedron: " )
CALL OK( ElementName_Tetrahedron(Tetrahedron20) .EQ. "Tetrahedron20", "ElementName_Tetrahedron: " )
CALL OK( ElementName_Tetrahedron(Tetrahedron35) .EQ. "Tetrahedron35", "ElementName_Tetrahedron: " )
CALL OK( ElementName_Tetrahedron(Tetrahedron56) .EQ. "Tetrahedron56", "ElementName_Tetrahedron: " )

END PROGRAM main
```
