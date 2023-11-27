# GetMeshID

Get mesh-ids of boundary condition.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetMeshID(obj, dim) RESULT(Ans)
    CLASS(AbstractBC_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetMeshID
END INTERFACE
```


This routine is inherited from [AbstractBC_](../AbstractBC/AbstractBC_.md).