# Normi

L$\infty$  Norm of space-time vector field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Normi(obj) RESULT(ans)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Normi
END INTERFACE
```