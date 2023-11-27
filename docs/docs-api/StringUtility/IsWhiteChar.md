# isWhiteChar

This function returns true when the given char is a space or a tab.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isWhiteChar(char) RESULT(Ans)
    CHARACTER(1), INTENT(IN) :: char
    LOGICAL(LGT) :: ans
  END FUNCTION isWhiteChar
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_IsWhiteChar_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
