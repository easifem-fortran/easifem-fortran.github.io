# DiagonalScaling

## Interface

```fortran
INTERFACE
  SUBROUTINE DiagonalScaling(obj, side, diag, OPERATOR)
    IMPORT :: AbstractMatrixField_, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: side
    REAL(DFP), OPTIONAL, INTENT(IN) :: diag(:)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR
  END SUBROUTINE DiagonalScaling
END INTERFACE
```
