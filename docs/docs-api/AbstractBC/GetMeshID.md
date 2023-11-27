# GetMeshID

Get mesh-ids of boundary condition.

This method calls [GetMeshID](../MeshSelection/GetMeshID.md) method on `boundary`, which is an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).

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
