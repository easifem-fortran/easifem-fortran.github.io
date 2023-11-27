# GetDiagonal

Returns the diagonal

## Interface

```fortran
INTERFACE
  SUBROUTINE GetDiagonal(obj, diag)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)
  END SUBROUTINE GetDiagonal
END INTERFACE
```
