# TriDiag

Create a tridiagonal matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 MODULE PURE FUNCTION Tridiag(d, da, db, diagNo) RESULT(Ans)
    INTEGER(INT8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(IN) :: d(:)
    !! main diagonal
    INTEGER(INT8| Int16 | Int32 | Int64 | Real32 | Real64), INTENT(IN) :: da(:)
    !! super diagonal
    INTEGER(INT8| Int16 | Int32 | Int64 | Real32 | Real64) :: db(:)
    !! subdiagonal
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: diagNo
    !! sub and super diagonal number, default is 1
    !! diagNo should be positive
    REAL(DFP) :: ans(SIZE(d), SIZE(d))
  END FUNCTION Tridiag
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE29 from "./_TriDiag_test_1.md";

<EXAMPLE29 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
