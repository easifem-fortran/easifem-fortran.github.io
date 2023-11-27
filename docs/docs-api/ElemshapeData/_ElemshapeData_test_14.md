This example demonstrates how to USE the `GetSUPGParam` method.

In this example we want to compute the following quantity.

$$
\frac{1}{\tau^{2}}=\frac{1}{\tau_{1}^{2}}+\frac{1}{\tau_{2}^{2}}+\frac{1}{\tau_{3}^{2}}
$$

$$
\frac{1}{\tau_{1}}=\sum_{I}\vert\boldsymbol{u}\cdot\nabla N^{I}\vert
$$

$$
\frac{1}{\tau_{2}}=\frac{2}{\Delta t}
$$

$$
\frac{1}{\tau_{3}}=\frac{\nu}{(h/2)^{2}}
$$

$$
\frac{2}{h}=\sum_{I}\vert\boldsymbol{r}\cdot\nabla N^{I}\vert
$$

$$
\boldsymbol{r}=\frac{\nabla\vert\phi|}{\Vert\nabla\vert\phi\vert\Vert}
$$

## Modules and classes

- [[ElemshapeData_]]
- [[QuadraturePoint_]]
- [[ReferenceQuadrangle_]]

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
    TYPE( FEVariable_ ) :: c, nu, tau, val
    INTEGER( I4B  ), PARAMETER :: nsd=2, order=2
    REAL( DFP ), PARAMETER :: xij(2,4) = RESHAPE( &
      & [-0.5,-0.5, &
      &   0.5,-0.5, &
      &   0.5, 0.5, &
      &  -0.5, 0.5], [2,4])
    real(DFP), parameter :: v1(4) = [-1, 0, 1, 0]
    real(DFP), parameter :: v2(2,4) = reshape([-1,-1,0, 0, 1,1,0, 0],[2,4])
    integer(I4B) :: ii
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

!!! note ""
    GetUnitNormal for [[FEVariable_]]

```fortran
    c = NodalVariable([1.0_DFP, 0.0_DFP], typeFEVariableVector, &
        & typeFEVariableConstant)
    nu = NodalVariable(1.0_DFP, typeFEVariableScalar, &
        & typeFEVariableConstant)
    val = NodalVariable(v1, typeFEVariableScalar, typeFEVariableSpace )
    CALL GetSUPGParam(elemsd=obj, tau=tau, c=c, val=val, nu=nu, &
        & dt=0.0_DFP, opt=1)
    CALL Display( tau, "tau=")
```

!!! settings "Cleanup"

```fortran
    CALL DEALLOCATE( obj )
END PROGRAM main
```
