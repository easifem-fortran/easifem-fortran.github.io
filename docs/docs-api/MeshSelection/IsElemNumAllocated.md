# IsElemNumAllocated

This routine returns true if element numbers of a given dim are allocated.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION isElemNumAllocated(obj, dim) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    LOGICAL(LGT) :: ans
  END FUNCTION isElemNumAllocated
END INTERFACE
```
