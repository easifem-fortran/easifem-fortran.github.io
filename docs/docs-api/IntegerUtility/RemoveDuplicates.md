# RemoveDuplicates

This routine removes duplicate entries from the set of integer.

Calling example:

```fortran
CALL RemoveDuplicates(avec)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE SUBROUTINE RemoveDuplicates_1d(obj)
  INTEGER(Int8|Int16|Int32|Int64), ALLOCATABLE, INTENT(INOUT) :: obj(:)
END SUBROUTINE RemoveDuplicates_1d
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_RemoveDuplicates_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
