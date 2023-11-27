# Display

Display the content of BlockMatrixField

## Interface

```fortran
INTERFACE
SUBROUTINE Display( obj, msg, unitNo )
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo
END SUBROUTINE Display
END INTERFACE
```
