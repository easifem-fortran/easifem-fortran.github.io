---
title: MassMatrix example 3 
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

# MassMatrix example 3

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

This TYPE of mass matrix is useful when $rho$ is a constant.

## Modules and classes

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(Elemshapedata_) :: test, elemsdForsimplex, trial
    TYPE(Quadraturepoint_) :: quad
    TYPE(Referenceline_) :: simplexElem, refElemFortest, refElemFortrial
    REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
    INTEGER( I4B ), PARAMETER :: orderFortest = 1, orderForTrial = 2
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
    CALL simplexElem%LagrangeElement(order=orderForTest, highOrderObj=refElemForTest)
    CALL simplexElem%LagrangeElement(order=orderForTrial, highOrderObj=refElemForTrial)
```

!!! note ""
    Here, we create the quadrature points.

```fortran
    CALL initiate( obj=quad, refelem=simplexElem, order=orderForTest+orderForTrial, &
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
    Initiate an instance of [[ElemeshapeData_]] for test function.
    
```fortran
    CALL initiate(obj=test, &
        & quad=quad, &
        & refelem=refElemForTest, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &
        & dNdXi=elemsdForSimplex%dNdXi)
```

!!! note ""
    Initiate an instance of [[ElemeshapeData_]] for trial function.
    
```fortran
    CALL initiate(obj=trial, &
        & quad=quad, &
        & refelem=refElemForTrial, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
    CALL Set(obj=trial, val=xij, N=elemsdForSimplex%N, &
        & dNdXi=elemsdForSimplex%dNdXi)
```

!!! note ""
    Let us now create the mass matrix.

```fortran
    mat=MassMatrix(test=test, trial=trial)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:          
    -------------------------
    0.33333  0.00000  0.66667
    0.00000  0.33333  0.66667
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
