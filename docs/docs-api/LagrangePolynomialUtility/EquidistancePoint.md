# EquidistancePoint

Returns the equidistance points on 1D/2D/3D elements.

The nodes are numbered as per the Gmsh convention.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistancePoint(order, xij, elemType) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    INTEGER(I4B), INTENT(IN) :: elemType
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  END FUNCTION EquidistancePoint
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_EquidistancePoint_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="example2" label="️܀ See example">

import EXAMPLE10 from "./_EquidistancePoint_test_2.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="example3" label="️܀ See example">

import EXAMPLE11 from "./_EquidistancePoint_test_3.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
