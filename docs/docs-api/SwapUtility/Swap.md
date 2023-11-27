# Swap

This subroutine can swap two integer (scalar, vector, matrix) and two real numbers (scalar, vector, matrix). It can also swap the dimension of a Fortran array.

:::note
We can use this method for swapping two variables `a` and `b`, where `a` and `b` can be scalar, vector or matrix of Fortran intrinsic types.
:::

:::note
We can also use this method for swaping the dimension of a multi-dimension array.
For example, consider an array `b(3,4)`, we can interchange the row and column dimension (i.e., transpose operation) by using swap.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, i1, i2)
    REAL(Real32), ALLOCATABLE, INTENT(INOUT) :: a(:, :)
      !! the returned array
    REAL(Real32), INTENT(IN) :: b(:, :)
      !! input array, it will be untouched
    INTEGER(I4B), INTENT(IN) :: i1
      !! index 1 is Swapped with index `i1`
      !! make sure i1 is lesser than or equal to 2
    INTEGER(I4B), INTENT(IN) :: i2
      !! index 2 is Swapped with index `i2`
      !! make sure i2 is less than or equal to 2
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE31 from "./_Swap_test_1.md";

<EXAMPLE31 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, i1, i2, i3)
    REAL(Real32|Real64), ALLOCATABLE, INTENT(INOUT) :: a(:, :, :)
    !! the returned array
    REAL(Real32|Real64), INTENT(IN) :: b(:, :, :)
    !! input array, it will be untouched
    INTEGER(I4B), INTENT(IN) :: i1
    !! index 1 is Swapped with index `i1`
    !! make sure i1 is lesser than or equal to 3
    INTEGER(I4B), INTENT(IN) :: i2
    !! index 2 is Swapped with index `i2`
    !! make sure i2 is less than or equal to 3
    INTEGER(I4B), INTENT(IN) :: i3
    !! index 3 is Swapped with index `i3`
    !! make sure i3 is less than or equal to 3
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE115 from "./_Swap_test_2.md";

<EXAMPLE115 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, i1, i2, i3, i4)
    REAL(Real64), ALLOCATABLE, INTENT(INOUT) :: a(:, :, :, :)
    !! the returned array
    REAL(Real64), INTENT(IN) :: b(:, :, :, :)
    !! input array, it will be untouched
    INTEGER(I4B), INTENT(IN) :: i1
    !! index 1 is Swapped with index `i1`
    !! make sure i1 is lesser than or equal to 4
    INTEGER(I4B), INTENT(IN) :: i2
    !! index 2 is Swapped with index `i2`
    !! make sure i2 is less than or equal to 4
    INTEGER(I4B), INTENT(IN) :: i3
    !! index 3 is Swapped with index `i3`
    !! make sure i3 is less than or equal to 4
    INTEGER(I4B), INTENT(IN) :: i4
    !! index 4 is Swapped with index `i4`
    !! make sure i4 is less than or equal to 4
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE123 from "./_Swap_test_3.md";

<EXAMPLE123 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b)
    INTEGER(Int8| Int16 | Int32 | Int64| Real32 | Real64), INTENT(INOUT) :: a, b
  END SUBROUTINE Swap
END INTERFACE
```

Swap two scalar numbers.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE155 from "./_Swap_test_4.md";

 <EXAMPLE155 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b)
    INTEGER(Int8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(INOUT) :: a(:), b(:)
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE169 from "./_Swap_test_5.md";

<EXAMPLE169 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 6

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b)
    INTEGER(Int8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(INOUT) :: a(:,:), b(:,:)
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE197 from "./_Swap_test_6.md";

<EXAMPLE197 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 7

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, mask)
    INTEGER(Int8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(INOUT) :: a, b
    LOGICAL(LGT), INTENT(IN) :: mask
  END SUBROUTINE Swap
END INTERFACE
```

Masked swap.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE225 from "./_Swap_test_7.md";

<EXAMPLE225 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 8

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, mask)
    INTEGER(Int8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(INOUT) :: a(:), b(:)
    LOGICAL(LGT), INTENT(IN) :: mask(:)
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE256 from "./_Swap_test_8.md";

<EXAMPLE256 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 9

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Swap(a, b, mask)
    INTEGER(Int8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(INOUT) :: a(:, :), b(:, :)
    LOGICAL(LGT), INTENT(IN) :: mask(:, :)
  END SUBROUTINE Swap
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE285 from "./_Swap_test_9.md";

<EXAMPLE285 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
