# Display

This method prints the contents of `CSRSparsity_` object on the screen or to the file.

```fortran
MODULE SUBROUTINE Display( obj, Msg, UnitNo )
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj
  CHARACTER( LEN = * ), INTENT( IN ) :: Msg
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: UnitNo
END SUBROUTINE Display
```
