# StringToUID

This function returns a unique number for a given string.

[Reference](https://cp-algorithms.com/string/string-hashing.html)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION StringToUID_PolyRoll(charVar) RESULT(Ans)
    CHARACTER(*), INTENT(IN) :: charVar
    INTEGER(I4B) :: ans
  END FUNCTION StringToUID_PolyRoll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_StringToUID_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
