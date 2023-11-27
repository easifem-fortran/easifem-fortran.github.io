# IsMeshIDAllocated

This routine returns true if meshID of given dim is allocated

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION isMeshIDAllocated(obj, dim) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    LOGICAL(LGT) :: ans
  END FUNCTION isMeshIDAllocated
END INTERFACE
```
