# Get

`Get` is generic function which returns the value from `UserFunction`.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface (Get scalar value)

```fortran
INTERFACE
  MODULE RECURSIVE SUBROUTINE GetScalarValue(obj, val, args)
    CLASS(UserFunction_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(INOUT) :: val
    REAL(DFP), OPTIONAL, INTENT(IN) :: args(:)
  END SUBROUTINE GetScalarValue
END INTERFACE
```

## Interface (Get vector value)

```fortran
INTERFACE
  MODULE RECURSIVE SUBROUTINE GetVectorValue(obj, val, args)
    CLASS(UserFunction_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: val(:)
    REAL(DFP), OPTIONAL, INTENT(IN) :: args(:)
  END SUBROUTINE GetVectorValue
END INTERFACE
```

## Interface (Get matrix value)

```fortran
INTERFACE
  MODULE RECURSIVE SUBROUTINE GetMatrixValue(obj, val, args)
    CLASS(UserFunction_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: val(:, :)
    REAL(DFP), OPTIONAL, INTENT(IN) :: args(:)
  END SUBROUTINE GetMatrixValue
END INTERFACE
```
