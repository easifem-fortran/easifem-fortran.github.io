# GetLinSolverNameFromCode

This function returns the name of linear solver from the integer code.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION getLinSolverNameFromCode(name) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: name
    CHARACTER(15) :: ans
  END FUNCTION getLinSolverNameFromCode
END INTERFACE
```
