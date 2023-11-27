# LinSpace

Returns a linearly spaced vector.

```fortran
avec = linspace(a=1.0, b=10.0, N=11)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LinSpace
  MODULE PURE FUNCTION Linspace(a, b, N) RESULT(Ans)
    REAL(Real32 | Real64) , INTENT(IN) :: a
    !! left end of 1D domain
    REAL(Real32 | Real64) , INTENT(IN) :: b
    !! right end of 1D domain
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: N
    !! Number of points including a and b
    REAL(Real32 | Real64) , ALLOCATABLE :: ans(:)
    !! Number of nodes in mesh
  END FUNCTION Linspace
END INTERFACE LinSpace
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_LinSpace_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
