# GetField

This routine returns the field from the string.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getField(i, chars, field, ierr)
    INTEGER(I4B), INTENT(IN) :: i
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(:), ALLOCATABLE, INTENT(OUT) :: field
    INTEGER(I4B), INTENT(OUT), OPTIONAL :: ierr
  END SUBROUTINE getField
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE10 from "./_GetField_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="example 2" label="️܀ Example 2">

import EXAMPLE11 from "./_GetField_test_2.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
