---
title: STElemshapeData example 1
author: Vikas Sharma, Ph. D.
date: 7 Nov 2021
update: 15 Nov 2021
tags:
  - ReferenceLine
  - ReferenceElement/LagrangeElement
  - ReferenceElement/Set
  - ReferenceLine/Set
---

# STElemshapeData example 1

## Modules and classes

- [[STElemshapeData_]]

## Usage

!!! note ""
    IMPORT modules and declare variables.

``` fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE(STElemshapeData_), ALLOCATABLE :: obj(:)
    TYPE(ElemshapeData_) :: time_elemsd
    TYPE(Quadraturepoint_) :: quad
    CLASS(ReferenceElement_), POINTER :: refelem => NULL()
    CLASS(ReferenceElement_), POINTER :: highOrderElem => NULL()
    INTEGER(I4B) :: ii, NNT
    INTEGER(I4B), PARAMETER :: nsd=2, nns=3
    REAL(DFP) :: tiJ(1, 2)
    REAL(DFP), ALLOCATABLE :: xiJ(:, :)
    ! spatial nodal coordinates
    REAL(DFP), ALLOCATABLE :: xiJa(:, :, :)
    ! spatial-temporal nodal coordinates
```

!!! note ""
    First, we initiate a [[ReferenceLine_]] element for time domain. Note that `nsd` should be 1 when making reference element for time domain.

```fortran
    ALLOCATE (ReferenceLine_ :: refelem)
    refelem = ReferenceLine(nsd=1)
    CALL Display(refelem, "ReferenceElement :: ")
```

??? example "Results"

    ```txt
    #ReferenceElement ::
    ElemType : Line2
    XiDimension :: 1
    NSD : 1
    Order : 1
    EntityCounts(0) : 2
    EntityCounts(1) : 1
    EntityCounts(2) : 0
    EntityCounts(3) : 0
    Node( 1 ) :
    ------------
    -1.00000
    0.00000
    0.00000
    Node( 2 ) :
    ------------
    1.00000
    0.00000
    0.00000
    #Topology( 1 ) :
    ElemType : Point1
    XiDim : 0
    Nptrs :
    --------
    1
    #Topology( 2 ) :
    ElemType : Point1
    XiDim : 0
    Nptrs :
    --------
    2
    #Topology( 3 ) :
    ElemType : Line2
    XiDim : 1
    Nptrs :
    --------
    1
    2
    ```

!!! note ""
    Higher order Lagrange element can be obtained, `NNT` denotes number of nodes in time element. For line-element order will be equal to `NNT-1`.

```fortran
    NNT = 2
    ALLOCATE (ReferenceLine_ :: highOrderElem)
    CALL refelem%LagrangeElement(order=NNT - 1, &
      & HighOrderObj=highOrderElem)
```

!!! note ""
    Generate Gauss-Legendre quadrature points on time element.

```fortran
    CALL Initiate(obj=quad, refelem=refelem, order=refelem%order, &
      & quadratureType="GaussLegendre" )
    CALL display(quad, 'quad for time element :: ')
```

??? example "Results"

    ```txt
    Quad for time element ::!

            Weights    |      Points
    -----------------------------------------
        2.0000000        0.0000000
    -----------------------------------------
    ```

!!! note ""
    Setting shape FUNCTION for time. This will setup following quantities.

    - $T$
    - $\frac{dT}{d\theta}$
    - $J_t$
    - $W_{t}$
    - $\theta$
    - `tiJ` it denotes the nodal values of time element.

```fortran
    tiJ(1, :) = [-1.0, 1.0]
    CALL initiate( &
      & obj=time_elemsd, quad=quad, refelem=refelem, &
      & ContinuityType=typeH1, InterpolType=TypeLagrangeInterpolation)
    CALL Deallocate(quad)
    CALL Set(obj=time_elemsd, val=tiJ, N=time_elemsd%N, &
        & dNdXi=time_elemsd%dNdXi)
    CALL Display(time_elemsd, "time_elemsd :")
```

??? example "Results"

    ```txt
    time_elemsd :

    SHAPE FUNCTION IN SPACE ::

    Quadrature Point

            Weights    |      Points
    -----------------------------------------
        2.0000000        0.0000000
    -----------------------------------------

    obj%N
    --------
    0.500000
    0.500000

    obj%dNdXi( :, :, 1 ) =
    -----------------------
        -0.500000
            0.500000

    obj%dNdXt( :, :, 1 ) =
    -----------------------
        -0.500000
            0.500000

    obj%Jacobian( :, :, 1 ) =
    --------------------------
            1.00000

    obj%Js
    -------
    1.00000

    obj%Thickness
    -------------
    1.00000

    obj%Coord
    ---------
    0.00000

    obj%Normal
    ----------
    0.00000
    0.00000
    0.00000
    ```

