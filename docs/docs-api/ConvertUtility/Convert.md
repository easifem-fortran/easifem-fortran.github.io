# Convert

Convert method changes the storage pattern of matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE SUBROUTINE convert(From, To, Conversion, nns, tdof)
    REAL(DFP), INTENT(IN) :: From(:, :)
    !! Matrix in one format
    REAL(DFP), INTENT(INOUT), ALLOCATABLE :: To(:, :)
    !! Matrix is desired format
    INTEGER(I4B), INTENT(IN) :: Conversion
    !! `Conversion` can be `NodesToDOF` or `DOFToNodes`
    INTEGER(I4B), INTENT(IN) :: nns, tdof
  END SUBROUTINE convert
END INTERFACE
```

This subroutine changes the storage pattern of a 2D matrix.

- Usually element matrix in easifem are stored in `FMT_DOF`
- Global matrices/tanmat, however, are stored in `FMT_Nodes`

:::note
All dof should have the same order of interpolation, therefore, this routine works when matrix is square.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE PURE SUBROUTINE convert(From, To)
    REAL(DFP), INTENT(IN) :: From(:, :, :, :)
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: To(:, :)
  END SUBROUTINE convert
END INTERFACE
```

This subroutine converts a rank-4 matrix to rank-2 matrix.

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE convert(From, To)
    REAL(DFP), INTENT(IN) :: From(:, :, :, :, :, :)
  !! I, J, ii, jj, a, b
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: To(:, :, :, :)
  !! I, J, a, b
  END SUBROUTINE convert
END INTERFACE
```

This subroutine converts a rank-6 matrix to rank-4 matrix.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE93 from "./_Convert_test_1.md";

<EXAMPLE93 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
