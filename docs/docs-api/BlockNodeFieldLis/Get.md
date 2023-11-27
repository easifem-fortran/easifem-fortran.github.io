# Get

Get the entries from block node field.

## Interface 1

```fortran
INTERFACE
  MODULE SUBROUTINE get1(obj, VALUE, globalNode, ivar, idof)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: ivar
  !! physical variable number
    INTEGER(I4B), INTENT(IN) :: idof
  !! degree of freedom number
  END SUBROUTINE get1
END INTERFACE
```

- Get single entry from block node field.
- The value is selected by `globalNode`, `ivar`, `idof`.

Example 19.

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE get2(obj, VALUE)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
  END SUBROUTINE get2
END INTERFACE
```

- Get all the values in a vector of reals.

Example 20.

## Interface 3

```fortran
INTERFACE
  MODULE SUBROUTINE get3(obj, VALUE, globalNode, ivar, idof)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
  END SUBROUTINE get3
END INTERFACE
```

- Get multiple values.
- The value is selected by using `globalNode`, `ivar`, `idof`.
- The size of value is equal to the size of globalNode.

Example 21.

## Interface 4

```fortran
INTERFACE
  MODULE SUBROUTINE get4(obj, VALUE, istart, iend, stride,  &
    & ivar, idof)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
  END SUBROUTINE get4
END INTERFACE
```

- Get multiple values by using triplets.
- The value is selected by using `globalNode`, `ivar`, `idof`.

Example 22.

## Interface 5

```fortran
INTERFACE
  MODULE SUBROUTINE get5(obj, VALUE, globalNode, &
    & ivar, idof)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
  END SUBROUTINE get5
END INTERFACE
```

- Get multiple values in FEVariable.
- The values are selected by using `globalNode`, `ivar`, `idof`.

Example 23.

## Interface 6

```fortran
INTERFACE
  MODULE SUBROUTINE get6(obj, VALUE, globalNode, ivar)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
  END SUBROUTINE get6
END INTERFACE
```

- Get multiple values in FEVariable.
- The values are selected by using `globalNode`, `ivar`.

Example 24.

## Interface 7

```fortran
INTERFACE
  MODULE SUBROUTINE get7(obj, VALUE, globalNode, ivar, &
    & spaceCompo, timeCompo)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE get7
END INTERFACE
```

- Get multiple values in a vector of reals.
- The values are selected by using `ivar`, `spaceCompo`, `timeCompo`, `globalNode`.

Example 25

## Interface 8

```fortran
INTERFACE
  MODULE SUBROUTINE get8(obj, VALUE, globalNode, ivar, &
    & spaceCompo, timeCompo)
    CLASS(BlockNodeFieldLis_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
  END SUBROUTINE get8
END INTERFACE
```

- Get multiple values in FEVariable.
- The values are selected by using `ivar`, `spaceCompo`, `timeCompo`, `globalNode`.

Example 26.

## Interface 9

```fortran
INTERFACE
MODULE SUBROUTINE bnField_get9(obj, ivar, idof, VALUE, ivar_value, idof_value)
    CLASS(BlockNodeField_), INTENT(IN) :: obj
    CLASS(AbstractNodeField_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: ivar_value
    INTEGER(I4B), INTENT(IN) :: idof_value
  END SUBROUTINE bnField_get9
END INTERFACE
```

- Get multiple values in ScalarField
- The values are selected by `ivar`, `idof`.

Example 27.
