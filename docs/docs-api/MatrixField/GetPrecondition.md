# GetPrecondition

## Interface

```fortran
INTERFACE
  SUBROUTINE getPrecondition(obj, Pmat)
    IMPORT :: AbstractMatrixField_
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: Pmat
  END SUBROUTINE getPrecondition
END INTERFACE
```
