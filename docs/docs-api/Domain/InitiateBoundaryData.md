# InitiateBoundaryData

- This routine sets the boundary-data information in each mesh of domain.
- For information please read [InitiateBoundaryData](../Mesh/InitiateBoundaryData.md).
- After calling, `InitiateBoundaryData()` on each mesh, this routine makes an internal call to `SetFacetElementType`, for information see [SetFacetElementType](SetFacetElementType.md).

```fortran
INTERFACE
  MODULE SUBROUTINE Domain_InitiateBoundaryData(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE Domain_InitiateBoundaryData
END INTERFACE
```
