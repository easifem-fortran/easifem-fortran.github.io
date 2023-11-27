# EquidistancePoint

This subroutine returns the equidistance points in the Hexahedron.

<!-- <iframe src="/elements/hexahedron/equidistance.html" height="600" width="100%" scrolling="no"></iframe> -->

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistancePoint_Hexahedron(order, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! number of rows = 3
    !! number of cols = 8
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistancePoint_Hexahedron
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_EquidistancePoint_Hexahedron_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE EquidistancePoint_Hexahedron
  MODULE PURE FUNCTION EquidistancePoint_Hexahedron2(p, q, r, xij) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order in y direction
    INTEGER(I4B), INTENT(IN) :: r
    !! order in z direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! number of rows = 3
    !! number of cols = 8
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistancePoint_Hexahedron2
END INTERFACE EquidistancePoint_Hexahedron
```

:::info `p,q,r`
:::
order in x, y, and z direction.

:::info `xij`
:::
xij is the nodal coordinates of Hexahedron. The number of rows in `xij` are 3, and number of columns in `xij` is 8.

## Results

<!-- ![](./figures/equidistance.svg) -->

### Order 1

<details>
<summary>See results</summary>
<div>

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | -1 | -1 | -1 |
| 2 | 1 | -1 | -1 |
| 3 | 1 | 1 | -1 |
| 4 | -1 | 1 | -1 |
| 5 | -1 | -1 | 1 |
| 6 | 1 | -1 | 1 |
| 7 | 1 | 1 | 1 |
| 8 | -1 | 1 | 1 |

</div>
</details>

### Order 2

<details>
<summary>See results</summary>
<div>

| no  | $x_1$ | $x_2$ | $x_3$ |
| --- | ----- | ----- | ----- |
| 1   | -1    | -1    | -1    |
| 2   | 1     | -1    | -1    |
| 3   | 1     | 1     | -1    |
| 4   | -1    | 1     | -1    |
| 5   | -1    | -1    | 1     |
| 6   | 1     | -1    | 1     |
| 7   | 1     | 1     | 1     |
| 8   | -1    | 1     | 1     |
| 9   | 0     | -1    | -1    |
| 10  | -1    | 0     | -1    |
| 11  | -1    | -1    | 0     |
| 12  | 1     | 0     | -1    |
| 13  | 1     | -1    | 0     |
| 14  | 0     | 1     | -1    |
| 15  | 1     | 1     | 0     |
| 16  | -1    | 1     | 0     |
| 17  | 0     | -1    | 1     |
| 18  | -1    | 0     | 1     |
| 19  | 1     | 0     | 1     |
| 20  | 0     | 1     | 1     |
| 21  | 0     | 0     | -1    |
| 22  | 0     | 0     | 1     |
| 23  | -1    | 0     | 0     |
| 24  | 1     | 0     | 0     |
| 25  | 0     | -1    | 0     |
| 26  | 0     | 1     | 0     |
| 27  | 0     | 0     | 0     |

</div>
</details>

### Order 3

<details>
<summary>See results</summary>
<div>

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | -1 | -1 | -1 |
| 2 | 1 | -1 | -1 |
| 3 | 1 | 1 | -1 |
| 4 | -1 | 1 | -1 |
| 5 | -1 | -1 | 1 |
| 6 | 1 | -1 | 1 |
| 7 | 1 | 1 | 1 |
| 8 | -1 | 1 | 1 |
| 9 | -0.33333 | -1 | -1 |
| 10 | 0.33333 | -1 | -1 |
| 11 | -1 | -0.33333 | -1 |
| 12 | -1 | 0.33333 | -1 |
| 13 | -1 | -1 | -0.33333 |
| 14 | -1 | -1 | 0.33333 |
| 15 | 1 | -0.33333 | -1 |
| 16 | 1 | 0.33333 | -1 |
| 17 | 1 | -1 | -0.33333 |
| 18 | 1 | -1 | 0.33333 |
| 19 | 0.33333 | 1 | -1 |
| 20 | -0.33333 | 1 | -1 |
| 21 | 1 | 1 | -0.33333 |
| 22 | 1 | 1 | 0.33333 |
| 23 | -1 | 1 | -0.33333 |
| 24 | -1 | 1 | 0.33333 |
| 25 | -0.33333 | -1 | 1 |
| 26 | 0.33333 | -1 | 1 |
| 27 | -1 | -0.33333 | 1 |
| 28 | -1 | 0.33333 | 1 |
| 29 | 1 | -0.33333 | 1 |
| 30 | 1 | 0.33333 | 1 |
| 31 | 0.33333 | 1 | 1 |
| 32 | -0.33333 | 1 | 1 |
| 33 | -0.33333 | -0.33333 | -1 |
| 34 | -0.33333 | 0.33333 | -1 |
| 35 | 0.33333 | 0.33333 | -1 |
| 36 | 0.33333 | -0.33333 | -1 |
| 37 | -0.33333 | -0.33333 | 1 |
| 38 | 0.33333 | -0.33333 | 1 |
| 39 | 0.33333 | 0.33333 | 1 |
| 40 | -0.33333 | 0.33333 | 1 |
| 41 | -1 | -0.33333 | 0.33333 |
| 42 | -1 | -0.33333 | -0.33333 |
| 43 | -1 | 0.33333 | -0.33333 |
| 44 | -1 | 0.33333 | 0.33333 |
| 45 | 1 | -0.33333 | 0.33333 |
| 46 | 1 | 0.33333 | 0.33333 |
| 47 | 1 | 0.33333 | -0.33333 |
| 48 | 1 | -0.33333 | -0.33333 |
| 49 | 0.33333 | 1 | -0.33333 |
| 50 | -0.33333 | 1 | -0.33333 |
| 51 | -0.33333 | 1 | 0.33333 |
| 52 | 0.33333 | 1 | 0.33333 |
| 53 | -0.33333 | -1 | -0.33333 |
| 54 | 0.33333 | -1 | -0.33333 |
| 55 | 0.33333 | -1 | 0.33333 |
| 56 | -0.33333 | -1 | 0.33333 |
| 57 | -0.33333 | -0.33333 | -0.33333 |
| 58 | 0.33333 | -0.33333 | -0.33333 |
| 59 | 0.33333 | 0.33333 | -0.33333 |
| 60 | -0.33333 | 0.33333 | -0.33333 |
| 61 | -0.33333 | -0.33333 | 0.33333 |
| 62 | 0.33333 | -0.33333 | 0.33333 |
| 63 | 0.33333 | 0.33333 | 0.33333 |
| 64 | -0.33333 | 0.33333 | 0.33333 |

</div>
</details>
