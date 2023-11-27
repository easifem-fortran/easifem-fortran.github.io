# BarycentricHeirarchicalBasis

Evaluate all modal basis (heirarchical polynomials) on Triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BarycentricHeirarchicalBasis_Triangle1(order, &
    & pe1, pe2, pe3, lambda, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order in the cell of triangle, it should be greater than 2
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order of interpolation on edge e1
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order of interpolation on edge e2
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order of interpolation on edge e3
    REAL(DFP), INTENT(IN) :: lambda(:, :)
    !! Barycenteric coordinates
    !! number of rows = 3
    !! number of cols = number of points
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! reference triangle, "BIUNIT", "UNIT"
    REAL(DFP) :: ans( &
      & SIZE(xij, 2), &
      & pe1 + pe2 + pe3 + INT((order - 1) * (order - 2) / 2))
    !!
  END FUNCTION BarycentricHeirarchicalBasis_Triangle1
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE41 from "./_BarycentricHeirarchicalBasis_Triangle_test_1.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BarycentricHeirarchicalBasis_Triangle(order, lambda, &
    & refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of approximation on triangle
    REAL(DFP), INTENT(IN) :: lambda(:, :)
    !! Barycenteric coordinates
    !! number of rows = 3
    !! number of cols = number of points
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! reference triangle, "BIUNIT", "UNIT"
    REAL(DFP) :: ans( &
      & SIZE(xij, 2), &
      & INT((order + 1) * (order + 2) / 2))
    !!
  END FUNCTION BarycentricHeirarchicalBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE79 from "./_BarycentricHeirarchicalBasis_Triangle_test_2.md";

<EXAMPLE79 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
