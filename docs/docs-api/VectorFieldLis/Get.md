# Get

Get entries from vector field.

Calling example:

## Interface 1

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get1(obj, VALUE, globalNode, spaceCompo)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNode
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo
  END SUBROUTINE vField_get1
END INTERFACE
```

- If `globalnode` is present then this routine returns all spatial components at the `globalnode`

- If `spacecompo` is present then `globalnode` should not be present. In this case this routine returns the entire vector of `spacecompo`.

## Interface 2

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get2(obj, VALUE, force3D)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
  END SUBROUTINE vField_get2
END INTERFACE
```

- This routine gets all the entries of vector field.

## Interface 3

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get3(obj, VALUE, globalNode, force3D)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: force3D
  END SUBROUTINE vField_get3
END INTERFACE
```

## Interface 4

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get4(obj, VALUE, globalNode, spaceCompo)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(IN) :: spaceCompo
  END SUBROUTINE vField_get4
END INTERFACE
```

## Interface 5

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get5(obj, VALUE, globalNode, spaceCompo)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode
    INTEGER(I4B), INTENT(IN) :: spaceCompo
  END SUBROUTINE vField_get5
END INTERFACE
```

## Interface 6

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get6(obj, VALUE, istart, iend, stride)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:, :)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
  END SUBROUTINE vField_get6
END INTERFACE
```

## Interface 7

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get7(obj, VALUE, istart, iend, stride, spaceCompo)
    CLASS(VectorField_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: VALUE(:)
    INTEGER(I4B), INTENT(IN) :: istart
    INTEGER(I4B), INTENT(IN) :: iend
    INTEGER(I4B), INTENT(IN) :: stride
    INTEGER(I4B), INTENT(IN) :: spaceCompo
  END SUBROUTINE vField_get7
END INTERFACE
```

## Interface 8

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get8(obj, VALUE, globalNode)
    CLASS(VectorField_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
  END SUBROUTINE vField_get8
END INTERFACE
```

## Interface 9

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get9(obj, VALUE, spaceCompo)
    CLASS(VectorField_), INTENT(IN) :: obj
    CLASS(ScalarField_), INTENT(INOUT) :: VALUE
    INTEGER(I4B), INTENT(IN) :: spaceCompo
  END SUBROUTINE vField_get9
END INTERFACE
```

## Interface 10

```fortran
INTERFACE
  MODULE SUBROUTINE vField_get10(obj, VALUE)
    CLASS(VectorField_), INTENT(IN) :: obj
    CLASS(VectorField_), INTENT(INOUT) :: VALUE
  END SUBROUTINE vField_get10
END INTERFACE
```
