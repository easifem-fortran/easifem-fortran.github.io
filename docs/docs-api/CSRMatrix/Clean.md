# Clean

This routine performs tasks related to the cleaning of sparse matrix.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Clean(obj, isValues, ExtraOption)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isValues
    !! If .TRUE. then values will be touched, otherwise they remain
    !! untouched by this subroutine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ExtraOption
    !! If it is 0, then do nothing
    !! If 1, then remove duplicates and zeros, if any
    !! If 2, then remove duplicates and perform partial ordering
    !! If 3, then remove duplicates, sort entries in increasing order of col
  END SUBROUTINE Clean
END INTERFACE
```
