# QuadArea3D

This function returns the area of quadrangle in three dimension.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE QuadArea3D(q, area)
    REAL(DFP), INTENT(IN) :: q(3, 4)
    REAL(DFP), INTENT(OUT) :: area
  END SUBROUTINE QuadArea3D
END INTERFACE
```

- QUADAREA3D computes the area of a quadrilateral in 3D.
- A quadrilateral is a polygon defined by 4 vertices. It is assumed that the four vertices of the quadrilateral are coplanar.
- This algorithm computes the area of the related Varignon parallelogram first.
