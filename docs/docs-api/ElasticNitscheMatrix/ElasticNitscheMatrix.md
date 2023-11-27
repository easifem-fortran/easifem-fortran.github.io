---
sidebar_position: 1
date: 2023-08-05
update: 2023-08-05
status: stable
docs: done
extpkgs: none
category:
  - FEMatrix
  - FiniteElements
tags:
  - feMatrix
  - finite-elements
  - easifemBase
---

# ElasticNitscheMatrix

## Interface1

This routine computes the following

$$
\begin{aligned}\int_{\Gamma}\left(\delta{\bf u}\cdot{\bf e}\right)\left(\sigma:{\bf e}\otimes{\bf n}\right)dS & =\int_{\Gamma}\left(\delta{\bf u}\cdot{\bf e}\right)\left(\sigma:{\bf e}\otimes{\bf n}\right)dS\\ & =\int_{\Gamma}\left(\delta{\bf u}\cdot{\bf e}\right)\left\{ \lambda\left(\nabla\cdot{\bf u}\right)\left({\bf n}\cdot{\bf e}\right)+\mu\left({\bf u}\otimes\nabla\right):\left({\bf e}\otimes{\bf n}+{\bf n}\otimes{\bf e}\right)\right\} \\ & =\delta u_{iI}\left[{\bf M}\right]_{IJ}^{ij}u_{jJ} \end{aligned}
$$

where, we have used

$$
\sigma_{ij}n_{j}=\lambda\left(\frac{\partial u_{k}}{\partial x_{k}}\right)n_{i}+\mu\frac{\partial u_{i}}{\partial x_{k}}n_{k}+\mu\frac{\partial u_{k}}{\partial x_{i}}n_{k}
$$

In the following routine `lambda`, `mu`, and `evec` are the [FEVariable\_](../FEVariable/FEVariable_.md).

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Lambda, Mu, Evec) &
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    CLASS(FEVariable_), INTENT(IN) :: Lambda, Mu, Evec
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```

In the following routine `lambda`, `mu` are constant and real values, and `Evec` is [FEVariable\_](../FEVariable/FEVariable_.md).

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Lambda, Mu, Evec) &
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    CLASS(FEVariable_), INTENT(IN) :: Evec
    REAL(DFP), INTENT(IN) :: Lambda, Mu
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```

## Interface2

$$
\begin{aligned}-\int_{\Gamma_{f}}\delta u_{i}\sigma_{ij}n_{j}dS & =-\delta u_{iI}\int_{\Gamma_{f}}N^{I}\sigma_{ij}n_{j}dS\\ & =-\delta u_{iI}\int_{\Gamma_{f}}N^{I}\lambda\frac{\partial u_{j}}{\partial x_{j}}n_{i}dS\\ & -\delta u_{iI}\int_{\Gamma_{f}}N^{I}\mu\frac{\partial u_{i}}{\partial x_{k}}n_{k}dS\\ & -\delta u_{iI}\int_{\Gamma_{f}}N^{I}\mu\frac{\partial u_{j}}{\partial x_{i}}n_{j}dS \end{aligned}
$$

$$
\begin{aligned}-\int_{\Gamma_{f}}\delta u_{i}\sigma_{ij}n_{j}dS & =-\delta u_{iI}\left[\int_{\Gamma_{f}}N^{I}\lambda\frac{\partial N^{J}}{\partial x_{j}}n_{i}dS\right]u_{jJ}\\ & -\delta u_{iI}\left[\int_{\Gamma_{f}}N^{I}\mu\frac{\partial N^{I}}{\partial x_{k}}n_{k}dS\right]u_{iI}\\ & -\delta u_{iI}\left[\int_{\Gamma_{f}}N^{I}\mu\frac{\partial N^{J}}{\partial x_{i}}n_{j}dS\right]u_{jJ} \end{aligned}
$$

$$
-\int_{\Gamma_{f}}\delta u_{i}\sigma_{ij}n_{j}dS=-\delta u_{iI}\left[{\bf N}_{1}\right]_{IJ}^{ij}u_{jJ}
$$

$$
\left[{\bf N}_{1}\right]_{IJ}^{ij}=\int_{\Gamma_{f}}N^{I}\lambda\frac{\partial N^{J}}{\partial x_{j}}n_{i}dS+\delta_{ij}\int_{\Gamma_{f}}N^{I}\mu\frac{\partial N^{I}}{\partial x_{k}}n_{k}dS+\int_{\Gamma_{f}}N^{I}\mu\frac{\partial N^{J}}{\partial x_{i}}n_{j}dS
$$

In the following routine `lambda`, `mu` are instances of [FEVariable\_](../FEVariable/FEVariable_.md).

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Lambda, Mu, isNoSlip)&
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    CLASS(FEVariable_), INTENT(IN) :: Lambda, Mu
    LOGICAL(LGT), INTENT(IN) :: isNoSlip
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```

In the following routine `lambda` and `mu` are constant and real values.

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Lambda, Mu, isNoSlip)&
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    REAL(DFP), INTENT(IN) :: Lambda, Mu
    LOGICAL(LGT), INTENT(IN) :: isNoSlip
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```

## Interface3

$$
\left[{\bf N}_{n3}\right]_{IJ}^{ij}=\int_{\Gamma_{f}}\alpha N^{I}e_{i}N^{J}e_{j}
$$

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Alpha, Evec) &
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    CLASS(FEVariable_), INTENT(IN) :: Alpha, Evec
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```

```fortran
INTERFACE
  MODULE PURE FUNCTION ElasticNitscheMatrix(Test, Trial, Alpha, Evec) &
    & RESULT(Ans)
    CLASS(ElemshapeData_), INTENT(IN) :: Test, Trial
    CLASS(FEVariable_), INTENT(IN) :: Evec
    REAL(DFP), INTENT(IN) :: Alpha
    REAL(DFP), ALLOCATABLE :: Ans(:, :)
  END FUNCTION ElasticNitscheMatrix
END INTERFACE
```
