This example demonstrates how initiates an instance of [[ElemshapeData_]] for [[ReferenceLine_]] element of order 2.

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]

## Usage

!!! note ""
    Import modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( ElemshapeData_ ) :: obj
    TYPE( QuadraturePoint_ ) :: quad
    TYPE( ReferenceLine_ ) :: refelem
    INTEGER( I4B  ), PARAMETER :: nsd=1, order=2
    REAL( DFP ), PARAMETER :: xij(3,2) = RESHAPE([-1,0,0,1,0,0],[3,2])
```

!!! note ""
    Create an instance of [[ReferenceLine_]] element of order 2. That is `Line3` element.

```fortran
    refelem = ReferenceLine( nsd = nsd )
```

!!! note ""
    Create an instance of [[QuadraturePoint_]]. Here we are creating Gauss-Legendre Quadrature points.

```fortran
    quad = GaussLegendreQuadrature( refelem = refelem, order = order )
```

!!! note ""
    Let us initiate an instance of [[ElemshapeData_]]. The code shown below only initiates the local shape function data.

```fortran
    CALL Initiate( obj = obj, quad = quad, refelem = refelem, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
```

!!! note ""
    Now we pass the information about the physical element. The code shown below will complete the information of the shape function in the physical element.

- val: is the nodal coordinates of the element
- N: is the shape function used for interpolating the nodal coordinate
- dNdXi: is the local gradient of the shape function
- In the case of isoparameteric coordinate sysmtem, N and dNdXi is same as those stored inside `obj` ([[ElemshapeData_]]).

!!! note ""
    Now we pass the information about the physical element. The code shown below will complete the information of the shape function in the physical element.

```fortran
    CALL Set( obj=obj, val=xij(1:nsd, :), N=obj%N, dNdXi=obj%dNdXi )
```

!!! note ""
    Display the content on the terminal.

```fortran
    CALL Display( obj, "obj" )
```

??? example "Results"

    ```txt
    SHAPE FUNCTION IN SPACE ::
    Quadrature Point

              Weights    |      Points
    -----------------------------------------
        1.0000000      -0.57735026
        1.0000000       0.57735026
    -----------------------------------------

          obj%N
    ------------------
    0.788675  0.211325
    0.211325  0.788675

    obj%dNdXi( :, :, 1 ) =
    -----------------------
          -0.500000
            0.500000
    obj%dNdXi( :, :, 2 ) =
    -----------------------
          -0.500000
            0.500000

    obj%dNdXt( :, :, 1 ) =
    -----------------------
          -0.500000
            0.500000
    obj%dNdXt( :, :, 2 ) =
    -----------------------
          -0.500000
            0.500000

    obj%Jacobian( :, :, 1 ) =
    --------------------------
            1.00000
    obj%Jacobian( :, :, 2 ) =
    --------------------------
            1.00000

    obj%Js
    -------
    1.00000
    1.00000

    obj%Thickness
    -------------
      1.00000
      1.00000

        obj%Coord
    -------------------
    -0.577350  0.577350

      obj%Normal
    ----------------
    0.00000  0.00000
    0.00000  0.00000
    0.00000  0.00000
    ```

!!! settings "Cleanup"

```fortran
    CALL Deallocate( obj )
END PROGRAM main
```
