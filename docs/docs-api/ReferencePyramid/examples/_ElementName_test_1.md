```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Pyramid(Pyramid5) .EQ. "Pyramid5", "ElementName_Pyramid: " )
CALL OK( ElementName_Pyramid(Pyramid13) .EQ. "Pyramid13", "ElementName_Pyramid: " )
CALL OK( ElementName_Pyramid(Pyramid14) .EQ. "Pyramid14", "ElementName_Pyramid: " )

END PROGRAM main
```
