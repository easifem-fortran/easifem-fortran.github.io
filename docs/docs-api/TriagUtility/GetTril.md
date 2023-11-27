# GetTril

This subroutine returns the lower triangle part of a matrix.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE GetTril(A, diagNo, lu)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    INTEGER(INT64), INTENT(OUT) :: lu(SIZE(A, 1), SIZE(A, 2))
  END SUBROUTINE GetTril
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE7 from "./_GetTril_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE34 from "./_GetTril_test_2.md";

<EXAMPLE34 />

</TabItem>  

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
