# InterpolationPoint

Returns interpolation points for lagrange polynomials on hexahedron.

The interpolation points are always returned in "VEFC" format.

- Vertex
- Edge
- Facet
- Cell

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE InterpolationPoint_Hexahedron
  MODULE FUNCTION InterpolationPoint_Hexahedron1(order, ipType, &
    & layout, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B), INTENT(IN) :: ipType
    CHARACTER(*), INTENT(IN) :: layout
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION InterpolationPoint_Hexahedron1
END INTERFACE InterpolationPoint_Hexahedron
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE14 from "./_InterpolationPoint_Hexahedron_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE34 from "./_InterpolationPoint_Hexahedron_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE41 from "./_InterpolationPoint_Hexahedron_test_3.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE InterpolationPoint_Hexahedron
  MODULE FUNCTION InterpolationPoint_Hexahedron2(p, q, r, ipType1, ipType2, &
    & ipType3, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    INTEGER(I4B), INTENT(IN) :: q
    INTEGER(I4B), INTENT(IN) :: r
    INTEGER(I4B), INTENT(IN) :: ipType1
    INTEGER(I4B), INTENT(IN) :: ipType2
    INTEGER(I4B), INTENT(IN) :: ipType3
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION InterpolationPoint_Hexahedron2
END INTERFACE InterpolationPoint_Hexahedron
```
