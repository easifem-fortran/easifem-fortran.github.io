# DropEntry

This routine removes any element whose absolute value is small from an input matrix A and puts the resulting matrix in B.

## Interface

```fortran title="Interface"
INTERFACE
  MODULE SUBROUTINE DropEntry(objIn, objOut, droptol, option)
    TYPE(CSRMatrix_), INTENT(IN) :: objIn
    TYPE(CSRMatrix_), INTENT(INOUT) :: objOut
    REAL(DFP), INTENT(IN) :: droptol
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: option
  END SUBROUTINE DropEntry
END INTERFACE
```

- `option` is used to determine strategy chosen by caller to drop elements from matrix A.
- `option` = 1, Elements whose absolute value is less than the drop tolerance are removed.
- `option` = 2, Elements whose absolute value is less than the product of the drop tolerance and the Euclidean norm of the row are removed.
- `option` = 3, Elements whose absolute value is less that the product of the drop tolerance and the largest element in the row are removed.
- `droptol` = real. drop tolerance used for dropping strategy.
