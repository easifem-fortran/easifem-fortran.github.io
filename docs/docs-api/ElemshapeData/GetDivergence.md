# GetDivergence

The following subroutine returns the  Divergence of a vector

```fortran
  MODULE PURE SUBROUTINE getDivergence_1(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !!  Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space nodal values of vector in `xiJ` format
    !! row index: space component
    !! col index: node number
  END SUBROUTINE getDivergence_1
```

The following subroutine returns the  Divergence of a vector

```fortran
  MODULE PURE SUBROUTINE getDivergence_2(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !!  Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
  END SUBROUTINE getDivergence_2
```

The following subroutine returns the  Divergence of a vector

```fortran
  MODULE PURE SUBROUTINE getDivergence_3(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:)
    !!  Divergence of vector at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! vector finite-element variable
  END SUBROUTINE getDivergence_3
```

The following subroutine returns the  Divergence of a matrix

```fortran
  MODULE PURE SUBROUTINE getDivergence_4(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !!  Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE getDivergence_4
```

The following subroutine returns the  Divergence of a vector

```fortran
  MODULE PURE SUBROUTINE getDivergence_5(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !!  Divergence at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal values of matrix in (i,j,I,a) format
  END SUBROUTINE getDivergence_5
```

The following subroutine returns the  Divergence of a vector

```fortran
  MODULE PURE SUBROUTINE getDivergence_6(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !!  Divergence at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space/space-time nodal values of matrix in (i,j,I) format
  END SUBROUTINE getDivergence_6
```

The following subroutine returns the  Divergence

```fortran
  MODULE PURE SUBROUTINE getDivergence_7(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !!  Divergence of scalar/vector/matrix at space integration points
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE getDivergence_7
```

The following subroutine returns the  Divergence

```fortran
  MODULE PURE SUBROUTINE getDivergence_8(obj, lg, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !!  Divergence of scalar/vector/matrix at space-time
    !! integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space time nodal values of scalar/vector/matrix
  END SUBROUTINE getDivergence_8
```