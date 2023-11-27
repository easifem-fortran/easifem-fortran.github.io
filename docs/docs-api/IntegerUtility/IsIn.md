# IsIn

This routine returns a vector of bool if an integer set is a subset of another integer set.

This function returns a vector of booleans. If a(i) is inside the b, then ans(i) is true, otherwise false.

Calling example:

```fortran
abool = [1,2,3] .in. [1,3,4,5,2]
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION IsIn(a, b) RESULT(Ans)
  INTEGER(INT8| Int16 | Int32 | Int64), INTENT(IN) :: a(:)
  INTEGER(INT8| Int16 | Int32 | Int64), INTENT(IN) :: b(:)
  LOGICAL(LGT) :: ans(size(a))
END FUNCTION IsIn
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./_IsIn_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
