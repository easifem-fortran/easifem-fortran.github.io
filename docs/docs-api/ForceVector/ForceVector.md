---
sidebar_position: 1
date: 2023-08-05
update: 2023-08-05
status: stable
docs: done
extpkgs: none
category:
  - Vectors
  - Force
  - FEVector
tags:
  - vectors
  - feVector
  - easifemBase
  - finite-element-vector
---

# ForceVector

## ForceVector1

Consider the following integral

$$
F_{I}=\int_{\Omega}N^{I}d\Omega
$$

Fortran interface:

```fortran
  MODULE PURE FUNCTION ForceVector(test) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION ForceVector
```

## ForceVector2

$$
F_{I}=\int_{\Omega}\rho N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c, crank) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c
    TYPE(FEVariableScalar_), INTENT( IN ) :: crank
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION ForceVector
```

## ForceVector3

$$
F(i,I)=\int_{\Omega}v_{i}N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c, crank) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c
    TYPE(FEVariableVector_), INTENT( IN ) :: crank
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION ForceVector
```

## ForceVector4

$$
F(i,j,I)=\int_{\Omega}k_{ij}N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c, crank) RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c
    TYPE(FEVariableMatrix_), INTENT( IN ) :: crank
    REAL(DFP), ALLOCATABLE :: ans(:, :, :)
  END FUNCTION ForceVector
```

## ForceVector5

$$
F_{I}=\int_{\Omega}\rho_{1}\rho_{2}N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c1, c1rank, c2, c2rank) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c1
    TYPE(FEVariable_), INTENT( IN ) :: c2
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    TYPE(FEVariableScalar_), INTENT( IN ) :: c2rank
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION ForceVector
```

## ForceVector6

$$
F(i,I)=\int_{\Omega}\rho v_{i}N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c1, c1rank, c2, c2rank) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c1
    TYPE(FEVariable_), INTENT( IN ) :: c2
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    TYPE(FEVariableVector_), INTENT( IN ) :: c2rank
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION ForceVector
```

## ForceVector7

$$
F(i,j,I)=\int_{\Omega}\rho k_{ij}N^{I}d\Omega
$$

```fortran
  MODULE PURE FUNCTION ForceVector(test, c1, c1rank, c2, c2rank) &
    & RESULT(ans)
    CLASS(ElemshapeData_), INTENT(IN) :: test
    TYPE(FEVariable_), INTENT( IN ) :: c1
    TYPE(FEVariable_), INTENT( IN ) :: c2
    TYPE(FEVariableScalar_), INTENT( IN ) :: c1rank
    TYPE(FEVariableMatrix_), INTENT( IN ) :: c2rank
    REAL(DFP), ALLOCATABLE :: ans(:, :, :)
  END FUNCTION ForceVector
```
