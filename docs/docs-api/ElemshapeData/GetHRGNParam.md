# GetHRGNParam

Tezduyar and coworkers have defined an element length parameter for stabilized finite element methods.

$$
h_{RGN}=\frac{2}{\sum_{I=1}^{nns}\left|{\bf r}\cdot\nabla N^{I}\right|}
$$

for space-time FEM

$$
h_{RGN}=\frac{2}{\sum_{a=1}^{nnt}\sum_{I=1}^{nns}\left|{\bf r}\cdot\nabla\left(N^{I}T_{a}\right)\right|}
$$

where,

$$
{\bf r}=\frac{\nabla\Vert{\bf v}\Vert}{\left|\nabla\Vert{\bf v}\Vert\right|}
$$

or

$$
{\bf r}=\frac{\nabla \vert \phi \vert}{\Vert \nabla \vert \phi \vert \Vert}
$$

are the unit vectors.

!!! note ""
    In all the interfaces `val` is provided as the [[FEVariable_]], which can be a vector or scalar defined either at quadrature or nodal variables.

!!! info "Interface-1"

- `h` is returned as a vector of reals.

```fortran
  MODULE PURE SUBROUTINE GetHRGNParam(obj, h, val, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( : )
      !! h is a scalar, and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetHRGNParam
```

!!! info "Interface-2"

- `h` is returned as a [[FEVariable_]], which is scalar and defined at quadrature points.

```fortran
  MODULE PURE SUBROUTINE GetHRGNParam(obj, h, val, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: h
      !! h is a scalar, and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetHRGNParam
```

!!! info "Interface-3"

For space-time FEM, we have following interface:

```fortran
  MODULE PURE SUBROUTINE GetHRGNParam(obj, h, val, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
      !! Spacetime shape function data, obj(ipt) denotes data at
      !! ipt quadrature point in time domain
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( :, : )
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! it can be a scalar, defined on space or space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
  END SUBROUTINE GetHRGNParam
```

```fortran
  MODULE PURE SUBROUTINE GetHRGNParam(obj, h, val, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
      !! Spacetime shape function data, obj(ipt) denotes data at
      !! ipt quadrature point in time domain
    TYPE(FEVariable_), INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! it can be a scalar, defined on space or space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
  END SUBROUTINE GetHRGNParam
```