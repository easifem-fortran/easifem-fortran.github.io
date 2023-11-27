# In

This routine returns true if an integer set is a subset of another integer set.

Calling example:

```fortran
abool = [1,2,3] .in. [1,3,4,5,2]
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION In(a, b) RESULT(Ans)
  INTEGER(INT8| Int16 | Int32 | Int64), INTENT(IN) :: a(:)
  INTEGER(INT8| Int16 | Int32 | Int64), INTENT(IN) :: b(:)
  LOGICAL(LGT) :: ans
END FUNCTION In
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./_In_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION In(a, b) RESULT(Ans)
  INTEGER(INT8), INTENT(IN) :: a
  INTEGER(INT8), INTENT(IN) :: b(:)
  LOGICAL(LGT) :: ans
END FUNCTION In
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE44 from "./_In_test_2.md";

<EXAMPLE44 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
