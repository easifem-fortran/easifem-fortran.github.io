# Set

Set the entries of BlockNodeField.

Calling example:

- `Set(obj, value, scale, addcontribution)`
- `Set(obj, value(:), scale, addcontribution)`
- `Set(obj, globalnode, value, ivar, idof, scale, addcontribution)`
- `Set(obj, globalnode(:), value, ivar, scale, addcontribution)`
- `Set(obj, globalnode(:), value(:), ivar, scale, addcontribution)`
- `Set(obj, globalnode(:), value, ivar, idof, scale, addcontribution)`
- `Set(obj, globalnode(:), value(:), ivar, idof, scale, addcontribution)`
- `Set(obj, globalnode(:), value, ivar, spacecompo, timecompo, scale, addcontribution)`
- `Set(obj, globalnode(:), value(:), ivar, spacecompo, timecompo, scale, addcontribution)`
- `Set(obj, globalnode(:), value, ivar, spacecompo, timecompo(:), scale, addcontribution)`
- `Set(obj, globalnode(:), value(:), ivar, spacecompo, timecompo(:), scale, addcontribution)`
- `Set(obj, globalnode(:), value, ivar, spacecompo(:), timecompo, scale, addcontribution)`
- `Set(obj, globalnode(:), value(:), ivar, spacecompo(:), timecompo, scale, addcontribution)`
- `Set(obj, globalnode, value, ivar, spacecompo, timecompo, scale, addcontribution)`
- `Set(obj, globalnode, value, ivar, spacecompo, timecompo(:), scale, addcontribution)`
- `Set(obj, globalnode, value, ivar, spacecompo(:), timecompo, scale, addcontribution)`

## Interface 1

```fortran
INTERFACE
  MODULE SUBROUTINE set1(obj, VALUE, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set1
END INTERFACE
```

Set all values to scalar.

Example 3

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE set2(obj, VALUE, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set2
END INTERFACE
```

- This routine sets all values to `value`
- The size of `value` should be same `obj%size()`.

Example 4

## Interface 3

```fortran
INTERFACE
  MODULE SUBROUTINE set3(obj, globalNode, VALUE, ivar, idof, &
    & scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set3
END INTERFACE
```

- This routine sets a single entry
- The entry is selected by `ivar`, `idof` and `globalNode`.

Example 2.

## Interface 4

```fortran
INTERFACE
  MODULE SUBROUTINE set4(obj, globalNode, VALUE, ivar, scale, &
    & addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set4
END INTERFACE
```

- Set multiple entries to a constance scalar value.
- The entry is selected by `ivar` and `globalNode`.

Example 5.

## Interface 5

```fortran
INTERFACE
  MODULE SUBROUTINE set5(obj, globalNode, VALUE, ivar, scale, &
    & addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set5
END INTERFACE
```

- Set multiple entries by using `value`.
- The size of value should be equal to the size of globalNode times total number of degrees of freedom in `ivar`.
- The entry is selected by `ivar` and `globalNode`.

:::note
The storage format in `value` should be `FMT_DOF`.
:::

Example 6.

## Interface 6

```fortran
INTERFACE
  MODULE SUBROUTINE set6(obj, globalNode, VALUE, ivar, idof, &
    & scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set6
END INTERFACE
```

- Set multiple entries to scalar value.
- The entry is selected by `ivar`, `idof` and `globalNode`.

Example 7.

## Interface 7

```fortran
INTERFACE
  MODULE SUBROUTINE set7(obj, globalNode, VALUE, ivar, idof, &
    & scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set7
END INTERFACE
```

- Set multiple entries by using `value`.
- The size of value should be equal to the size of globalNode.
- The entry is selected by `ivar`, `idof` and `globalNode`.

Example 8.

## Interface 8

```fortran
INTERFACE
  MODULE SUBROUTINE set8(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set8
END INTERFACE
```

- Set multiple entries by using `value`.
- The size of value should be equal to the size of globalNode.
- The entry is selected by `ivar`, `spaceCompo`, `timeCompo` and `globalNode`.

Example 9.

## Interface 9

```fortran
INTERFACE
  MODULE SUBROUTINE set9(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set9
END INTERFACE
```

- Set multiple entries to a constant scalar value.
- The size of value should be equal to the size of globalNode.
- The entry is selected by `ivar`, `spaceCompo`, `timeCompo` and `globalNode`.

Example 10.

## Interface 10

```fortran
INTERFACE
  MODULE SUBROUTINE set10(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set10
END INTERFACE
```

- Set multiple entries.
- The size of value should be the same as the size of globalnode times the size of timecompo.

Example 11.

## Interface 11

```fortran
INTERFACE
  MODULE SUBROUTINE set11(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set11
END INTERFACE
```

- Set multiple entries to a constant value.

Example 12.

## Interface 12

```fortran
INTERFACE
  MODULE SUBROUTINE set12(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set12
END INTERFACE
```

- Set multiple entries by using value.
- The size of value should be the same as the size of globalnode times the size of spacecompo.

Example 13.

## Interface 13

```fortran
INTERFACE
  MODULE SUBROUTINE set13(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set13
END INTERFACE
```

- Set multiple entries to a constant value.

Example 14.

## Interface 14

```fortran
INTERFACE
  MODULE SUBROUTINE set14(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set14
END INTERFACE
```

- Set a single entry.
- The entry is slected by `ivar`, `spacecompo`, `timeCompo`, and `globalNode`.

Example 15.

## Interface 15

```fortran
INTERFACE
  MODULE SUBROUTINE set15(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set15
END INTERFACE
```

- Set a single entry.
- The entry is slected by `ivar`, `spacecompo`, `timeCompo`, and `globalNode`.

Example 16.

## Interface 16

```fortran
INTERFACE
  MODULE SUBROUTINE set16(obj, globalNode, VALUE, ivar, &
    & spaceCompo, timeCompo, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    REAL(DFP), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
    INTEGER(I4B), INTENT(IN) :: timeCompo
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set16
END INTERFACE
```

- Set a single entry.
- The entry is slected by `ivar`, `spacecompo`, `timeCompo`, and `globalNode`.

Example 17.

## Interface 17

```fortran
INTERFACE
  MODULE SUBROUTINE set17(obj, obj2, scale, addContribution)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj2
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE set17
END INTERFACE
```

Example 18

## Interface 18

```fortran
INTERFACE
  MODULE SUBROUTINE bnField_set18(obj, ivar, idof, VALUE, ivar_value, &
    & idof_value, scale, addContribution)
    CLASS(BlockNodeField_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    CLASS(AbstractNodeField_), INTENT(IN) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar_value
    INTEGER(I4B), INTENT(IN) :: idof_value
    REAL(DFP), OPTIONAL, INTENT(IN) :: scale
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
  END SUBROUTINE bnField_set18
END INTERFACE
```

## Interface 19

```fortran
INTERFACE
  MODULE SUBROUTINE assign(obj, VALUE)
    CLASS(BlockNodeFieldLis_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: VALUE
  END SUBROUTINE assign
END INTERFACE
```
