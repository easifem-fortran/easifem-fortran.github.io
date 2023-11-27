# Random_Number

Generate a random realvector.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interfaces

<Tabs>
<TabItem value="interface" label="܀ Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Random_Number(obj, tsize)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: tsize
  END SUBROUTINE Random_Number
END INTERFACE
```

</TabItem>

<TabItem value="interface2" label="܀ Interface 2" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Random_Number(obj, tsize)
    TYPE(RealVector_), ALLOCATABLE, INTENT(INOUT) :: obj(:)
    INTEGER(I4B), INTENT(IN) :: tsize(:)
  END SUBROUTINE Random_Number
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE7 from "./_Random_Number_test_1.md";

<EXAMPLE7 />

</TabItem>


<TabItem value="example 2" label="️܀ Example 2">

import EXAMPLE8 from "./_Random_Number_test_2.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

