# SetdNTdt

This subroutine set `dNTdt` by using the space-time nodal values.

- This subroutine set `dNTdt` by using space-time nodal values
- It is important to note that `dNTdXt` should be allocated before calling
- This subroutine uses following formula

$$
\frac{\partial N^{I\  }T_{a}}{\partial t} =N^{I}\frac{\partial T_{a}}
{\partial \theta } J^{-1}_{t}-\frac{\partial N^{I}T_{a}}{\partial x_{k}}
\hat{v}_{k}
$$

```fortran
  MODULE PURE SUBROUTINE setdNTdt(obj, val)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! Space-time nodal values
  END SUBROUTINE setdNTdt
```
