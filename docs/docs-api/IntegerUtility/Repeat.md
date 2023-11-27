# Repeat

Repeat a vector.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION Repeat(Val, rtimes) RESULT(Ans)
  INTEGER(Int8|Int16|Int32|Int64|Real32|Real64), INTENT(IN) :: Val(:)
  INTEGER(I4B), INTENT(IN) :: rtimes
  INTEGER(Int8| Int16 | Int32 | Int64| Real32 | Real64) :: Ans(SIZE(Val) * rtimes)
END FUNCTION Repeat
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_Repeat_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
