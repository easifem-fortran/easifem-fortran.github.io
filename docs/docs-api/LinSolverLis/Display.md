# Display

Display the content of linear solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Display(obj, msg, unitno)
    CLASS(LinSolverLis_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Unitno
  END SUBROUTINE Display
END INTERFACE
```
