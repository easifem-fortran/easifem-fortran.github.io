# DiagIndx

`DiagIndx` returns the indices of elements along a diagonal of a square or rectangle matrix. The indices are returned a two dimensional array of integers.
This array has two columns. First column stands for the row index and second column stands for column index.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran title="Interface"
INTERFACE
  MODULE PURE FUNCTION DiagIndx(m, n, diagNo) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: m
    !! number of rows in matrix
    INTEGER(I4B), INTENT(IN) :: n
    !! number of columns in a matrix
    INTEGER(I4B), INTENT(IN) :: diagNo
    !! diagonal number
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
    !! size of diagonal
  END FUNCTION DiagIndx
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ Example">

import EXAMPLE98 from "./_DiagIndx_test_1.md";

<EXAMPLE98 />

</TabItem>

<TabItem value="close" label="↢ Close">

</TabItem>
</Tabs>
