# GetProjectionOfdNTdXt

This subroutine computes the projcetion cdNTdXt on the vector `val`. Here the vector `val` is constant in space and time

$$
P^{I,a}=c_{i}\frac{\partial N^{I} T_a}{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE GetProjectionOfdNTdXt(obj, cdNTdXt, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: cdNTdXt(:, :, :)
    !! returned $c_{i}\frac{\partial N^{I} T_a}{\partial x_{i}}$
    REAL(DFP), INTENT(IN) :: val(:)
    !! constant value of vector
  END SUBROUTINE GetProjectionOfdNTdXt
```

This subroutine computes the projcetion cdNTdXt on the vector `val`. Here the vector `val` is a vector variable

- It can be constant in space and time
- It can be vary in space but contant in time
- It can vary in space and time domain

$$
P^{I,a}=c_{i}\frac{\partial N^{I} T_a}{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE GetProjectionOfdNTdXt(obj, cdNTdXt, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: cdNTdXt(:, :, :)
    !! returned $c_{i}\frac{\partial N^{I} T_a}{\partial x_{i}}$
    TYPE(FEVariable_), INTENT(IN) :: val
    !! constant value of vector
  END SUBROUTINE GetProjectionOfdNTdXt
```

This subroutine computes the projcetion cdNTdXt on the vector `val`. Here the vector `val` is a vector variable.

- It can be constant in space and time
- It can be vary in space but contant in time
- It can vary in space and time domain

$$
P^{I,a}=c_{i}\frac{\partial N^{I} T_a}{\partial x_{i}}
$$

```fortran
  MODULE PURE SUBROUTINE GetProjectionOfdNTdXt(obj, cdNTdXt, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: cdNTdXt(:, :, :, :)
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE GetProjectionOfdNTdXt
```