---
sidebar_position: 4
---

# Quadrangle

## Gauss-Legendre on Biunit quadrangle

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceQuadrangle_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceQuadrangle(nsd=2_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj) , "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | -0.7746 | 1.8735E-16 | 1.66533E-16 | 1.66533E-16 | 0.7746 | 0.7746 | 0.7746 |
| x2 | -0.7746 | 2.22045E-16 | 0.7746 | -0.7746 | 1.66533E-16 | 0.7746 | -0.7746 | 1.80411E-16 | 0.7746 |
| w | 0.30864 | 0.49383 | 0.30864 | 0.49383 | 0.79012 | 0.49383 | 0.30864 | 0.49383 | 0.30864 |

</div>
</details>

:::note
:::

You can set quadratureType to following values:

```txt
GaussLegendre; GaussLegendreLobatto; GaussLegendreRadauLeft; GaussLegendreRadauRight; GaussJacobi; GaussJacobiLobatto; GaussJacobiRadauLeft; GaussJacobiRadauRight; GaussUltraspherical; GaussUltrasphericalLobatto; GaussUltrasphericalRadauLeft; GaussUltrasphericalRadauRight
```

## Gauss-Legendre points on unit quadrangle

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceQuadrangle_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceQuadrangle(nsd=2_I4B, xij=RefCoord_Quadrangle("UNIT"))
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj), "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | 0.1127 | 0.1127 | 0.1127 | 0.5 | 0.5 | 0.5 | 0.8873 | 0.8873 | 0.8873 |
| x2 | 0.1127 | 0.5 | 0.8873 | 0.1127 | 0.5 | 0.8873 | 0.1127 | 0.5 | 0.8873 |
| w | 7.71605E-02 | 0.12346 | 7.71605E-02 | 0.12346 | 0.19753 | 0.12346 | 7.71605E-02 | 0.12346 | 7.71605E-02 |

</div>
</details>

## Anisotropic order

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceQuadrangle_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceQuadrangle(nsd=2_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & p=4,  &
  & q=3,  &
  & r=1,  &
  & quadratureType1=GaussLegendre, &
  & quadratureType2=GaussLegendre, &
  & quadratureType3=GaussLegendre )
CALL display(mdencode(obj) , "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | 3.60822E-16 | 3.33067E-16 | 0.7746 | 0.7746 |
| x2 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 0.55556 | 0.55556 | 0.88889 | 0.88889 | 0.55556 | 0.55556 |

</div>
</details>
