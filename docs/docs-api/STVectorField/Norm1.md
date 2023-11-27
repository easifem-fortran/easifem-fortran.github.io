# Norm1

L1 Norm of space-time vector field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Norm1(obj) RESULT(ans)
    CLASS(STVectorField_), INTENT(IN) :: obj
    REAL(DFP) :: ans
  END FUNCTION Norm1
END INTERFACE
```