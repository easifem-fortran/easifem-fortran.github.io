# GetLocalGradient

The following subroutine returns the local gradient of a scalar

$$
\frac{\partial \phi }{\partial \xi_{i} } =\phi_{I} \frac{\partial N^{I}}
{\partial \xi_{i} }
$$

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getLocalGradient_1(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local gradients of scalar
    REAL(DFP), INTENT(IN) :: val(:)
    !! Space nodal values of scalar
  END SUBROUTINE getLocalGradient_1
END INTERFACE
```

The following subroutine returns the local gradient of a vector

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_2(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! local gradient at integration points
    !! first index: space component of V
    !! second index: space component of x
    !! third index: integration point
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space nodal values of vector in `xiJ` format
    !! row index: space component
    !! col index: node number
  END SUBROUTINE getLocalGradient_2
```

The following subroutine returns the local gradient of a scalar

$$
\frac{\partial \phi }{\partial \xi_{i} } =\phi^{a}_{I} T_{a}\frac
{\partial N^{I}}{\partial \xi_{i} }
$$

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_3(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local gradient of scalar (space-time nodal)
    !! first index = space component of xi
    !! second index= integration point in space
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space-time nodal values of scalar
    !! first index = space node
    !! second index = time node
  END SUBROUTINE getLocalGradient_3
```

The following subroutine returns the local gradient of a vector

$$
\frac{\partial v_{i} }{\partial \xi_{j} } =v^{a}_{iI} T_{a}\frac
{\partial N^{I}}{\partial \xi_{j} }
$$

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_4(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! local gradient at integration points
    !! first index : space compo of V
    !! second index: space compo of Xi
    !! third index: integration point in space
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
    !! first index: space compo
    !! second index: space node
    !! third index: time node
  END SUBROUTINE getLocalGradient_4
```

The following subroutine returns the local gradient of a scalar

$$
\frac{\partial \phi }{\partial \xi_{i} } =\phi_{I} \frac{\partial N^{I}}
{\partial \xi_{i} }
$$

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_5(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local gradient of scalar
    TYPE(FEVariable_), INTENT(IN) :: val
    !! Scalar finite elememt variable
  END SUBROUTINE getLocalGradient_5
```

This subroutine returns the local gradient of a vector

$$
\frac{\partial v_{i} }{\partial \xi_{j} } =v^{a}_{iI} T_{a}\frac
{\partial N^{I}}{\partial \xi_{j} }
$$

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_6(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! local gradient of vector at integration points
    !! first index : space compo of V
    !! second index: space compo of Xi
    !! third index: integration point in space
    TYPE(FEVariable_), INTENT(IN) :: val
    !! vector fe variable
  END SUBROUTINE getLocalGradient_6
```

The following subroutine returns the local gradient of a vector

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_7(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! local gradient at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE getLocalGradient_7
```

This subroutine returns the local gradient of a vector

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_8(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! local gradient at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal values of matrix in (i,j,I,a) format
  END SUBROUTINE getLocalGradient_8
```

The following subroutine returns the local gradient of a vector

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_9(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! local gradient at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE getLocalGradient_9
```

The following subroutine returns the local gradient. This routine returns local gradient in [[FEVariable_]]. The input is also a [[FEVariable_]]. This routine can be considered as a master routine.

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_10(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! local gradient of scalar/vector/matrix at space integration points
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE getLocalGradient_10
```

The following subroutine returns the Local gradient

- This routine returns Local gradient in [[FEVariable_]] the input is also a [[FEVariable_]].
- This routine can be considered as a master routine

```fortran
  MODULE PURE SUBROUTINE getLocalGradient_11(obj, lg, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! Local gradient of scalar/vector/matrix at space-time
    !! integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space time nodal values of scalar/vector/matrix
  END SUBROUTINE getLocalGradient_11
```

