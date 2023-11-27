# EquidistancePoint

This function returns the nodal coordinates of higher order triangle element

- the layout is always "VEFC"
- coordinates are distributed uniformly
- these coordinates can be used to construct lagrange polynomials
- the returned coordinates are in $x_{iJ}$ format.
- the node numbering is according to Gmsh convention, VEFC.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE RECURSIVE PURE FUNCTION EquidistancePoint_Triangle(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
  !! coordinates of point 1 and point 2 in $x_{iJ}$ format
  !! number of rows = nsd
  !! number of cols = 3
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistancePoint_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE38 from "./_EquidistancePoint_Triangle_test_1.md";

<EXAMPLE38 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
