---
title: DiffusionMatrix example 4
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

# DiffusionMatrix example 4

!!! note ""
    This example shows how to use the subroutine called `DiffusionMatrix` to create a Diffusion matrix in space domain.
    
Here, we want to do the following. 

$$
\int^{}_{\Omega } \frac{\partial N^{I}}{\partial x_{i}} \frac{\partial N^{J}}{\partial x_{i}} d\Omega
$$

- Line2 element


## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]
- [[FEVariable_]]


## Usage

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(elemshapedata_) :: test, trial
    TYPE(quadraturepoint_) :: quad
    TYPE(referenceline_) :: refelem
    TYPE(FEVariable_) :: kvar
    REAL( DFP ), parameter :: xij(1,2) = RESHAPE([-1, 1], [1, 2])
    REAL(DFP), ALLOCATABLE :: mat(:, :)
    integer( I4B ), parameter :: order = 2
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
    kvar = NodalVariable(1.0_DFP, TypeFEVariableScalar, TypeFEVariableConstant)
    mat=DiffusionMatrix(test=test, trial=test, k=kvar)
    CALL Display(mat, "mat:")
```

??? example "Results"

    ```bash
            mat:        
    --------------------
    0.500000  -0.500000
    -0.500000   0.500000
    ```


!!! settings "Cleanup"

```fortran
END PROGRAM main
```
