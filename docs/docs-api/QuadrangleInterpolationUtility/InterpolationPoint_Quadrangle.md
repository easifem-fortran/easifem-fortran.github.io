# InterpolationPoint

This routine returns the interplation points on quadrangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE InterpolationPoint_Quadrangle
  MODULE FUNCTION InterpolationPoint_Quadrangle1(order, ipType, xij, &
    & layout) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of element
    INTEGER(I4B), INTENT(IN) :: ipType
    !! interpolation point type
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    CHARACTER(*), INTENT(IN) :: layout
    !! VEFC, INCREASING
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION InterpolationPoint_Quadrangle1
END INTERFACE InterpolationPoint_Quadrangle
```

:::info xij

- `xij` contains nodal coordinates of quadrangle in xij format.
- The number of rows in xij can be 2 or 3 (for 2D or 3D)
- The number of columns in xij is 4
- If xij is absent then biunit quadrangle is assumed.
:::

:::info ipType

- `ipType` is interpolation point type, it can take following values

- [x] `Equidistance`, uniformly/evenly distributed points
- [x] `GaussLegendreLobatto`
- [x] `GaussChebyshev1Lobatto`
- [x] `GaussJacobiLobatto`
- [x] `GaussUltrasphericalLobatto`
:::

:::info layout
`layout` specifies the arrangement of interpolation points.

It has two options:

**VEFC**

In "VEFC" format (vertex, edge, face, cell), the first four entries denote the vertex points, then we have edges, and then internal nodes.

The internal nodes also follow the same convention. Please read Gmsh manual  on this topic.

**INCREASING**

In "INCREASING" format the interpolation points are stored column-wise, that is first points along a y-axis are stored first.
:::

For example for order = 3:

**VEFC**

| |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- | --- |
| $x$ | -1 | 1 | 1 | -1 | -0.33333 | 0.33333 | 1 | 1 | 0.33333 | -0.33333 | -1 | -1 | -0.33333 | -0.33333 | 0.333 33 | 0.33333 |
| $y$ | -1 | -1 | 1 | 1 | -1 | -1 | -0.33333 | 0.33333 | 1 | 1 | 0.33333 | -0.33333 | -0.33333 | 0.33333 | 0.3333 3 | -0.33333 |

**INCREASING**

| |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- | --- |
| $x$ | -1 | -1 | -1 | -1 | -0.33333 | -0.33333 | -0.33333 | -0.33333 | 0.33333 | 0.33333 | 0.33333 | 0.33333 | 1 | 1 | 1 | 1 |
| $y$ | | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 |

</TabItem>

<TabItem value="Equidistance" label="️܀ Equidistance">

import EXAMPLE63 from "./_InterpolationPoint_Quadrangle_test_1.md";

<EXAMPLE63 />

</TabItem>

<TabItem value="GaussLegendreLobatto" label="GaussLegendreLobatto">

import EXAMPLE71 from "./_InterpolationPoint_Quadrangle_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="GaussChebyshevLobatto" label="GaussChebyshevLobatto">

import EXAMPLE79 from "./_InterpolationPoint_Quadrangle_test_3.md";

<EXAMPLE79 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

<Tabs>
<TabItem value="GaussJacobiLobatto" label="GaussJacobiLobatto">

import EXAMPLE87 from "./_InterpolationPoint_Quadrangle_test_4.md";

<EXAMPLE87 />

</TabItem>

<TabItem value="GaussUltrasphericalLobatto" label="GaussUltrasphericalLobatto">

import EXAMPLE95 from "./_InterpolationPoint_Quadrangle_test_5.md";

<EXAMPLE95 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interface 2

```fortran title="Interface"
INTERFACE InterpolationPoint_Quadrangle
  MODULE FUNCTION InterpolationPoint_Quadrangle2(  &
    & p, q, ipType1, ipType2, layout, xij, alpha1, beta1, &
    & lambda1, alpha2, beta2, lambda2) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order of element in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of element in y direction
    INTEGER(I4B), INTENT(IN) :: ipType1
    !! interpolation point type in x direction
    INTEGER(I4B), INTENT(IN) :: ipType2
    !! interpolation point type in y direction
    CHARACTER(*), INTENT(IN) :: layout
    !! VEFC, INCREASING
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION InterpolationPoint_Quadrangle2
END INTERFACE InterpolationPoint_Quadrangle
```
