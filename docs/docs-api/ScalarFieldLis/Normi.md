# Normi

Infinity norm of scalar field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Normi(obj) RESULT(ans)
    CLASS(ScalarFieldLis_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Normi
END INTERFACE
```
