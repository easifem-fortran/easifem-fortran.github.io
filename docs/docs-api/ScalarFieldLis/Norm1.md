# Norm1

Norm 1 of scalar field.


## Interface

```fortran
INTERFACE
  MODULE FUNCTION Norm1(obj) RESULT(ans)
    CLASS(ScalarFieldLis_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Norm1
END INTERFACE
```
