This example demonstrates how to USE the `GetLocalGradient` method for matrix variable.

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
    Initiate an instance of [[ElemshapeData_]] for [[ReferenceQuadrangle_]]. The code shown below ONLY initiates the local shape FUNCTION DATA.

```fortran
    CALL Initiate( obj = obj, quad = quad, refelem = refelem, &
      & ContinuityType= typeH1, InterpolType = TypeLagrangeInterpolation )
    CALL Set( obj=obj, val=xij, N=obj%N, dNdXi=obj%dNdXi )
```

!!! note "GetLocalGradient"
    Vector variable, constant.

```fortran
    var1 = NodalVariable( ones(2,2, 1.0_DFP), &
        & typeFEVariableMatrix, &
        & typeFEVariableConstant )
    CALL GetLocalGradient(obj=obj, lg=var2, val=var1)
    CALL Display( var2, "matrix+ constant")
    CALL Display( LocalGradient(obj, var1), "matrix + constant")
```

!!! note "GetLocalGradient"
    Vector variable, space.

```fortran
    var1 = NodalVariable( ones(2,2, 4, 1.0_DFP), &
        & typeFEVariableMatrix, &
        & typeFEVariableSpace )
    CALL GetLocalGradient(obj=obj, lg=var2, val=var1)
    CALL Display( var2, "matrix + space")
    CALL Display( LocalGradient(obj, var1), "matrix + space")
```

!!! settings "Cleanup"

```fortran
    CALL DEALLOCATE( obj )
    CALL DEALLOCATE( var1 )
    CALL DEALLOCATE( var2 )
END PROGRAM main
```
