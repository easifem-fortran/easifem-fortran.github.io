# Dubiner

Forms Dubiner basis on reference triangle domain.

Reference triangle can be "biunit" or "unit".

The shape of `ans` is (M,N), where M=SIZE(xij,2) (number of points) N = 0.5*(order+1)*(order+2).

In this way, `ans(j,:)` denotes the values of all polynomial at jth point.

Polynomials are returned in following way:

$$
 P_{0,0}, P_{0,1}, \cdots , P_{0,order} \\
 P_{1,0}, P_{1,1}, \cdots , P_{1,order-1} \\
 P_{2,0}, P_{2,1}, \cdots , P_{2,order-2} \\
 \cdots
 P_{order,0}
$$

For example for order=3, the polynomials are arranged as:

$$
 P_{0,0}, P_{0,1}, P_{0,2}, P_{0,3} \\
 P_{1,0}, P_{1,1}, P_{1,2} \\
 P_{2,0}, P_{2,1} \\
 P_{3,0}
$$

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Dubiner_Triangle(order, xij, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial space
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in reference triangle, shape functions will be evaluated
    !! at these points. SIZE(xij,1) = 2, and SIZE(xij, 2) = number of points
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! "unit"
    !! "biunit"
    REAL(DFP) :: ans(SIZE(xij, 2), (order + 1)* (order + 2) / 2)
    !! shape functions
    !! ans(:, j), jth shape functions at all points
    !! ans(j, :), all shape functions at jth point
  END FUNCTION Dubiner_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀  order=1">

import EXAMPLE61 from "./_Dubiner_Triangle_test_1.md";

<EXAMPLE61 />

</TabItem>

<TabItem value="example2" label="️܀  order=2">

import EXAMPLE100 from "./_Dubiner_Triangle_test_2.md";

<EXAMPLE100 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Dubiner_Triangle(order, x, y, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial space
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! x and y coordinates, total points = SIZE(x)*SIZE(y)
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! "unit"
    !! "biunit"
    REAL(DFP) :: ans(SIZE(x) * SIZE(y), (order + 1) * (order + 2) / 2)
    !! shape functions
    !! ans(:, j), jth shape functions at all points
    !! ans(j, :), all shape functions at jth point
  END FUNCTION Dubiner_Triangle
END INTERFACE
```

Forms Dubiner basis on reference triangle domain. Reference triangle can be biunit or unit. Here x and y are the coordinates on the line. xij is given by outerproduct of x and y.
</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
