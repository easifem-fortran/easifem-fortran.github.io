# TriangleArea2D

This subroutine computes the area of a triangle in two dimensions.

- If the triangle's vertices are given in counterclockwise order, the area will be positive.  
- If the triangle's vertices are given in clockwise order, the area will be negative.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE TriangleArea2D(t, area)
    REAL(DFP), INTENT(IN) :: t(2, 3)
    REAL(DFP), INTENT(OUT) :: area
  END SUBROUTINE TriangleArea2D
END INTERFACE
```
