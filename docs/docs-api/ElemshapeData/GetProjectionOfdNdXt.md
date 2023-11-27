# GetProjectionOfdNdXt

There are several interfaces to this generic method. In general, it takes the projection $\frac{dN}{dx}$ on the convective velocity $c$, that is:

$$
M^{I}=c_{k}\frac{\partial N^{I}}{\partial x_{k}}
$$

Here, $c$ is the convective velocity, (that is a vector variable). It can be

- a constant
- a function of spatial coordinates given in terms of
  - spatial nodal values
  - quadrature values

If $c$ changes in space then it should be wrapped inside an instance of  [[FEVariable_]].

You can learn about this method from the following pages

- [[_ElemshapeData_test_11]] for [[ReferenceTriangle_]], constant velocity $c$
- [[_ElemshapeData_test_12]] for [[ReferenceTriangle_]], nodal values of velocity $c$
- [[_ElemshapeData_test_13]] for [[ReferenceTriangle_]], velocity $c$ is defined at the quadrature points.

This subroutine computes the projcetion cdNdXt on the vector `val`. Here the vector `val` is constant in space and time.

$$
P^{I}=c_{i}\frac{\partial N^{I}}{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE GetProjectionOfdNdXt(obj, cdNdXt, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: cdNdXt(:, :)
    !! returned $c_{i}\frac{\partial N^{I}}{\partial x_{i}}$
    REAL(DFP), INTENT(IN) :: val(:)
    !! constant value of vector
  END SUBROUTINE GetProjectionOfdNdXt
```

The following subroutine computes the projcetion cdNdXt on the vector `val`. Here the vector `val` is constant in space and time.

$$
P^{I}=c_{i}\frac{\partial N^{I}}{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE GetProjectionOfdNdXt(obj, cdNdXt, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    !! ElemshapeData object
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: cdNdXt(:, :)
    !! returned $c_{i}\frac{\partial N^{I}}{\partial x_{i}}$
    CLASS(FEVariable_), INTENT(IN) :: val
    !! constant value of vector
  END SUBROUTINE GetProjectionOfdNdXt
```
