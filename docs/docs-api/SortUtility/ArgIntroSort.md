# ArgIntroSort

This routine performs an indirect sort on an array.

Reference: [Coretran](https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90)

It returns the integer array which can be used for obtaining the sorted array.

Calling example:

```fortran
CALL ArgIntroSort(array, arg)
```

Then, `array(arg)` will be sorted in increasing order.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE ArgIntroSort(array, arg)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)
    INTEGER(I4B), INTENT(OUT) :: arg(0:)
  END SUBROUTINE ArgIntroSort
```

- Here, entries of `array` are NOT modified by the routine.
- `arg` should be allocated by the user
- `array(arg)` returns the sorted array.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE20 from "./_ArgIntroSort_test_1.md";

<EXAMPLE20 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
