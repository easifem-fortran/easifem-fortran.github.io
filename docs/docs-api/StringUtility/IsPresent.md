# IsPresent

Returns true if a substring pattern is found within string.

:::note
This routine does not handle trailing spaces that can be eliminated by TRIM(). So,
strings should be trimmed when passing into function.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isPresent(chars, pattern) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(IN) :: pattern
    LOGICAL(LGT) :: ans
  END FUNCTION isPresent
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE17 from "./_IsPresent_test_1.md";

<EXAMPLE17 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
