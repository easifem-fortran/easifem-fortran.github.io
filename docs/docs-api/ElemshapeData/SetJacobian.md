# SetJacobian

This subroutine set the jacobian. This subroutine set the jacobian by using the nodal coordinates

$$
\frac{d x_i}{d \xi_j} = x_{iI}\frac{d N^I}{d \xi_j}
$$

```fortran
  MODULE PURE SUBROUTINE setJacobian(obj, val, dNdXi)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! nodal coordinates in `xiJ` format
    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)
  END SUBROUTINE setJacobian
```

This subroutine set the jacobian using space-time nodal coords. This subroutine set the jacobian by using space-time nodal coords, `dNdXi`, `T` are used to handle non-isoparameteric elements.

$$
\frac{d x_i}{d \xi_j} = x_{iI}^{a}T_a\frac{d N^I}{d \xi_j}
$$

```fortran
  MODULE PURE SUBROUTINE setJacobian(obj, val, dNdXi, T)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! Space time nodal values of coordinates
    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)
    !! Local derivative of shape function for geometry
    REAL(DFP), INTENT(IN) :: T(:)
    !! Shape function for time element
  END SUBROUTINE setJacobian
```
