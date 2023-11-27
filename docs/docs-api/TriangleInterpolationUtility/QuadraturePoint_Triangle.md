# QuadraturePoint

This routine returns the quadrature points on triangle.

:::note
For order less than or equal to 20, this function returns the minimum number of quadrature points. For order greater than 20 this routine returns Tensor Product based quadrature points.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION QuadraturePoint_Triangle(&
    & order, &
    & quadType, &
    & refTriangle, &
    & xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! Reference triangle
    !! Biunit
    !! Unit
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of triangle.
    !! The number of rows in xij can be 2 or 3.
    !! The number of columns in xij should be 3
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! Quadrature points
  END FUNCTION QuadraturePoint_Triangle
END INTERFACE
```

:::info `xij`
:::

- `xij` contains nodal coordinates of triangle in xij format.
- SIZE(xij,1) = nsd, and SIZE(xij,2)=3
- If xij is absent then unit triangle is assumed

:::info `quadType`
:::

- `quadType` is quadrature type, currently this variable is not used.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE63 from "./_QuadraturePoint_Triangle_test_1.md";

<EXAMPLE63 />

</TabItem>

<TabItem value="close" label="↢ ">
</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE QuadraturePoint_Triangle
  MODULE FUNCTION QuadraturePoint_Triangle2(&
    & nips, &
    & quadType, &
    & refTriangle, &
    & xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! nips(1) .LE. 79, then we call
    !! economical quadrature rules.
    !! Otherwise, this routine will retport
    !! error
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type,
    !! currently this variable is not used
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! Reference triangle
    !! Biunit
    !! Unit
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordinates of triangle.
    !! The number of rows in xij can be 2 or 3.
    !! The number of columns in xij should be 3
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! Quadrature points
  END FUNCTION QuadraturePoint_Triangle2
END INTERFACE QuadraturePoint_Triangle
```
