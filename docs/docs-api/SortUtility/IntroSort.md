# IntroSort

Intro sort (in-place) algorithm.

Reference: [coretran](https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90)

Calling example:

```fortran
CALL IntroSort(array)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE SUBROUTINE IntroSort(array)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)
END SUBROUTINE IntroSort
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE18 from "./_IntroSort_test_1.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
