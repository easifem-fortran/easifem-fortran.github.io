---
author: Vikas Sharma, Ph.D.
date: 2021-11-21
update: 2022-12-04
status: stable
docs: none
extpkgs: none
category:
  - Example
tags:
  - example
  - ReferenceTriangle
  - ReferenceTriangle/Initiate
  - QuadraturePoint/Initiate
  - ElemshapeData/Initiate
  - FEVariable/NodalVariable
  - ConvectiveMatrix
---

# ConvectiveMatrix example 24

!!! note ""
    This example shows how to USE the SUBROUTINE called `ConvectiveMatrix` to create a convective matrix in space domain for Triangle3 element.

Here, we want to DO the following.

$$
M(I,J) = \int_{\Omega} N^I \frac{\partial N^J}{\partial x} d{\Omega}
$$

$$
M(I,J) = \int_{\Omega} \frac{\partial N^I}{\partial x} N^J d{\Omega}
$$

$$
M(I,J) = \int_{\Omega} N^I \frac{\partial N^J}{\partial y} d{\Omega}
$$

$$
M(I,J) =  \int_{\Omega} \frac{\partial N^I}{\partial y} N^J d{\Omega}
$$

$$
M(I,J) =  \int_{\Omega} N^I \frac{\partial N^J}{\partial z} d{\Omega}
$$

$$
M(I,J) =  \int_{\Omega} \frac{\partial N^I}{\partial z} N^J d{\Omega}
$$

In this example, convective matrix is formed for

- [[ReferenceTriangle_]] element
- [[QuadraturePoint_]] `GaussLegendre`

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceTriangle_]]
- [[FEVariable_]]

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(ElemshapeData_) :: test, trial
    TYPE(QuadraturePoint_) :: quad
    TYPE(ReferenceTriangle_) :: refelem
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    REAL(DFP), ALLOCATABLE :: XiJ(:, :)
    INTEGER( I4B ), PARAMETER :: order = 1, nsd=2
```

!!! note ""
    Let us now create the physical coordinate of the line element.

```fortran
    XiJ = RESHAPE([0,0, 1,0,0,1], [2, 3])
```

!!! note ""
    Now  we create an instance of [[ReferenceTriangle_]].

```fortran
    refelem = referenceTriangle(nsd=nsd)
```

!!! note ""
    Here, we create the quadrature points.

```fortran
    CALL initiate( obj=quad, refelem=refelem, order=2*order-1, &
        & quadratureType='GaussLegendre' )
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]]

```fortran
    CALL initiate(obj=test, &
        & quad=quad, &
        & refelem=refelem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL Set(obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)
```

!! note ""
    Let us now create the following convective matrix.

$$
M(I,J) = \int_{\Omega} N^{J} \frac{\partial N^{I}}{\partial x} d{\Omega}
$$

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=1, term2=0, dim=1)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:
    -------------------------------
    -0.166667  -0.166667  -0.166667
    0.166667   0.166667   0.166667
    0.000000   0.000000   0.000000
    ```

!! note ""
    Let us now create the following convective matrix.

$$
M(I,J) = \int_{\Omega} N^{J} \frac{\partial N^{I}}{\partial y} d{\Omega}
$$

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=1, term2=0, dim=2)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:
    -------------------------------
    -0.166667  -0.166667  -0.166667
    0.000000   0.000000   0.000000
    0.166667   0.166667   0.166667
    ```

!! note ""
    Let us now create the following convective matrix.

$$
M(I,J) = \int_{\Omega} N^{I} \frac{\partial N^{J}}{\partial x} d{\Omega}
$$

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=0, term2=1, dim=1)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:
    -----------------------------
    -0.166667  0.166667  0.000000
    -0.166667  0.166667  0.000000
    -0.166667  0.166667  0.000000
    ```

!! note ""
    Let us now create the following convective matrix.

$$
M(I,J) = \int_{\Omega} N^{I} \frac{\partial N^{J}}{\partial y} d{\Omega}
$$

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=0, term2=1, dim=2)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:
    -----------------------------
    -0.166667  0.000000  0.166667
    -0.166667  0.000000  0.166667
    -0.166667  0.000000  0.166667
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
