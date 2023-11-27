# HeapSort

This subroutine implements [heap sort](https://www.geeksforgeeks.org/heap-sort/) algorithm to sort the array inplace.

Calling example:

```fortran
CALL HeapSort(array)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE HeapSort(array)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)
  END SUBROUTINE HeapSort
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_HeapSort_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
