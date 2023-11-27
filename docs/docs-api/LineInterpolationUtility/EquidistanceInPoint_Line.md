---
sidebar_label: EquidistanceInPoint
---

# EquidistanceInPoint_Line

This function returns the equidistance points strictly inside an edge.

- All points are inside the interval
- Points are in increasing order

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistanceInPoint_Line(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), INTENT(IN) :: xij(2)
    !! coordinates of point 1 and point 2
    REAL(DFP), ALLOCATABLE :: ans(:)
  END FUNCTION EquidistanceInPoint_Line
END INTERFACE
```

:::note `xij`
:::

- `xij(1)` is 1D coordinate of point 1.
- `xij(2)` is 1D coordinate of point 2.

</TabItem>

<TabItem value="interace2" label="Interface 2">

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistanceInPoint_Line(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
  !! coordinates of point 1 and point 2 in $x_{iJ}$ format
  !! number of rows = nsd
  !! number of cols = 2
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistanceInPoint_Line
END INTERFACE
```

:::note `xij`
:::

- `xij(:, 1)` are coordinates of point 1.
- `xij(:, 2)` are coordinates of point 2.

:::note `ans`
:::

- If `xij` is present, then number of rows in `ans` is same as the number of rows in `xij`, otherwise it is 1.
- The rows in `ans` denote the spatial components.
- The points are arranged in increasing order.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_EquidistanceInPoint_Line_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
