# GetLowerTriangle

This subroutine returns the lower part of the sparse matrix.

## Interface

```fortran title="Interface"
INTERFACE
  MODULE SUBROUTINE GetLowerTriangle(obj, L)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: L
  END SUBROUTINE GetLowerTriangle
END INTERFACE
```
