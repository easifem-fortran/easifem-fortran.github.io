```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

CALL OK( ElementName_Line(Line2) .EQ. "Line2", "ElementName_Line: " )
CALL OK( ElementName_Line(Line3) .EQ. "Line3", "ElementName_Line: " )
CALL OK( ElementName_Line(Line4) .EQ. "Line4", "ElementName_Line: " )
CALL OK( ElementName_Line(Line5) .EQ. "Line5", "ElementName_Line: " )
CALL OK( ElementName_Line(Line6) .EQ. "Line6", "ElementName_Line: " )

END PROGRAM main
```
