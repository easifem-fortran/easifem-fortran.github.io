# Size

Returns the number of tuples.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>

<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(n, d) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n, d
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_Size_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(n, d, upto) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n, d
    LOGICAL(LGT), INTENT(IN) :: upto
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE41 from "./_Size_test_2.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
