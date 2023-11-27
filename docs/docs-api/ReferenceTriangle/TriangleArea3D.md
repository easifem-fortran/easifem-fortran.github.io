# TriangleArea3D

`TRIANGLEAREA3D` computes the area of a triangle in 3D.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE TriangleArea3D(t, area)
    REAL(DFP), INTENT(IN) :: t(3, 3)
    REAL(DFP), INTENT(OUT) :: area
  END SUBROUTINE TriangleArea3D
END INTERFACE
```

- This routine uses the fact that the norm of the cross product of two vectors is the area of the parallelogram they form.
- Therefore, the area of the triangle is half of that value.
