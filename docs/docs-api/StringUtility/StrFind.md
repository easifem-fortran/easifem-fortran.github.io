# StrFind

This routine finds the pattern inside the string, and returns the indices.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE strFind(chars, pattern, indices)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(IN) :: pattern
    INTEGER(I4B), ALLOCATABLE, INTENT(OUT) :: indices(:)
  END SUBROUTINE strFind
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_StrFind_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
