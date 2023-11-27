---
sidebar_label: InterpolationPoint
---

# InterpolationPoint_Line

This routine returns the interplation points on the line.

<span class="badge badge--primary"> Calling example </span>:

```fortran
ans = InterpolationPoint_Line(order, ipType, layout, xij)
```

<span class="badge badge--secondary"> Interplation points: </span>

`ipType` is interpolation point type, it can take following values:

1. `Equidistance`, uniformly/evenly distributed points
2. `GaussLegendre`, Zeros of Legendre polynomials, all nodes are strictly inside the domain.
3. `GaussLegendreLobatto` are zeros of Lobatto polynomials they always contain boundary points
4. `GaussChebyshev` Zeros of Chebyshev polynomials of first kind, all nodes are internal
5. `GaussChebyshevLobatto` they contain boundary points `GaussJacobi` and `GaussJacobiLobatto`

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE InterpolationPoint_Line
  MODULE FUNCTION InterpolationPoint_Line1(order, ipType, &
    & layout, xij, alpha, beta, lambda) RESULT(ans)
    !!
    INTEGER(I4B), INTENT(IN) :: order
    !! Order of interpolation
    INTEGER(I4B), INTENT(IN) :: ipType
    !! Interpolation point type
    !! Equidistance, GaussLegendre, GaussLegendreLobatto, GaussChebyshev,
    !! GaussChebyshevLobatto, GaussJacobi, GaussJacobiLobatto
    CHARACTER(*), INTENT(IN) :: layout
    !! "VEFC"
    !! "INCREASING"
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! domain of interpolation
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
    !! size(ans,1) = 1 (if xij not present) else size(xij,1)
    !! size(ans,2) = order+1
  END FUNCTION InterpolationPoint_Line1
END INTERFACE InterpolationPoint_Line
```

:::info `xij`
:::

`xij` contains nodal coordinates of line in xij format.

- SIZE(xij,1) = nsd, and SIZE(xij,2)=2
- If xij is absent then [-1,1] is used

:::info `ans`
:::

`ans` contains the equidistance points. If `xij` is present, then the number of rows in xij is same as the number of rows in xij. Otherwise, `ans` has 1 row (for 1D).

:::info `layout`
:::

- `layout` specifies the arrangement of points. Following options are possible:
- `layout=VEFC` vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order.
- `layout=INCREASING` points are arranged in increasing order

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE54 from "./_InterpolationPoint_Line_test_1.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE InterpolationPoint_Line
  MODULE FUNCTION InterpolationPoint_Line2(order, ipType, xij, &
    & layout, alpha, beta, lambda) RESULT(ans)
    !!
    INTEGER(I4B), INTENT(IN) :: order
    !! order of interpolation
    INTEGER(I4B), INTENT(IN) :: ipType
    !! Interpolation point type
    !! Equidistance
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussChebyshev,
    !! GaussChebyshevLobatto
    !! GaussJacobi
    !! GaussJacobiLobatto
    REAL(DFP), INTENT(IN) :: xij(2)
    !! end points
    CHARACTER(*), INTENT(IN) :: layout
    !! "VEFC"
    !! "INCREASING"
    !! "DECREASING"
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:)
    !! one dimensional interpolation point
  END FUNCTION InterpolationPoint_Line2
END INTERFACE InterpolationPoint_Line
```

:::info `xij`
:::

- `xij` contains nodal coordinates of line in 1D.
- `xij(1)` contains 1D coordinates of starting point of line.
- `xij(2)` contains the 1D coordinates of ending point of line.

:::info `ans`
:::

`ans` contains the equidistance points. If `xij` is present, then the number of rows in xij is same as the number of rows in xij. Otherwise, `ans` has 1 row (for 1D).

:::info `layout`
:::

- `layout` specifies the arrangement of points. Following options are possible:
- `layout=VEFC` vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order.
- `layout=INCREASING` points are arranged in increasing order

</TabItem>

<TabItem value="example" label="️܀ See example">

See above example.

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
