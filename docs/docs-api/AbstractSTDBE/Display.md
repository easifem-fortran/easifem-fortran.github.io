# Display

This routine displays the content of the kernel on the screen.

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_Display(obj, msg, unitNo)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE STDBE_Display
END INTERFACE
```
