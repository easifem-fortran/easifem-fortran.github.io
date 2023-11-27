# SetRow

Calling example 

- `SetRow(obj, globalnode, idof, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, idof, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo, timecompo, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode, ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)`
- `SetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)`


## Interface

```fortran
INTERFACE
  SUBROUTINE setRow1(obj, globalNode, idof, scalarVal, vecVal, &
    & nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow1
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow2(obj, globalNode, ivar, idof, scalarVal, vecVal, &
    & nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow2
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow3(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow3
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow4(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow4
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow5(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow5
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow6(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow6
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE setRow7(obj, globalNode, ivar, spacecompo, timecompo, &
    & scalarVal, vecVal, nodeFieldVal)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal
  END SUBROUTINE setRow7
END INTERFACE
```
