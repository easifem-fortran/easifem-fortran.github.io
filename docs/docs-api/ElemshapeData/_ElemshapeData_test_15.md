This example demonstrates how initiates an instance of [[ElemshapeData_]] for [[ReferenceLine_]] element, which is a facet element of a [[ReferenceQuadrangle_]].

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceLine_]]
- [[ReferenceQuadrangle_]]

## Usage

!!! note ""
    Import modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( ElemshapeData_ ) :: elemsd_line, elemsd_quad
    TYPE( QuadraturePoint_ ) :: quad
    TYPE( ReferenceLine_ ) :: refelem_line
    TYPE( ReferenceQuadrangle_ ) :: refelem_quad
    INTEGER( I4B  ), PARAMETER :: nsd=2, order=2
    REAL( DFP ), PARAMETER :: node_line(3,2) = RESHAPE([-1,0,0,1,0,0],[3,2])
    REAL( DFP ), PARAMETER :: node_quad(3,4) = RESHAPE([-1,-1,0,1,-1,0, &
      & 1,1,0, -1,1,0],[3,4])
```

!!! note ""
    Create an instance of [[ReferenceLine_]] [[ReferenceQuadrangle_]] element.

```fortran
    refelem_line = ReferenceLine( nsd = nsd )
    refelem_quad = ReferenceQuadrangle( nsd = nsd )
```

!!! note ""
    Create an instance of [[QuadraturePoint_]] on the [[ReferenceLine_]]. Here we are creating Gauss-Legendre Quadrature points.

```fortran
    quad = GaussLegendreQuadrature( refelem = refelem_line, order = order )
```

!!! note ""
    Let us initiate an instance of [[ElemshapeData_]]. The code shown below only initiates the local shape function data.

```fortran
    CALL Initiate( obj = elemsd_line, quad = quad, refelem = refelem_line, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
    CALL Initiate( obj = elemsd_quad, quad = quad, refelem = refelem_quad, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
```

!!! note ""
    Now we pass the information about the physical element. The code shown below will complete the information of the shape function in the physical element.

- `val`: is the nodal coordinates of the element
- `N`: is the shape function used for interpolating the nodal coordinate
- `dNdXi`: is the local gradient of the shape function
- In the case of isoparameteric coordinate sysmtem, `N` and `dNdXi` is same as those stored inside `obj` ([[ElemshapeData_]]).

```fortran
    CALL Set( obj=elemsd_line, val=node_line, N=elemsd_line%N, dNdXi=elemsd_line%dNdXi )
    CALL Set( obj=elemsd_quad, val=node_quad, N=elemsd_quad%N, dNdXi=elemsd_quad%dNdXi )
```

!!! note ""
    Display the content on the terminal.

```fortran
    CALL Display( elemsd_line, "elemsd_line: " )
```

??? example "Results"

    ```txt
      elemsd_line:

      # SHAPE FUNCTION IN SPACE:

      # Quadrature Point:

                  Weights    |      Points
      -----------------------------------------
          1.0000000      -0.57735026
          1.0000000       0.57735026
      -----------------------------------------

          # obj%N:
      ------------------
      0.788675  0.211325
      0.211325  0.788675

      # obj%dNdXi:( :, :, 1 ) =
      --------------------------
              -0.500000
              0.500000
      # obj%dNdXi:( :, :, 2 ) =
      --------------------------
              -0.500000
              0.500000

      # obj%dNdXt:( :, :, 1 ) =
      --------------------------
          0.00000  0.00000
          0.00000  0.00000
      # obj%dNdXt:( :, :, 2 ) =
      --------------------------
          0.00000  0.00000
          0.00000  0.00000

      # obj%Jacobian:( :, :, 1 ) =
      -----------------------------
                  1.00000
                  0.00000
                  0.00000
      # obj%Jacobian:( :, :, 2 ) =
      -----------------------------
                  1.00000
                  0.00000
                  0.00000

      # obj%Js:
      ----------
      1.00000
      1.00000

      # obj%Thickness:
      -----------------
          1.00000
          1.00000

          # obj%Coord:
      --------------------
      -0.577350   0.577350
      0.000000   0.000000
      0.000000   0.000000

      # obj%Normal:
      ----------------
      0.00000  0.00000
      0.00000  0.00000
      0.00000  0.00000
    ```

As you can see the value of $\frac{dN}{dXt}$ is zero, we want to calculate these values using cell element.


!!! settings "Cleanup"

```fortran
    CALL Deallocate( elemsd_line )
    CALL Deallocate( elemsd_quad )
    CALL Deallocate( quad )
END PROGRAM main
```
