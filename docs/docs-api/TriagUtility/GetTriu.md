# GetTriu

This subroutine returns the upper triangle part of an int vector.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE GetTriu(A, diagNo, lu)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    REAL(REAL32), INTENT(OUT) :: lu(SIZE(A, 1), SIZE(A, 2))
  END SUBROUTINE GetTriu
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE7 from "./_GetTriu_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE26 from "./_GetTriu_test_2.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
