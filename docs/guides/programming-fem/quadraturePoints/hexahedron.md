---
sidebar_position: 5
---

# Hexahedron

This tutorial covers how to generate quadrature points on Hexahedron.

For creating **Isotropic** quadrature see [example 1](#isotropic-gauss-legendre-points-on-biunit-hexahedron) and [example 2](#isotropic-gauss-legendre-points-on-unit-hexahedron).

For creating **Anisotropic** quadrature see [example 3](#anisotropic-gauss-legendre-points-on-biunit-hexahedron)

## Isotropic Gauss Legendre points on biunit Hexahedron

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B)
order = 2_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj), "ans: ")
END PROGRAM main
```

|  |   |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.57735 | -0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | 0.57735 | 0.57735 |
| x2 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 |
| x3 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

## Isotropic Gauss-Legendre points on unit Hexahedron

Just pass coordinates of a unit Hexahedron to initiate method of ReferenceHexahedron.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B, xij=RefCoord_Hexahedron("UNIT"))
order = 2_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj) , "")
END PROGRAM main
```

|  |   |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | 0.21132 | 0.21132 | 0.21132 | 0.21132 | 0.78868 | 0.78868 | 0.78868 | 0.78868 |
| x2 | 0.21132 | 0.21132 | 0.78868 | 0.78868 | 0.21132 | 0.21132 | 0.78868 | 0.78868 |
| x3 | 0.21132 | 0.78868 | 0.21132 | 0.78868 | 0.21132 | 0.78868 | 0.21132 | 0.78868 |
| w | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 |

## Anisotropic Gauss-Legendre points on biunit Hexahedron

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B)
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & p=4,  &
  & q=3,  &
  & r=2,  &
  & quadratureType1=GaussLegendre, &
  & quadratureType2=GaussLegendre, &
  & quadratureType3=GaussLegendre &
  & )
CALL display(mdencode(obj) , "")
END PROGRAM main
```

:::note
You can specify different order of accuracy (p,q,r) and different types of quadrature points (by using quadratureType1, quadratureType2, quadratureType3) in x, y, and z directions.
:::

|  |   |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | -0.7746 | -0.7746 | 3.64292E-16 | 3.46945E-16 | 3.46945E-16 | 3.88578E-16 | 0.7746 | 0.7746 | 0.7746 | 0.7746 |
| x2 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 |
| x3 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 0.55556 | 0.55556 | 0.55556 | 0.55556 | 0.88889 | 0.88889 | 0.88889 | 0.88889 | 0.55556 | 0.55556 | 0.55556 | 0.55556 |
