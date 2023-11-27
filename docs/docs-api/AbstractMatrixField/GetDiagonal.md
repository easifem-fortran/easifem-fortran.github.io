# GetDiagonal

Returns the diagonal

## Interface

```fortran
INTERFACE
  SUBROUTINE GetDiagonal(obj, diag)
    IMPORT :: AbstractMatrixField_, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)
  END SUBROUTINE GetDiagonal
END INTERFACE
```
