This example demonstrates how to USE the [[ElemshapeData_#GetProjectionOfdNdXt]]  `GetProjectionOfdNdXt` method.

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceTriangle_]]

## Usage

!!! note ""
    IMPORT modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( ElemshapeData_ ) :: obj
    TYPE( QuadraturePoint_ ) :: quad
    TYPE( ReferenceTriangle_ ) :: refelem
    TYPE( FEVariable_ ) :: fevar
    INTEGER( I4B  ), PARAMETER :: nsd=2, order=1
    REAL( DFP ), PARAMETER :: xij(3,3) = RESHAPE([0,0,0,1,0,0,0,1,0],[3,3])
    REAL(DFP), ALLOCATABLE :: cdNdXt(:,:)
    integer(I4B) :: ii
```

!!! note ""
    Initiate an instance of [[ReferenceTriangle_]]

```fortran
    refelem = ReferenceTriangle( nsd = nsd )
```

!!! note ""
    Initiate Gauss-Legendre Quadrature points.

```fortran
    CALL Initiate(obj=quad, refelem=refelem, order=order, &
        & quadratureType='GaussLegendre')
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]] for [[ReferenceTriangle_]]. The code shown below ONLY initiates the local shape FUNCTION DATA.

```fortran
    CALL Initiate( obj = obj, quad = quad, refelem = refelem, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
```

!!! note ""
    Now we PASS the information about the physical element. The code shown below will complete the information of the shape FUNCTION in the physical element.

- val: is the nodal coordinates of the element
- N: is the shape FUNCTION used for interpolating the nodal coordinate
- dNdXi: is the local gradient of the shape FUNCTION
- In the CASE of isoparameteric coordinate sysmtem, N and dNdXi is same as those stored inside `obj` ([[ElemshapeData_]]).

```fortran
    CALL Set( obj=obj, val=xij(1:nsd, :), N=obj%N, dNdXi=obj%dNdXi )
```

!!! note ""
    Display the content on terminal.

```fortran
    CALL Display( obj, "obj" )
```

??? example "Results"

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

!!! note ""
    Now let us CALL the GetProjectionOfdNdXt method.

```fortran
    fevar = NodalVariable([1.0_DFP, 1.0_DFP], TypeFEVariableVector, &
      & typeFEVariableConstant)
    CALL GetProjectionOfdNdXt(obj=obj, cdNdXt=cdNdXt, val=fevar)
    CALL Display(cdNdXt, "cdNdXt = ")
```

??? example "Results"

    ```
    cdNdXt =
    ---------
    -2.00000
    1.00000
    1.00000
    ```

Let us try another test.

```fortran
    fevar = NodalVariable(reshape([(1.0_DFP, ii=1,6)], [2,3]), &
      & typeFEVariableVector, &
      & typeFEVariableSpace)
    CALL GetProjectionOfdNdXt(obj=obj, cdNdXt=cdNdXt, val=fevar)
    CALL Display(cdNdXt, "cdNdXt = ")
```

??? example "Results"

    ```
    cdNdXt =
    ---------
    -2.00000
    1.00000
    1.00000
    ```

```fortran
    CALL DEALLOCATE( obj )
END PROGRAM main
```
