# SetMeshFacetElement

This routine sets meshFacetData.

This routine needs information of `meshMap` stored inside [Domain](./Domain_.md). If this info is not available then this routine calls [SetMeshMap](SetMeshMap.md) method to construct the required information.

```fortran
INTERFACE
  MODULE SUBROUTINE SetMeshFacetElement(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE SetMeshFacetElement
END INTERFACE
```
