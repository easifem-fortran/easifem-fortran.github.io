# IsNodeNumAllocated

This routine returns true if node numbers are allocated.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION isNodeNumAllocated(obj) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isNodeNumAllocated
END INTERFACE
```
