# GetHRQIParam

Stabilization and discontinuity-capturing parameters for space-time flow computations with finite element and isogeometric discretizations, Takizawa, Tezduyar, Otoguro, Computational Mechanics (2018)

```fortran
  MODULE PURE SUBROUTINE GetHRQIParam1(obj, h, val, hmax, hmin, &
    & r, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( : )
      !! h is a scalar, and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmax( : )
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmin( : )
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: r( :, : )
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetHRQIParam1
```

```fortran
  MODULE PURE SUBROUTINE GetHRQIParam2(obj, h, val, hmax, &
    & hmin, r, opt)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
      !! obj can be an instance of [[STElemshapeData_]]
    TYPE(FEVariable_), INTENT(INOUT) :: h
      !! h is a scalar, and defined on quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! val can be a vector or a scalar
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax, hmin, r
      !! h is a scalar, and defined on quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
      !! currently, opt is not used, but it may be used in future
  END SUBROUTINE GetHRQIParam2
```

```fortran
  MODULE PURE SUBROUTINE GetHRQIParam3(obj, h, val, hmax, &
    & hmin, r, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
      !! Spacetime shape function data, obj(ipt) denotes data at
      !! ipt quadrature point in time domain
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: h( :, : )
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! it can be a scalar, defined on space or space-time quadrature points
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmax( :, : )
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: hmin( :, : )
    REAL(DFP), OPTIONAL, ALLOCATABLE, INTENT(INOUT) :: r( :, :, : )
      !! scalar variable, defined on space-time quadrature points
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
  END SUBROUTINE GetHRQIParam3
```

```fortran
  MODULE PURE SUBROUTINE GetHRQIParam4(obj, h, val, hmax, &
    & hmin, r, opt)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
      !! Spacetime shape function data, obj(ipt) denotes data at
      !! ipt quadrature point in time domain
    TYPE(FEVariable_), INTENT(INOUT) :: h
      !! scalar variable, defined on space-time quadrature points
    TYPE(FEVariable_), INTENT(IN) :: val
      !! it can be a scalar, defined on space or space-time quadrature points
    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax, hmin, r
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt
  END SUBROUTINE GetHRQIParam4
```
