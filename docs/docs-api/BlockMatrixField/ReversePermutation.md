# ReversePermutation

Reverse permutation for ILU solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE reversePermutation(obj, rhs, sol)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: rhs
    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: sol
  END SUBROUTINE reversePermutation
END INTERFACE
```
