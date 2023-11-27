# GetUnitNormal


## Interface1

In the stabilized FEM we often need the following unit vector.

$$
\frac{\nabla \vert \phi \vert}{\Vert \nabla \vert \phi \vert \Vert}
$$

Fortran interface:

```fortran
MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)
    !! unit vector defined over quadrature points
    REAL(DFP), INTENT(IN) :: val(:)
    !! spatial nodal values of scalar
  END SUBROUTINE getUnitNormal
```

In above subroutine `obj` can be an instance of [[STElemshapeData_]].

## Interface2

If we need to compute the following the direction for a vector field, that is:

$$
{\bf r}=\frac{\nabla\Vert{\bf v}\Vert}{\left|\nabla\Vert{\bf v}\Vert\right|}
$$

Fortran interface:

```fortran
MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)
    !! unit vector defined over quadrature points
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! spatial nodal values of velocity
  END SUBROUTINE getUnitNormal
```

!!! note ""
    In interface-2 `obj` can be an instance of [[STElemshapeData_]].

## Interface3

We can use [[FEVariable_]] for calculating the unit normal directions in a coherent manner. To this end, following interface can be employed:

```fortran
  MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)
    !! unit vector defined over quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! it can be scalar or vector fe variable
  END SUBROUTINE getUnitNormal
```

In above subroutine `obj` can be an instance of [[STElemshapeData_]].
