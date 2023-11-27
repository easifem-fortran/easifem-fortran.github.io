# SetBarycentricCoord

This subroutine set the Barycentric coordinates

$$
x_i = x_{iI} N^{I}
$$

```fortran
  MODULE PURE SUBROUTINE setBarycentricCoord(obj, val, N)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! Nodal coordinates in `xiJ` format
    REAL(DFP), INTENT(IN) :: N(:, :)
    !! When element is not an isoparametric we can supply N.
  END SUBROUTINE setBarycentricCoord
```

The following subroutine set the barycentric coordinates by using space-time nodal coordinates

$$
x=x_{I}^{a} N^I T_a
$$

```fortran
  MODULE PURE SUBROUTINE setBarycentricCoord(obj, val, N, T)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time Nodal coordinates in `xiJ` format
    REAL(DFP), INTENT(IN) :: N(:, :), T(:)
    !! N and T are required to handle non isoparametric elements
  END SUBROUTINE setBarycentricCoord
```
