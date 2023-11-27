# GetTranspose

In-place transposition routine. This subroutine transposes a matrix stored in compressed sparse row format.
Note that the transposition is done in place in that the arrays `a,ja,ia c` of the transpose are overwritten onto the original arrays.

## Interface

```fortran title="Interface"
INTERFACE
  MODULE SUBROUTINE Transpose(obj)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
  END SUBROUTINE Transpose
END INTERFACE
```
