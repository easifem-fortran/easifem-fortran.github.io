# GetName

Return the name  of reference element.

The returned name is an integer code.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION refelem_GetName(obj) RESULT(ans)
    CLASS(RefLine_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION refelem_GetName
END INTERFACE
```
</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_GetName_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>



