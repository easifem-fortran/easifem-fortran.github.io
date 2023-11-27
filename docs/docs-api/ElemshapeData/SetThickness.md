# SetThickness

This subroutine set the `thickness` field. Here `val` denotes the nodal value of thickeness

$$
d = d_{I} N^{I}
$$

```fortran
  MODULE PURE SUBROUTINE setThickness(obj, val, N)
    CLASS(ElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:)
    !! Nodal values of thickness
    REAL(DFP), INTENT(IN) :: N(:, :)
    !! Shape function values at quadrature points
  END SUBROUTINE setThickness
```

The following subroutine set the `thickness` field. Here `val` denotes the space-time nodal value of thickeness.

$$
d = d_{I}^{a} N^{I} T_{a}
$$

```fortran
  MODULE PURE SUBROUTINE setThickness(obj, val, N, T)
    CLASS(STElemshapeData_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! Space-time nodal values of thickness
    REAL(DFP), INTENT(IN) :: N(:, :)
    !! Shape function at spatial quadrature
    REAL(DFP), INTENT(IN) :: T(:)
    !! Shape function at temporal quadrature
  END SUBROUTINE setThickness
```
