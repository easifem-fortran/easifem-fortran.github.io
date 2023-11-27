# LogSpace

Returns a vector of logrithmically spaced entries.

```fortran
a = logspace(a, b, N, endPoint, base)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Logspace(a, b, N, endPoint, base) RESULT(Ans)
    REAL(REAL32), INTENT(IN) :: a
    !! left end of 1D domain
    REAL(REAL32), INTENT(IN) :: b
    !! right end of 1D domain
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: N
    !! Number of points including a and b
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: endPoint
    !! default is true, if true then include endpoint
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: base
    !! default is 10
    REAL(REAL32), ALLOCATABLE :: ans(:)
    !! Number of nodes in mesh
  END FUNCTION Logspace
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_LogSpace_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
