# GaussLegendreRadauRight

This function returns Gauss Legendre Radau quadrature points of a given order.

<span class="badge badge--success"> Generic: GaussLegendreRadauRightQuadrature </span>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
For line-element n point Gauss Legendre Radau rule has $2n-2$ degree of accuracy.  
:::

## Interface 1

```fortran
MODULE PURE FUNCTION GaussLegendreRadauRightQuadrature( refelem, order ) RESULT( obj )
  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem
  INTEGER( I4B ), INTENT( IN ) :: Order
  TYPE( QuadraturePoint_ ) :: obj
END FUNCTION GaussLegendreRadauRightQuadrature
```

:::info `refelem`
Reference element.
:::

:::info `order`
Order of integrand, that is, accuracy of quadrature points.
:::

## Interface 2

```fortran
MODULE PURE FUNCTION GaussLegendreRadauRightQuadrature( refelem, NIPS ) RESULT( obj )
  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem
  INTEGER( I4B ), INTENT( IN ) :: NIPS( 1 )
  TYPE( QuadraturePoint_ ) :: obj
END FUNCTION GaussLegendreRadauRightQuadrature
```

:::info `nips`
Number of integration (quadrature) points.
:::

:::note
This function initiates quadrature point based on given NIPS (number of integration points).
:::

## Interface 3

```fortran
INTERFACE
  MODULE FUNCTION GaussLegendreRadauRightQuadrature(refelem, p, q, r) RESULT(obj)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    INTEGER(I4B), INTENT(IN) :: p
    !! order of accuracy in x1 direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of accuracy in x2 direction
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: r
    !! order of accuracy in x3 direction
    TYPE(QuadraturePoint_) :: obj
  END FUNCTION GaussLegendreRadauRightQuadrature
END INTERFACE
```

