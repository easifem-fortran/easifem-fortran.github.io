# FromBiUnitTriangleToUnitTriangle

This routine provides a biunit triangle to unit triangle mapping.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE FUNCTION FromBiUnitTriangle2UnitTriangle(xin) RESULT(ans)
    REAL(DFP), INTENT(IN) :: xin(:, :)
    REAL(DFP) :: ans(2, SIZE(xin, 2))
  END FUNCTION FromBiUnitTriangle2UnitTriangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_FromBiUnitTriangle2UnitTriangle_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
