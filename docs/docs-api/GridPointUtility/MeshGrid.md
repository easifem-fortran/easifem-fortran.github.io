# MeshGrid

Meshgrid generates mesh-grid over a rectangular domain of [xmin, xmax, ymin, ymax]

Calling example

```fortran
 call meshgrid(X, Y, [0.,1.,2.,3.],[5.,6.,7.,8.])

  X =
  [0.0, 1.0, 2.0, 3.0,
   0.0, 1.0, 2.0, 3.0,
   0.0, 1.0, 2.0, 3.0,
   0.0, 1.0, 2.0, 3.0]

 Y =
 [ 5.0, 5.0, 5.0, 5.0,
   6.0, 6.0, 6.0, 6.0,
   7.0, 7.0, 7.0, 7.0,
   8.0, 8.0, 8.0, 8.0]
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE MeshGrid(x, y, xgv, ygv)
    REAL(REAL64), ALLOCATABLE, INTENT(INOUT) :: x(:, :)
    !! X and Y are matrix each of size [ny by nx] contains the grid data.
    REAL(REAL64), ALLOCATABLE, INTENT(INOUT) :: y(:, :)
    !! X and Y are matrix each of size [ny by nx] contains the grid data.
    REAL(REAL64), INTENT(IN) :: xgv(:)
    !! xgv, ygv are grid vectors in form of full grid data
    REAL(REAL64), INTENT(IN) :: ygv(:)
    !! xgv, ygv are grid vectors in form of full grid data
  END SUBROUTINE MeshGrid
END INTERFACE
```

- xgv, ygv are grid vectors in form of full grid data
- X and Y are matrix each of size [ny by nx] contains the grid data.
- The coordinates of point (i,j) is [X(i,j), Y(i,j)]

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE29 from "./_MeshGrid_test_1.md";

<EXAMPLE29 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE MeshGrid(x, y, z, xgv, ygv, zgv)
    REAL(REAL64), ALLOCATABLE, INTENT(INOUT) :: x(:, :, :)
    REAL(REAL64), ALLOCATABLE, INTENT(INOUT) :: y(:, :, :)
    REAL(REAL64), ALLOCATABLE, INTENT(INOUT) :: z(:, :, :)
    REAL(REAL64), INTENT(IN) :: xgv(:)
    REAL(REAL64), INTENT(IN) :: ygv(:)
    REAL(REAL64), INTENT(IN) :: zgv(:)
  END SUBROUTINE MeshGrid
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE67 from "./_MeshGrid_test_2.md";

<EXAMPLE67 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
