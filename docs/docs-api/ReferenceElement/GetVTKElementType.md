# GetVTKElementType

```fortran
  MODULE PURE SUBROUTINE get_vtk_elemType(ElemType, vtk_type, nptrs)
    INTEGER(I4B), INTENT(IN) :: ElemType
    INTEGER(Int8), INTENT(OUT) :: vtk_type
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: nptrs(:)
  END SUBROUTINE get_vtk_elemType
```
