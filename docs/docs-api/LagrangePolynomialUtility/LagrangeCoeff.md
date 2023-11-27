# LagrangeCoeff

Returns the coefficients of lagrange polynomial.

The Nth order lagrange polynomial in 1D can be described as:

$$
l_{i} = \sum_{n=0}^{N} a_{n} x^{n}
$$

This function returns coefficients $a_{n}$

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff(order, elemType, i, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: elemType
    !! element type
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format
    REAL(DFP), ALLOCATABLE :: ans(:)
    !! coefficients
  END FUNCTION LagrangeCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE18 from "./_LagrangeCoeff_test_1.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE50 from "./_LagrangeCoeff_test_2.md";

<EXAMPLE50 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE58 from "./_LagrangeCoeff_test_3.md";

<EXAMPLE58 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
