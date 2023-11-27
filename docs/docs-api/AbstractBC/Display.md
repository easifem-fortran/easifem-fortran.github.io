# Display

Display the content of [AbstractBC_](AbstractBC_.md).

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Display(obj, msg, unitNo)
    IMPORT :: AbstractBC_, I4B
    CLASS(AbstractBC_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```
