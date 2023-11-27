# LocalNodeCoord

Returns the local NodeCoord of an element

This routine will be removed in near future. This routine is not included in generic LocalNodeCoord routine

```fortran
  MODULE PURE SUBROUTINE Local_NodeCoord(NodeCoord, ElemType)
    ! Define intent of dummy variables
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: NodeCoord(:, :)
    INTEGER(I4B), INTENT(IN) :: ElemType
  END SUBROUTINE Local_NodeCoord
```

```fortran
  MODULE PURE FUNCTION Local_NodeCoord_RefElem(RefElem) RESULT(NodeCoord)
    CLASS(ReferenceElement_), INTENT(IN) :: RefElem
    REAL(DFP), ALLOCATABLE :: NodeCoord(:, :)
  END FUNCTION Local_NodeCoord_RefElem
```
