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
  - ReferenceLine
  - ReferenceLine/Initiate
  - QuadraturePoint/Initiate
  - ElemshapeData/Initiate
  - FEVariable
  - ConvectiveMatrix
---

# ConvectiveMatrix example 4

!!! note ""
    This example shows how to USE the SUBROUTINE called `ConvectiveMatrix` to create a convective matrix in space domain of Line3 element, that is order 2 [[ReferenceLine_]].

Here, we want to do the following.

$$
M(I,J) = \int_{\Omega} N^I c_k \frac{\partial N^J}{\partial x_k} d{\Omega}
$$

$$
M(I,J) = \partial u_{iI} \int_{\Omega} c_k \frac{\partial N^I}{\partial x_k} N^J d{\Omega}
$$

!!! warning ""
    $c$ is convective velocity, which can be a constant, or a function of spatial coordinates, or some nonlinear function.

In this example, convective matrix is formed for

- [[ReferenceLine_]] element
- [[QuadraturePoint_]] `GaussLegendre`
- velocity is given by nodal values

## Modules and classes

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(Elemshapedata_) :: test, elemsdForsimplex
    TYPE(Quadraturepoint_) :: quad
    TYPE(FEVariable_) :: cvar
    REAL(DFP), PARAMETER :: c(1,3) = RESHAPE([1.0,1.0,1.0],[1,3])
    TYPE(Referenceline_) :: simplexElem, refElem
    REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
    INTEGER( I4B ), PARAMETER :: order = 2
```

!!! note ""
    Let us now create the physical coordinate of the line element.

```fortran
    XiJ = RESHAPE([-1, 1], [1, 2])
```

!!! note ""
    Now  we create an instance of [[ReferenceLine_]].

```fortran
    simplexElem = referenceline(nsd=1)
    CALL simplexElem%LagrangeElement(order=order, highOrderObj=refelem)
```

!!! note ""
    Here, we create the quadrature points.

```fortran
    CALL initiate( obj=quad, refelem=simplexElem, order=2*order-1, &
        & quadratureType='GaussLegendre' )
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].

```fortran
    CALL initiate(obj=elemsdForsimplex, &
        & quad=quad, &
        & refelem=simplexElem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
```

!!! note ""
    Initiate an instance of [[ElemeshapeData_]].

```fortran
    CALL initiate(obj=test, &
        & quad=quad, &
        & refelem=refElem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
        & dNdXi=elemsdForSimplex%dNdXi)
```

!!! note ""
    Let us now create an instance of [[FEVariable_]] to wrape the nodal values of $c$. You can learn more about this at [[FEVariable_test]]

```fortran
    cvar = NodalVariable(c, typeFEVariableVector, typeFEVariableSpace)
```

!!! note ""
    Let us now create the convective matrix.

```fortran
    mat=ConvectiveMatrix(test=test, trial=test, term1=1, term2=0, c=cvar)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:
    -------------------------------
    -0.500000   0.166667  -0.666667
    -0.166667   0.500000   0.666667
     0.666667  -0.666667   0.000000
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
