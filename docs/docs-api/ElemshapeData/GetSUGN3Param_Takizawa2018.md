# GetSUGN3Param_Takizawa2018

```fortran
  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_1(obj, &
    & tau, val, nu, h, hmax, hmin, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: tau
      !! tau-sugn3 is a scalar and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    TYPE(FEVariable_), INTENT(IN) :: nu
      !! kinematic viscosity or diffusivity
      !! scalar and defined on quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin
      !! scalar variable, defined on space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetSUGN3Param_Takizawa2018_1
```

```fortran
  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_2(obj, tau, val, &
    & nu, h, hmax, hmin, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: tau
      !! tau-sugn3 is a scalar and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    TYPE(FEVariable_), INTENT(IN) :: nu
      !! kinematic viscosity or diffusivity
      !! scalar and defined on quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin
      !! scalar variable, defined on space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetSUGN3Param_Takizawa2018_2
```

```fortran
  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_3(obj, tau, val, &
    & nu, h, hmax, hmin, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: tau
      !! tau-sugn3 is a scalar and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    REAL( DFP ), INTENT(IN) :: nu
      !! kinematic viscosity or diffusivity
      !! scalar and defined on quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin
      !! scalar variable, defined on space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetSUGN3Param_Takizawa2018_3
```

```fortran
  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_4(obj, tau, val, &
    & nu, h, hmax, hmin, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: tau
      !! tau-sugn3 is a scalar and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    REAL( DFP ), INTENT(IN) :: nu
      !! kinematic viscosity or diffusivity
      !! scalar and defined on quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin
      !! scalar variable, defined on space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetSUGN3Param_Takizawa2018_4
```