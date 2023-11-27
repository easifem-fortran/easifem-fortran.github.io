# QuadArea2D

This function returns area of quadrangle in two-dimension.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE QuadArea2D(q, area)
    REAL(DFP), INTENT(IN) :: q(2, 4)
    REAL(DFP), INTENT(OUT) :: area
  END SUBROUTINE QuadArea2D
END INTERFACE
```

- `QUADAREA2D` computes the area of a quadrilateral in 2D.
- A quadrilateral is a polygon defined by 4 vertices. This algorithm should be able to handle nonconvex quadrilaterals. The vertices of the quadrilateral should be listed in counter clockwise order, so that the area is positive.
