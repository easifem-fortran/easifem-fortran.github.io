```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Prism(Prism6) .EQ. "Prism6", "ElementName_Prism: " )
CALL OK( ElementName_Prism(Prism15) .EQ. "Prism15", "ElementName_Prism: " )
CALL OK( ElementName_Prism(Prism18) .EQ. "Prism18", "ElementName_Prism: " )

END PROGRAM main
```
