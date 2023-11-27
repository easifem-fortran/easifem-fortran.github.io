# ReactEncode

This method converts the data into an react element.

## Interface 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION refelem_ReactEncode(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    TYPE(String) :: ans
  END FUNCTION refelem_ReactEncode
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_ReactEncode_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
