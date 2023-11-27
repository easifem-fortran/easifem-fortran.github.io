# IsBlank

This function returns true when given string is completely blank.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isBlank(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    LOGICAL(LGT) :: ans
  END FUNCTION isBlank
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_IsBlank_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
