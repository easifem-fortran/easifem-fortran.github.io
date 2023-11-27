# GetPreconditionOption

Get the precondition option.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetPreconditionOption(obj) RESULT(Ans)
    CLASS(AbstractLinSolver_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetPreconditionOption
END INTERFACE
```
