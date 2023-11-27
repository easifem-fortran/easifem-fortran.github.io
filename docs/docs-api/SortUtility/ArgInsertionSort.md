# ArgInsertionSort

This routine performs an indirect insertion sort on an array.

It returns the integer array which can be used for obtaining the sorted array.

Calling example:

```fortran
CALL ArgInsertionSort(array, arg, low, high)
```

Then, `array(arg)` will be sorted in increasing order.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 MODULE PURE SUBROUTINE ArgInsertionSort(array, arg, low, high)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)
    INTEGER(I4B), INTENT(INOUT) :: arg(:)
    INTEGER(I4B), INTENT(IN) :: low
    INTEGER(I4B), INTENT(IN) :: high
  END SUBROUTINE ArgInsertionSort 
```

- Here, entries of `array` are NOT modified by the routine.
- `arg` should be allocated by the user
- `array(arg)` returns the sorted array.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE21 from "./_ArgInsertionSort_test_1.md";

<EXAMPLE21 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
