# Norm2

Norm2 of scalar field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Norm2(obj) RESULT(ans)
    CLASS(ScalarFieldLis_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Norm2
END INTERFACE
```
