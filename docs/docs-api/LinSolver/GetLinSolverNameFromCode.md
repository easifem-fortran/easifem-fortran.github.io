# GetLinSolverNameFromCode

This function returns the linear solver name from integer code.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION getLinSolverCodeFromName(name) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B) :: ans
  END FUNCTION getLinSolverCodeFromName
END INTERFACE
```
