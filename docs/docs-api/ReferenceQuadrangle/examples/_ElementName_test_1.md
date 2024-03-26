```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Quadrangle(Quadrangle4) .EQ. "Quadrangle4", "ElementName_Quadrangle: " )
CALL OK( ElementName_Quadrangle(Quadrangle8) .EQ. "Quadrangle8", "ElementName_Quadrangle: " )
CALL OK( ElementName_Quadrangle(Quadrangle9) .EQ. "Quadrangle9", "ElementName_Quadrangle: " )
CALL OK( ElementName_Quadrangle(Quadrangle16) .EQ. "Quadrangle16", "ElementName_Quadrangle: " )

END PROGRAM main
```
