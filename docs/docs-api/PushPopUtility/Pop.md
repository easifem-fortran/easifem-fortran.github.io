# Pop

Remove an entry from a vector at a specific location.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Pop(vec, pos) RESULT(ans)
    INTEGER(Int8|Int16|In32|Int64|Real32|Real64), INTENT(IN) :: vec(:)
    INTEGER(I4B), INTENT(IN) :: pos
    INTEGER(Int8|Int16|In32|Int64|Real32|Real64) :: ans(MAX(SIZE(vec) - 1, 0))
  END FUNCTION Pop
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_Pop_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
