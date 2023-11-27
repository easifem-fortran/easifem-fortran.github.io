# GetPrecondition

Get the preconditioner.

## Interface

```fortran
INTERFACE
  SUBROUTINE getPrecondition(obj, Pmat)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    CLASS(BlockMatrixField_), INTENT(INOUT) :: Pmat
  END SUBROUTINE getPrecondition
END INTERFACE
```
