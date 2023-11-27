# GetQuery

This routine returns the `isInitiated`, `isSelectionByBox`, `isSelectionByMeshID` etc. queries.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetQuery(obj, isInitiated, &
    & isSelectionByBox, isSelectionByMeshID, isSelectionByElemNum, &
    & isSelectionByNodeNum)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isInitiated
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByBox
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByMeshID
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByElemNum
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: isSelectionByNodeNum
  END SUBROUTINE GetQuery
END INTERFACE
```
