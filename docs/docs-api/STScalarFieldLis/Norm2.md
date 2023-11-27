# Norm2

Norm2 of node field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Norm2(obj) RESULT(ans)
    CLASS(STScalarField_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Norm2
END INTERFACE
```
