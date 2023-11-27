---
title: DiffusionMatrix example 3 
author: Vikas Sharma, Ph.D.
date: 20 Nov 2021
update: 20 Nov 2021 
tags:
    - ReferenceLine
    - ReferenceLine/Initiate
    - QuadraturePoint/Initiate
    - ElemshapeData/Initiate
    - DiffusionMatrix
---

# DiffusionMatrix example 3

!!! note ""
    This example shows how to USE the SUBROUTINE called `DiffusionMatrix` to create a mass matrix in space domain.
    
Here, we want to DO the following. 

$$
\int^{}_{\Omega } \frac{\partial N^{I}}{\partial x_{i}} \frac{\partial N^{J}}{\partial x_{i}} d\Omega
$$

- Mixed FEM, test on Line2, trial on Line3

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(Elemshapedata_) :: test, elemsdForsimplex, trial
    TYPE(Quadraturepoint_) :: quad
    TYPE(Referenceline_) :: simplexElem, refElemFortest, refElemFortrial
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    REAL( DFP ), parameter :: xij(1,2) = RESHAPE([-1, 1], [1, 2])
    INTEGER( I4B ), PARAMETER :: orderFortest = 1, orderForTrial = 2, factor=2
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
    CALL Initiate( obj=quad, refelem=simplexElem, &
        & order=factor*refElemForTrial%order, &
        & quadratureType='GaussLegendre' )
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].

```fortran
    CALL Initiate(obj=elemsdForsimplex, &
        & quad=quad, &
        & refelem=simplexElem, &
        & ContinuityType=typeH1, &
        & InterpolType=typeLagrangeInterpolation)
```

!!! note ""
    Initiate an instance of [[ElemeshapeData_]] for test function.
    
```fortran
    CALL Initiate(obj=test, &
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
    CALL Initiate(obj=trial, &
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
    mat=DiffusionMatrix(test=test, trial=trial)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
                mat:             
    ------------------------------
    0.500000  -0.500000  0.000000
    -0.500000   0.500000  0.000000
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM main
```
