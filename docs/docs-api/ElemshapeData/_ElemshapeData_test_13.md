This example demonstrates how to USE the `GetUnitNormal` method.

In this example we want to compute the following quantity.

$$
\nabla \vert phi \vert / \vert (\nabla \vert phi \vert) \vert
$$

$$
\nabla \Vert mathbf{v}  \Vert / \Vert (\nabla \Vert mathbf{v} \Vert) \Vert
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
    TYPE( FEVariable_ ) :: fevar
    INTEGER( I4B  ), PARAMETER :: nsd=2, order=2
    REAL( DFP ), PARAMETER :: xij(2,4) = RESHAPE( &
      & [-0.5,-0.5, &
      &   0.5,-0.5, &
      &   0.5, 0.5, &
      &  -0.5, 0.5], [2,4])
    real(DFP), parameter :: v1(4) = [-1, 0, 1, 0]
    real(DFP), parameter :: v2(2,4) = reshape([-1,-1,0, 0, 1,1,0, 0],[2,4])
    REAL(DFP), ALLOCATABLE :: r(:,:)
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
```

!!! note ""
    Now we PASS the information about the physical element. The code shown below will complete the information of the shape FUNCTION in the physical element.

- val: is the nodal coordinates of the element
- N: is the shape FUNCTION used for interpolating the nodal coordinate
- dNdXi: is the local gradient of the shape FUNCTION
- In the CASE of isoparameteric coordinate sysmtem, N and dNdXi is same as those stored inside `obj` ([[ElemshapeData_]]).

```fortran
    CALL Set( obj=obj, val=xij, N=obj%N, dNdXi=obj%dNdXi )
```

!!! note ""
    Now let us CALL the GetUnitNormal method.

```fortran
    CALL GetUnitNormal(obj=obj, r=r, val=v1)
    CALL Display(r, "r = ")
```

??? example "Results"


!!! note ""
    Getnormal for vector

```fortran
    CALL GetUnitNormal(obj=obj, r=r, val=v2)
    CALL Display(r, "r = ")
```

!!! note ""
    GetUnitNormal for [[FEVariable_]]

```fortran
    fevar = NodalVariable(v1, typeFEVariableScalar, typeFEVariableSpace)
    CALL GetUnitNormal(obj=obj, r=r, val=fevar)
    CALL Display(r, "r=")
```

!!! note ""
    GetUnitNormal for [[FEVariable_]]

```fortran
    fevar = NodalVariable(v2, typeFEVariableVector, typeFEVariableSpace)
    CALL GetUnitNormal(obj=obj, r=r, val=fevar)
    CALL Display(r, "r=")
```


!!! settings "Cleanup"


```fortran
    CALL DEALLOCATE( obj )
END PROGRAM main
```
