# InterpolationPoint

Get the interpolation point on 1D/2D/3D elements.

Calling example

```fortran
x(:,:) = InterpolationPoint(order, elemType, ipType, xij)
```

- `order` order of polynomial
- `elemType` element type
- `ipType` interpolation point
  - `Equidistance`
  - `GaussLegendre`
  - `GaussLegendreLobatto`
  - `GaussChebyshev`
  - `GaussChebyshevLobatto`
  - `GaussJacobi`
  - `GaussJacobiLobatto`

## Interface

```fortran
INTERFACE
  MODULE FUNCTION InterpolationPoint(order, elemType, ipType, &
    & xij, layout) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of interpolation
    INTEGER(I4B), INTENT(IN) :: elemType
    !! element type
    INTEGER(I4B), INTENT(IN) :: ipType
    !! interpolation point type
    !! Equidistance, GaussLegendre, GaussLegendreLobatto, GaussChebyshev,
    !! GaussChebyshevLobatto, GaussJacobi, GaussJacobiLobatto
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! domain of interpolation, default values are given by
    !! line = [-1,1]
    !! triangle = (0,0), (0,1), (1,0)
    !! quadrangle = [-1,1]x[-1,1]
    CHARACTER(*), INTENT(IN) :: layout
    !! "VEFC" Vertex, Edge, Face, Cell
    !! "INCREASING" incresing order
    !! "DECREASING" decreasing order
    !! "XYZ" First X, then Y, then Z
    !! "YXZ" First Y, then X, then Z
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION InterpolationPoint
END INTERFACE
```

## Line

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="example" label="️܀ Equidistance">

import EXAMPLE5 from "./_InterpolationPoint_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="example2" label="܀ Equidistance INCREASING">

import EXAMPLE60 from "./_InterpolationPoint_test_2.md";

<EXAMPLE60 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="example3" label="܀ GaussLegendreLobatto VEFC">

import EXAMPLE68 from "./_InterpolationPoint_test_3.md";

<EXAMPLE68 />

</TabItem>

<TabItem value="example4" label="܀ GaussLegendreLobatto INCREASING">

import EXAMPLE77 from "./_InterpolationPoint_test_4.md";

<EXAMPLE77 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example5" label="GaussChebyshevLobatto VEFC">

import EXAMPLE84 from "./_InterpolationPoint_test_5.md";

<EXAMPLE84 />

</TabItem>

<TabItem value="example6" label="GaussChebyshevLobatto INCREASING">

import EXAMPLE92 from "./_InterpolationPoint_test_6.md";

<EXAMPLE92 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## More

<Tabs>
<TabItem value="example1" label="️܀ BlythPozLegendre">

import EXAMPLE116 from "./_InterpolationPoint_test_8.md";

<EXAMPLE116 />

</TabItem>

<TabItem value="example2" label="܀ BlythPozChebyshev">

import EXAMPLE127 from "./_InterpolationPoint_test_9.md";

<EXAMPLE127 />

</TabItem>

<TabItem value="example3" label="܀ IsaacLegendre">

import EXAMPLE135 from "./_InterpolationPoint_test_10.md";

<EXAMPLE135 />

</TabItem>

<TabItem value="example4" label="܀ IsaacChebyshev">

import EXAMPLE143 from "./_InterpolationPoint_test_11.md";

<EXAMPLE143 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
