# InsertionSort

Insertion sort (in-place) algorithm.

Reference: [coretran](https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90)

Calling example:

```fortran
CALL InsertionSort(array, low, high)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE SUBROUTINE InsertionSort(array, low, high)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)
  INTEGER(I4B), INTENT(IN) :: low
  INTEGER(I4B), INTENT(IN) :: high
END SUBROUTINE InsertionSort
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE18 from "./_InsertionSort_test_1.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
