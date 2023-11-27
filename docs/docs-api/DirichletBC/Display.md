# Display

Display the content of [DirichletBC_](DirichletBC_.md)

## Interface

```fortran
INTERFACE
  SUBROUTINE Display(obj, msg, unitNo)
    CLASS(DirichletBC_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```
