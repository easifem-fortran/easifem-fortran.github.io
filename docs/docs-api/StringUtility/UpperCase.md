# UpperCase

This is a function which returns a string in upper case.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UpperCase(chars) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(LEN(chars)) :: ans
  END FUNCTION UpperCase
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_UpperCase_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
