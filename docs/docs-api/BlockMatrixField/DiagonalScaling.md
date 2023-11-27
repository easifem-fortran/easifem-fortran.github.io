# DiagonalScaling

Perform diagonal scaling to matrixfield.

## Interface

```fortran
INTERFACE
  SUBROUTINE DiagonalScaling(obj, side, diag, OPERATOR)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: side
    REAL(DFP), OPTIONAL, INTENT(IN) :: diag(:)
    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR
  END SUBROUTINE DiagonalScaling
END INTERFACE
```
