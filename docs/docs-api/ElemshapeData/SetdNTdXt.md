# SetdNTdXt

This subroutine set `dNTdXt` by using internal data

- This subroutine set `dNTdXt` by using internal data
- This subroutine uses inverse of Jacobian, therefore, before calling this subroutine make sure to set jacobian

$$
\frac{\partial N^{I\  }T_{a}}{\partial x_{i\  }}
=\frac{\partial N^{I}T_{a}}{\partial \xi_{j} } \frac{\partial \xi_{j} }
{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE setdNTdXt(obj)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
  !! Space-time nodal values
  END SUBROUTINE setdNTdXt
```
