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

# ConvectiveMatrix example 25

!!! note ""
    This example shows how to USE the SUBROUTINE called `ConvectiveMatrix` to create a convective matrix in space domain for Triangle6 element.

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
    TYPE(ElemshapeData_) :: test, elemsdForSimplex, trial
    TYPE(QuadraturePoint_) :: quad
    TYPE(ReferenceTriangle_) :: refelem, simplexRefElem
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    REAL(DFP), ALLOCATABLE :: XiJ(:, :)
    INTEGER( I4B ), PARAMETER :: order = 2, nsd=2
```

!!! note ""
    Let us now create the physical coordinate of the line element.

```fortran
    XiJ = RESHAPE([0,0, 1,0,0,1], [2, 3])
```

!!! note ""
    Now  we create an instance of [[ReferenceTriangle_]].

```fortran
    simplexRefElem = referenceTriangle(nsd=nsd)
    call simplexRefElem%LagrangeElement(order=order, &
        & highOrderObj=refelem)
```

!!! note ""
    Here, we create the quadrature points.

```fortran
    CALL initiate( obj=quad, refelem=simplexRefElem, order=2*order-1, &
        & quadratureType='GaussLegendre' )
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]]

```fortran
    CALL initiate(obj=elemsdForSimplex, &
        & quad=quad, &
        & refelem=simplexRefElem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL initiate(obj=test, &
        & quad=quad, &
        & refelem=refelem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
        & dNdXi=elemsdForSimplex%dNdXi)
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
    ----------------------------------------------------------------------------
    -6.66667E-2   3.33333E-2   3.33333E-2  -2.50000E-2   8.33334E-3  -2.50000E-2
    -3.33333E-2   6.66667E-2  -3.33333E-2   2.50000E-2   2.50000E-2  -8.33333E-3
    0.00000E+0   0.00000E+0   0.00000E+0   0.00000E+0   0.00000E+0   0.00000E+0
    2.50000E-2  -2.50000E-2  ***********  ***********  -8.33334E-3   8.33333E-3
    -8.33333E-3  -8.33333E-3   1.66667E-2   8.33333E-3   1.66667E-2   1.66667E-2
    8.33333E-3   8.33333E-3  -1.66667E-2  -8.33333E-3  -1.66667E-2  -1.66667E-2
    ```

!! note ""
    Let us now create the following convective matrix.

$$
M(I,J) = \int_{\Omega} N^{J} \frac{\partial N^{I}}{\partial x} d{\Omega}
$$

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=0, term2=1, dim=1)
    CALL Display(mat, "mat:")
```

!!! example "Results"

    ```bash
                                        mat:
    ---------------------------------------------------------------------------
    -6.66667E-2  -3.33333E-2  0.00000E+0   2.50000E-2  -8.33333E-3   8.33333E-3
    3.33333E-2   6.66667E-2  0.00000E+0  -2.50000E-2  -8.33333E-3   8.33333E-3
    3.33333E-2  -3.33333E-2  0.00000E+0  ***********   1.66667E-2  -1.66667E-2
    -2.50000E-2   2.50000E-2  0.00000E+0  ***********   8.33333E-3  -8.33333E-3
    8.33334E-3   2.50000E-2  0.00000E+0  -8.33334E-3   1.66667E-2  -1.66667E-2
    -2.50000E-2  -8.33333E-3  0.00000E+0   8.33333E-3   1.66667E-2  -1.66667E-2
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
