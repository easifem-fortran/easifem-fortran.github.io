# LowerCase

This is a function which converts a string into lower case.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LowerCase(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(LEN(chars)) :: ans
  END FUNCTION LowerCase
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_LowerCase_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
