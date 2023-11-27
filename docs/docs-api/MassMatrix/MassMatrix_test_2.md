---
title: MassMatrix example 2
author: Vikas Sharma, Ph.D.
date: 20 Nov 2021
update: 20 Nov 2021 
tags:
    - ReferenceLine
    - ReferenceLine/Initiate
    - QuadraturePoint/Initiate
    - ElemshapeData/Initiate
    - MassMatrix
---

# MassMatrix example 2

!!! note ""
    This example shows how to USE the SUBROUTINE called `MassMatrix` to create a mass matrix in space domain.
    
Here, we want to DO the following. 

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

!!! warning ""
    `rho` can be a constant, or a FUNCTION of spatial coordinates, or some nonlinear FUNCTION.
    
In this example, following mass matrix is formed for [[ReferenceLine_]] element,  [[QuadraturePoint_]] are `GaussLegendre`.

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

This TYPE of mass matrix is useful in cases WHERE $rho$ is a constant.

## Modules and classes

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(Elemshapedata_) :: test, elemsdForsimplex
    TYPE(Quadraturepoint_) :: quad
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
    CALL initiate( obj=quad, refelem=refelem, order=order*2, &
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
    Let us now create the mass matrix.

```fortran
    mat=MassMatrix(test=test, trial=test)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:           
    ---------------------------
    0.26667  -0.06667  0.13333
    -0.06667   0.26667  0.13333
    0.13333   0.13333  1.06667
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
