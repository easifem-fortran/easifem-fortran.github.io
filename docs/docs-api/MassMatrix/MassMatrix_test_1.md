---
title: MassMatrix example 1
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

# MassMatrix example 1

!!! note ""
    This example shows how to use the subroutine called `MassMatrix` to create a mass matrix in space domain.
    
Here, we want to do the following. 

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

!!! warning ""
    `rho` can be a constant, or a function of spatial coordinates, or some nonlinear function.
    
In this example, we use

- [[ReferenceLine_]] element,  
- [[QuadraturePoint_]] are `GaussLegendre`
- order of integrand is 2.

$$
\int_{\Omega } N^{I} N^{J}d\Omega
$$

This type of mass matrix is useful in cases where $rho$ is a constant.

## Modules and classes

## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(elemshapedata_) :: test, trial
    TYPE(quadraturepoint_) :: quad
    TYPE(referenceline_) :: refelem
    REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)
    integer( I4B ), parameter :: order = 2
```

!!! note ""
    Let us now create the physical coordinate of the line element.

```fortran
    XiJ = RESHAPE([-1, 1], [1, 2])
```

!!! note ""
    Now  we create an instance of [[ReferenceLine_]].

```fortran
    refelem = referenceline(nsd=1)
```

!!! note ""
    Here, we create the quadrature points.

```fortran
    CALL initiate( obj=quad, refelem=refelem, order=order, &
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
    CALL Set( obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)
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
    ------------------
    0.666667  0.333333
    0.333333  0.666667
    ```


!!! settings "Cleanup"

```fortran
END PROGRAM main
```
