# Triu

This function returns the upper triangle part of a matrix.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION Triu(A, diagNo) RESULT(ans)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    !! diagNo>0 means super diagonal
    !! diagNo<0 means subdiagonal
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64) :: ans(SIZE(A, 1), SIZE(A, 2))
  END FUNCTION Triu
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_Triu_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION Triu_12(A, flate, diagNo) RESULT(ans)
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: A(:, :)
  LOGICAL(LGT), INTENT(IN) :: flate
  !! This variable is only for creating unique interface
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! diagonal number, default = 0
    !! diagNo>0 means super diagonal
    !! diagNo<0 means subdiagonal
  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE :: ans(:)
END FUNCTION Triu_12
```

In this case the upper triangular part is returned in flat form. That is, the first `n` entries of `ans` denotes the main diagonal. Then next `n-1` entries denotes first super-diagonal, and so on.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./_Triu_test_2.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
