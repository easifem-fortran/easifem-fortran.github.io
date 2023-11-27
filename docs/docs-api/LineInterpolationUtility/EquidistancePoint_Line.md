---
sidebar_label: EquidistancePoint
---

# EquidistancePoint_Line

This function returns the equidistance points on edge.

:::note
This routine returns the points in  "VEFC" format, which means `xij(:,1:2)` are the end points, and `xij(:, 3:)` are the internal points.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface 1" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistancePoint_Line(order, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), INTENT(IN) :: xij(2)
    !! coorindates of point 1 and point 2
    REAL(DFP), ALLOCATABLE :: ans(:)
    !! equidistance points
  END FUNCTION EquidistancePoint_Line
END INTERFACE
```

:::note `xij`
:::

- `xij(1)` is 1D coordinate of point 1.
- `xij(2)` is 1D coordinate of point 2.

</TabItem>

<TabItem value="interface2" label="Interface 2">

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistancePoint_Line(order, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! coordinates of point 1 and point 2 in $x_{iJ}$ format
    !! number of rows = nsd
    !! number of cols = 2
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! equidistance points in $x_{iJ}$ format
  END FUNCTION EquidistancePoint_Line
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
- The points are arranged in VEFC order.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_EquidistancePoint_Line_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
