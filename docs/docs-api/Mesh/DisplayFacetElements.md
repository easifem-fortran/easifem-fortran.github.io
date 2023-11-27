# DisplayFacetElements

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayFacetElements(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayFacetElements
END INTERFACE
```