!!! note ""
    Now we initiate an instance for storing space-time shape FUNCTION DATA, that is [[STElemshapeData_]] object. This will extract time-shape DATA info from `elemsd` and put it inside

    - `obj(i)%T`
    - `obj(i)%dTdTheta`
    - `obj(i)%Jt`
    - `obj(i)%Wt`
    - `obj(i)%Theta`

```fortran
    CALL Initiate(obj=obj, elemsd=time_elemsd)
```

!!! note ""
    Generating shape functions for space-elements. Here, we are selecting a triangular element

```fortran
    ALLOCATE (ReferenceTriangle_ :: refelem)
    refelem = ReferenceTriangle(nsd=nsd)
    CALL Initiate(obj=quad, refelem=refelem, order=1, quadratureType='GaussLegendre' )
    CALL Display(quad, "quad in triangle: ")
```

??? example "Results"

    ```txt
    Quad in triangle:

            Weights    |      Points
    -----------------------------------------
    0.50000000       0.33333334     0.33333334
    -----------------------------------------
    ```


!!! note ""
    Setting local DATA of shape FUNCTION in space. This will set

    - N
    - dNdXi
    - Ws
    - Quad

```fortran
    DO ii = 1, SIZE(obj)
      CALL initiate( &
        & obj=obj(ii), quad=quad, refelem=refelem, &
        & ContinuityType=typeH1, InterpolType=TypeLagrangeInterpolation)
    END DO
```

!!! note ""
    Setting the remaining DATA in obj. Here, `xiJa` are the space-time nodal coordinates.

```fortran
    ALLOCATE (xiJ(nsd, nns), xiJa(nsd, nns, nnt))
    xiJ = RESHAPE([0, 0, 1, 0, 0, 1], [nsd, nns])
    DO ii = 1, nnt; xiJa(:, :, ii) = xiJ; END DO
    DO ii = 1, SIZE(obj)
        CALL set(obj=obj(ii), val=xiJa, N=obj(ii)%N, &
            & dNdXi=obj(ii)%dNdXi, T=obj(ii)%T )
        CALL Display(obj(ii), "obj("//tostring(ii)//')=' )
    END DO
```

??? example "Results"

    ```txt
    SHAPE FUNCTION IN SPACE ::

    Quadrature Point

            Weights    |      Points
    -----------------------------------------
    0.50000000       0.33333334     0.33333334
    -----------------------------------------

    obj%N
    --------
    0.333333
    0.333333
    0.333333

    obj%dNdXi( :, :, 1 ) =
    -----------------------
    -1.00000  -1.00000
    1.00000   0.00000
    0.00000   1.00000

    obj%dNdXt( :, :, 1 ) =
    -----------------------
    -1.00000  -1.00000
    1.00000   0.00000
    0.00000   1.00000

    obj%Jacobian( :, :, 1 ) =
    --------------------------
        1.00000  0.00000
        0.00000  1.00000

    obj%Js
    -------
    1.00000

    obj%Thickness
    -------------
    1.00000

    obj%Coord
    ---------
    0.333333
    0.333333

    obj%Normal
    ----------
    0.00000
    0.00000
    0.00000

    SHAPE FUNCTION IN TIME ::

    obj%Jt :: 1.00000
    obj%Theta :: 0.00000
    obj%Wt :: 2.00000

    obj%T
    --------
    0.500000
    0.500000

    obj%dTdTheta
    ------------
    -0.500000
    0.500000

    obj%dNTdt( :, :, 1 ) =
    -----------------------
    -0.166667  0.166667
    -0.166667  0.166667
    -0.166667  0.166667

    obj%dNTdXt( :, :, 1, 1 ) =
    ---------------------------
    -0.500000  -0.500000
        0.500000   0.500000
        0.000000   0.000000
    obj%dNTdXt( :, :, 2, 1 ) =
    ---------------------------
    -0.500000  -0.500000
        0.000000   0.000000
        0.500000   0.500000
    ```

!!! settings "Cleanup"

```fortran
END PROGRAM
```
