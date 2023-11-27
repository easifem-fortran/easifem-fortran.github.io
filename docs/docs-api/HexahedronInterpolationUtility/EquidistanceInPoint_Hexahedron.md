# EquidistanceInPoint

This subroutine returns the equidistance points in the Hexahedron.

The points are strictly inside the Hexahedron.

<!-- ![](./figures/equidistanceInPoint.svg) -->

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistanceInPoint_Hexahedron(order, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! number of rows = 3
    !! number of cols = 8
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistanceInPoint_Hexahedron
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_EquidistanceInPoint_Hexahedron_test_2.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE EquidistanceInPoint_Hexahedron
  MODULE PURE FUNCTION EquidistanceInPoint_Hexahedron2(p, q, r, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p, q, r
    !! order in x, y, and z direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! number of rows = 3
    !! number of cols = 8
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistanceInPoint_Hexahedron2
END INTERFACE EquidistanceInPoint_Hexahedron
```

## Results

### Order 1

None

### Order 2

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | 0 | 0 | 0 |

### Order 3

<details>
<summary>See results</summary>
<div>

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | -0.33333 | -0.33333 | -0.33333 |
| 2 | 0.33333 | -0.33333 | -0.33333 |
| 3 | 0.33333 | 0.33333 | -0.33333 |
| 4 | -0.33333 | 0.33333 | -0.33333 |
| 5 | -0.33333 | -0.33333 | 0.33333 |
| 6 | 0.33333 | -0.33333 | 0.33333 |
| 7 | 0.33333 | 0.33333 | 0.33333 |
| 8 | -0.33333 | 0.33333 | 0.33333 |

</div>
</details>
