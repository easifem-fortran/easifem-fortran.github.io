# SetTriu

This subroutine sets the lower triangular part of matrix.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE SetTriu(A, lu, diagNo)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: A(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: lu(:, :)
  END SUBROUTINE SetTriu
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./_SetTriu_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
