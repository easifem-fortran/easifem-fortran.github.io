# GaussLegendre

This function returns GaussLegendre quadrature points of a given order.

<span class="badge badge--warning"> Generic name:  GaussLegendreQuadrature </span>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
MODULE PURE FUNCTION GaussLegendreQuadrature( refelem, Order ) RESULT( obj )
  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem
  INTEGER( I4B ), INTENT( IN ) :: Order
  TYPE( QuadraturePoint_ ) :: obj
END FUNCTION GaussLegendreQuadrature
```

:::info `refelem`
Reference element.
:::

:::info `Order`
Order of integrand, that is, accuracy of quadrature points.
:::

## Interface 2

```fortran
MODULE PURE FUNCTION GaussLegendreQuadrature( refelem, nips ) RESULT( obj )
  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem
  INTEGER( I4B ), INTENT( IN ) :: nips( 1 )
  TYPE( QuadraturePoint_ ) :: obj
END FUNCTION GaussLegendreQuadrature
```

:::note
This function initiates quadrature point based on given nips (number of integration points).
:::

## Interface 3

```fortran
INTERFACE
  MODULE FUNCTION GaussLegendreQuadrature(refelem, p, q, r) RESULT(obj)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    INTEGER(I4B), INTENT(IN) :: p
    !! order of accuracy in x1 direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of accuracy in x2 direction
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: r
    !! order of accuracy in x3 direction
    TYPE(QuadraturePoint_) :: obj
  END FUNCTION GaussLegendreQuadrature
END INTERFACE
```

