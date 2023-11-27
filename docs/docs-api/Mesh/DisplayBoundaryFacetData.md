# DisplayBoundaryFacetData

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayBoundaryFacetData(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayBoundaryFacetData
END INTERFACE
```
