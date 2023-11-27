# GetInterpolation

This subroutine performs interpolation of a scalar from its spatial nodal values.

$$
u=u_{I}N^{I}
$$

```fortran
  MODULE PURE SUBROUTINE getInterpolation_1(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:)
    !! Interpolation value of of scalar
    REAL(DFP), INTENT(IN) :: val(:)
    !! spatial nodal values of scalar
  END SUBROUTINE getInterpolation_1
```

The subroutine performs interpolation of a scalar from its space-time nodal values.

$$
u=u^{a}_{I}N^{I}T_{a}
$$

The resultant represents the interpolation value of `val` at spatial-quadrature points

```fortran
  MODULE PURE SUBROUTINE getInterpolation_2(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:)
    !! Interpolation of scalar
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space-time nodal values of scalar
  END SUBROUTINE getInterpolation_2
```

The following subroutine performs interpolation of a scalar from its space-time nodal values.

$$
u=u^{a}_{I}N^{I}T_{a}
$$

The resultant represents the interpolation value of `val` at spatial-temporal quadrature points

```fortran
  MODULE PURE SUBROUTINE getInterpolation_3(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:,:)
    !! space-time Interpolation of scalar
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space-time nodal values of scalar
  END SUBROUTINE getInterpolation_3
```

The following rotuine returns the interpolation of scalar variable. The scalar variable can be

- constant
- spatial nodal values
- spatial quadrature values
- space-time nodal values

This routine calls [[../configuration/interpolation]] function from the same module.

```fortran
  MODULE PURE SUBROUTINE scalar_getInterpolation_4(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:)
    !! interpolation of scalar
    TYPE(FEVariable_), INTENT(IN) :: val
    !! Scalar FE variable
  END SUBROUTINE scalar_getInterpolation_4
```

The following subroutine performs interpolation of a scalar [[FEVariable_]]. The FE Variable can be a

- constant
- spatial nodal values
- spatial quadrature values
- space-time nodal values

$$
u=u^{a}_{I}N^{I}T_{a}
$$

The resultant represents the interpolation value of `val` at spatial-quadrature points.

```fortran
  MODULE PURE SUBROUTINE scalar_getInterpolation_5(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :)
    !! space-time interpolation of scalar
    TYPE(FEVariable_), INTENT(IN) :: val
    !! scalar FE variable
  END SUBROUTINE scalar_getInterpolation_5
```

The following subroutine performs interpolation of a vector from its spatial nodal values.

$$
u_{i}=u_{iI}N^{I}
$$

```fortran
  MODULE PURE SUBROUTINE vector_getInterpolation_1(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :)
    !! interpolation of vector
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! nodal values of vector in `xiJ` format
  END SUBROUTINE vector_getInterpolation_1
```

This subroutine performs interpolation of a vector from its space-time nodal values

$$
u_{i}=u^{a}_{iI}N^{I}T_{a}
$$

```fortran
  MODULE PURE SUBROUTINE vector_getInterpolation_2(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:, :)
    !!
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
  END SUBROUTINE vector_getInterpolation_2
```

This subroutine performs interpolation of a vector from its space-time nodal values

$$
u_{i}=u^{a}_{iI}N^{I}T_{a}
$$

```fortran
  MODULE PURE SUBROUTINE vector_getInterpolation_3(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:, :,:)
    !!
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
  END SUBROUTINE vector_getInterpolation_3
```

The following routine returns the interpolation of vector variable. The vector variable can be+

- constant
- spatial nodal values
- spatial quadrature values
- space-time nodal values

NOTE This routine calls [[../configuration/interpolation]] function from the same module.

```fortran
  MODULE PURE SUBROUTINE vector_getInterpolation_4(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :)
    !! interpolation of vector
    TYPE(FEVariable_), INTENT(IN) :: val
    !! vector FEvariable
  END SUBROUTINE vector_getInterpolation_4
```

The following routine returns the interpolation of vector variable. The vector variable can be+

- constant
- spatial nodal values
- spatial quadrature values
- space-time nodal values

NOTE This routine calls [[#Interpolation]] function from the same module.

```fortran
  MODULE PURE SUBROUTINE vector_getInterpolation_5(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :, :)
    !! space-time interpolation of vector
    TYPE(FEVariable_), INTENT(IN) :: val
    !! vector FEvariable
  END SUBROUTINE vector_getInterpolation_5
```

The following subroutine performs interpolation of matrix

```fortran
  MODULE PURE SUBROUTINE matrix_getInterpolation_1(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :, :)
    !! interpolation of matrix
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! nodal value of matrix
  END SUBROUTINE matrix_getInterpolation_1
```

The following subroutine performs interpolation of matrix from its space-time nodal values

```fortran
  MODULE PURE SUBROUTINE matrix_getInterpolation_2(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:, :, :)
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal value of matrix
  END SUBROUTINE matrix_getInterpolation_2
```

The following subroutine performs interpolation of matrix from its space-time nodal values

```fortran
  MODULE PURE SUBROUTINE matrix_getInterpolation_3(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: interpol(:, :, :,:)
    !! space-time interpolation
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal value of matrix
  END SUBROUTINE matrix_getInterpolation_3
```

The following subroutine performs interpolation of matrix FEVariable

```fortran
  MODULE PURE SUBROUTINE matrix_getInterpolation_4(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :, :)
    !! interpolation of matrix
    TYPE(FEVariable_), INTENT(IN) :: val
    !! matrix fe variable
  END SUBROUTINE matrix_getInterpolation_4
```

```fortran
  MODULE PURE SUBROUTINE matrix_getInterpolation_5(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: interpol(:, :, :, :)
    !! space-time interpolation of matrix
    TYPE(FEVariable_), INTENT(IN) :: val
    !! matrix fe variable
  END SUBROUTINE matrix_getInterpolation_5
```

- Returns the interpolation of a [[FEVariable_]]
- The result is returned in interpol
- interpol is a FEVariable
- The rank of interpol is same as the rank of val
- interpol is defined on Quadrature, that is, interpol is QuadratureVariable
- The val can have following ranks; scalar, vector, matrix
- the val can be defined on quadrature (do nothing) or nodal (interpol)
- The `vartype` of val can be constant, space, time, spacetime

```fortran
  MODULE PURE SUBROUTINE master_getInterpolation_1(obj, interpol, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: interpol
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE master_getInterpolation_1
```

The following routine returns the interpolation of a [[fevariable_]]

- The result is returned in interpol
- interpol is a FEVariable
- The rank of interpol is same as the rank of val
- interpol is defined on Quadrature, that is, interpol is QuadratureVariable
- The val can have following ranks; scalar, vector, matrix
- the val can be defined on quadrature (do nothing) or nodal (interpol)
- The `vartype` of val can be constant, space, time, spacetime

```fortran
  MODULE PURE SUBROUTINE master_getInterpolation_2(obj, interpol, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: interpol
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE master_getInterpolation_2
```

To learn more these methods check out the following pages.

- [[_ElemshapeData_test_21]] Use of getInterpolation, interpolation of [[FEVariable_]] in the form of [[FEVariable_]] for scalars
- [[_ElemshapeData_test_22]] Use of getInterpolation, interpolation of [[FEVariable_]] in the form of [[FEVariable_]] for vectors
- [[_ElemshapeData_test_23]] Use of getInterpolation, interpolation of [[FEVariable_]] in the form of [[FEVariable_]] for matrix.
