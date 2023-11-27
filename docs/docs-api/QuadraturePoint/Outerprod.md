# Outerprod

Perform outerproduct of quadrature point to get tensor product form of quadrature points.

## Interface

```fortran
INTERFACE Outerprod
  MODULE PURE FUNCTION quad_Outerprod(obj1, obj2) RESULT(ans)
    CLASS(QuadraturePoint_), INTENT(IN) :: obj1
    !! quadrature points in 1D
    CLASS(QuadraturePoint_), INTENT(IN) :: obj2
    !! quadrature points in 1D
    TYPE(QuadraturePoint_) :: ans
    !! quadrature points in 2D
  END FUNCTION quad_Outerprod
END INTERFACE Outerprod
```
