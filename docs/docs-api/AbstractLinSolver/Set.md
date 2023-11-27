# Set

Set the abstract linear solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Set(obj, Amat)
    IMPORT :: AbstractLinSolver_, AbstractMatrixField_
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    CLASS(AbstractMatrixField_), TARGET, INTENT(INOUT) :: Amat
  END SUBROUTINE Set
END INTERFACE
```
