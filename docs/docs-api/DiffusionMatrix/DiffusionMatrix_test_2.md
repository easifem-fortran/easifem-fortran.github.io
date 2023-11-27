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
    This example shows how to USE the SUBROUTINE called `DiffusionMatrix` to create a mass matrix in space domain.
    
Here, we want to do the following. 

$$
\int^{}_{\Omega } \frac{\partial N^{I}}{\partial x_{i}} \frac{\partial N^{J}}{\partial x_{i}} d\Omega
$$

- Line3 element

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(Elemshapedata_) :: test, elemsdForsimplex
    TYPE(Quadraturepoint_) :: quad
    TYPE(Referenceline_) :: simplexElem, refElem
    REAL( DFP ), parameter :: xij(1,2) = RESHAPE([-1, 1], [1, 2])
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    INTEGER( I4B ), PARAMETER :: order = 2
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
    CALL initiate( obj=quad, refelem=refelem, order=order*refelem%order, &
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
    mat=DiffusionMatrix(test=test, trial=test)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:            
    ----------------------------
    1.16667   0.16667  -1.33333
    0.16667   1.16667  -1.33333
    -1.33333  -1.33333   2.66667
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
