# GetColumn

Calling example:

- `GetColumn(obj, globalnode, idof, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, idof, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo, timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode, ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode(:), ivar, spacecompo, timecompo(:), value(:), nodefieldval, scale, addcontribution`
- `GetColumn(obj, globalnode(:), ivar, spacecompo(:), timecompo, value(:), nodefieldval, scale, addcontribution`


## Interface

```fortran
INTERFACE
  SUBROUTINE getColumn1(obj, globalNode, idof, VALUE, nodeFieldVal, &
    & scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn1
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn2(obj, globalNode, ivar, idof, &
      & VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn2
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn3(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn3
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn4(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn4
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn5(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn5
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn6(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo
    INTEGER(I4B), INTENT(IN) :: timecompo(:)
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn6
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE getColumn7(obj, globalNode, ivar, spacecompo, &
    & timecompo, VALUE, nodeFieldVal, scale, addContribution)
    IMPORT :: AbstractMatrixField_, AbstractNodeField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spacecompo(:)
    INTEGER(I4B), INTENT(IN) :: timecompo
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: VALUE(:)
    CLASS(AbstractNodeField_), OPTIONAL, INTENT(INOUT) :: nodeFieldVal
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE getColumn7
END INTERFACE
```
