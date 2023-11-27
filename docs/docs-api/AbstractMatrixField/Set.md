# Set

Set the entries in Matrix Field.

## Interface

```fortran
INTERFACE
  SUBROUTINE set1(obj, globalNode, VALUE, storageFMT, scale, &
    & addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: storageFMT
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set1
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set2(obj, globalNode, VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set2
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set3(obj, iNodeNum, jNodeNum, idof, jdof, VALUE, &
    & scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: jdof
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set3
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set4(obj, iNodeNum, jNodeNum, ivar, jvar, VALUE, &
    & scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set4
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set5(obj, iNodeNum, jNodeNum, ivar, jvar, idof,  &
    & jdof, VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: jdof
    REAL(DFP), INTENT(IN) :: VALUE(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set5
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set6(obj, iNodeNum, jNodeNum, ivar, jvar, &
    & idof, jdof, VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: jdof
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set6
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set7(obj, iNodeNum, jNodeNum, ivar, jvar, &
    & ispacecompo, itimecompo, jspacecompo, jtimecompo, &
    & VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum
    INTEGER(I4B), INTENT(IN) :: jNodeNum
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set7
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set8(obj, iNodeNum, jNodeNum, ivar, jvar, &
    & ispacecompo, itimecompo, jspacecompo, jtimecompo, &
    & VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set8
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set9(obj, iNodeNum, jNodeNum, ivar, jvar, &
    & ispacecompo, itimecompo, jspacecompo, jtimecompo, &
    & VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: ispacecompo
    INTEGER(I4B), INTENT(IN) :: itimecompo(:)
    INTEGER(I4B), INTENT(IN) :: jspacecompo
    INTEGER(I4B), INTENT(IN) :: jtimecompo(:)
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set9
END INTERFACE
```

```fortran
INTERFACE
  SUBROUTINE set10(obj, iNodeNum, jNodeNum, ivar, jvar, &
    & ispacecompo, itimecompo, jspacecompo, jtimecompo, &
    & VALUE, scale, addContribution)
    IMPORT :: AbstractMatrixField_, I4B, DFP, LGT
    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: jNodeNum(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
    INTEGER(I4B), INTENT(IN) :: ispacecompo(:)
    INTEGER(I4B), INTENT(IN) :: itimecompo
    INTEGER(I4B), INTENT(IN) :: jspacecompo(:)
    INTEGER(I4B), INTENT(IN) :: jtimecompo
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set10
END INTERFACE
```

