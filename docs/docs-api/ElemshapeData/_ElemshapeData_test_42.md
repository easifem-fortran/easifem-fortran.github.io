This example demonstrates how to USE the `GetSpatialGradient` method for vector variable.

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceQuadrangle_]]
- [[FEVariable_]]

## Usage

!!! note ""
    IMPORT modules and declare variables

``` fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( ElemshapeData_ ) :: obj
    TYPE( QuadraturePoint_ ) :: quad
    TYPE( ReferenceQuadrangle_ ) :: refelem
    TYPE( FEVariable_ ) :: var1, var2, var3
    INTEGER( I4B  ), PARAMETER :: nsd=2, order=2
    REAL( DFP ), PARAMETER :: xij(2,4) = RESHAPE( &
      & [-1.0,-1.0, &
      &   1.0,-1.0, &
      &   1.0, 1.0, &
      &  -1.0, 1.0], [2,4])
    INTEGER(I4B) :: ii
```

!!! note ""
    Initiate an instance of [[ReferenceQuadrangle_]]

```fortran
    refelem = ReferenceQuadrangle( nsd = nsd )
```

!!! note ""
    Initiate Gauss-Legendre Quadrature points.

```fortran
    CALL Initiate(obj=quad, refelem=refelem, order=order, &
        & quadratureType='GaussLegendre')
```

!!! note ""
    Initiate an instance of [[ElemshapeData_]] for [[ReferenceQuadrangle_]]. The code shown below ONLY initiates the Spatial shape FUNCTION DATA.

```fortran
    CALL Initiate( obj = obj, quad = quad, refelem = refelem, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
    CALL Set( obj=obj, val=xij, N=obj%N, dNdXi=obj%dNdXi )
```

!!! note "GetSpatialGradient"
    Vector variable, constant.

```fortran
    var1 = NodalVariable( ones(2, 1.0_DFP), &
        & typeFEVariableVector, &
        & typeFEVariableConstant )
    CALL GetSpatialGradient(obj=obj, lg=var2, val=var1)
    CALL Display( var2, "Vector + constant")
    CALL Display( SpatialGradient(obj, var1), "Vector + constant")
```

!!! note "GetSpatialGradient"
    Vector variable, space.

```fortran
    var1 = NodalVariable( &
        & reshape([1.0_DFP, 1.0_DFP, 1.0_DFP, 1.0_DFP, &
        & 1.0_DFP,1.0_DFP,1.0_DFP,1.0_DFP], [2,4]), &
        & typeFEVariableVector, &
        & typeFEVariableSpace )
    CALL GetSpatialGradient(obj=obj, lg=var2, val=var1)
    CALL Display( var2, "Vector + space")
    CALL Display( SpatialGradient(obj, var1), "Vector + space")
```

!!! settings "Cleanup"

```fortran
    CALL DEALLOCATE( obj )
    CALL DEALLOCATE( var1 )
    CALL DEALLOCATE( var2 )
END PROGRAM main
```
