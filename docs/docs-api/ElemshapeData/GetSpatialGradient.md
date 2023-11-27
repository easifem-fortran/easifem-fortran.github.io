# GetSpatialGradient

The following subroutine returns the spatial gradient of scalar

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! Spatial gradient of scalar
    REAL(DFP), INTENT(IN) :: val(:)
    !! Nodal values of scalar
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of vector

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! spatial gradient of vector at integration points
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! nodal values of vector in `xiJ` format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of scalar

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! Spatial gradient of scalar
    REAL(DFP), INTENT(IN) :: val(:, :)
    !! space-time Nodal values of scalar
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of scalar

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! spatial gradient of vector at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space-time nodal values of vector in `xiJa` format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of scalar

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :)
    !! Spatial gradient of scalar
    TYPE(FEVariable_), INTENT(IN) :: val
    !! Nodal values of scalar
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of scalar

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :)
    !! spatial gradient of vector at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space-time nodal values of vector in `xiJa` format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of a matrix

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! spatial gradient at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :)
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of a matrix

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! spatial gradient at integration points
    REAL(DFP), INTENT(IN) :: val(:, :, :, :)
    !! space-time nodal values of matrix in (i,j,I,a) format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient of a vector

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: lg(:, :, :, :)
    !! spatial gradient at integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space nodal values of matrix in (i,j,I) format
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient. This routine returns spatial gradient in [[FEVariable_]]. The input is also a [[FEVariable_]]. This routine can be considered as a master routine.

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(ElemshapeData_), INTENT(IN) :: obj
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! spatial gradient of scalar/vector/matrix at space integration points
    TYPE(FEVariable_), INTENT(IN) :: val
  END SUBROUTINE GetSpatialGradient
```

The following subroutine returns the spatial gradient. This routine returns spatial gradient in [[FEVariable_]]. The input is also a [[FEVariable_]]. This routine can be considered as a master routine.

```fortran
  MODULE PURE SUBROUTINE GetSpatialGradient(obj, lg, val)
    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)
    TYPE(FEVariable_), INTENT(INOUT) :: lg
    !! spatial gradient of scalar/vector/matrix at space-time
    !! integration points
    TYPE(FEVariable_), INTENT(IN) :: val
    !! space time nodal values of scalar/vector/matrix
  END SUBROUTINE GetSpatialGradient
```


