# Display

Display the content of BlockNodeField.

## Interface

```fortran
INTERFACE
SUBROUTINE Display( obj, msg, unitNo )
  CLASS(BlockNodeField_), INTENT( INOUT ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo
END SUBROUTINE Display
END INTERFACE
```
