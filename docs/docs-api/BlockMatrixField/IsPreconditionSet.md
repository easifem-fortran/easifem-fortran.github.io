# IsPreconditionSet

Returns true if the Precondition matrix is set.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION isPreconditionSet(obj) RESULT(Ans)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isPreconditionSet
END INTERFACE
```
