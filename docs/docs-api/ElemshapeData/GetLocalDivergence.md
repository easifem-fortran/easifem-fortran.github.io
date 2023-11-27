# GetLocalDivergence

The following subroutine returns the local Divergence of a vector.

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !! local Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space nodal values of vector in `xiJ` format
    !! row index: space component
    !! col index: node number
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence of a vector

$$
\frac{\partial v_{i} }{\partial \xi_{j} } =v^{a}_{iI} T_{a}\frac
{\partial N^{I}}{\partial \xi_{j} }
$$

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !! local Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
    !! first index: space compo
    !! second index: space node
    !! third index: time node
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence of a vector

$$
\frac{\partial v_{i} }{\partial \xi_{j} } =v^{a}_{iI} T_{a}\frac
{\partial N^{I}}{\partial \xi_{j} }
$$

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !! local Divergence of vector at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! vector finite-element variable
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence of a matrix

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence of a vector.

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal values of matrix in (i,j,I,a) format
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence of a vector.

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! local Divergence at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space/space-time nodal values of matrix in (i,j,I) format
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the local Divergence. This routine returns local Divergence in [[FEVariable_]]. The input is also a [[FEVariable_]]. This routine can be considered as a master routine.

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! local Divergence of scalar/vector/matrix at space integration points
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE GetLocalDivergence
```

The following subroutine returns the Local Divergence.

```fortran
  MODULE PURE SUBROUTINE GetLocalDivergence(obj, lg, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! Local Divergence of scalar/vector/matrix at space-time
    !! integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space time nodal values of scalar/vector/matrix
  END SUBROUTINE GetLocalDivergence
```


