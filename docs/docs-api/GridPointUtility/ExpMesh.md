# ExpMesh

Generates exponential mesh.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE ExpMesh
  MODULE PURE FUNCTION ExpMesh(rmin, rmax, a, N) RESULT(Ans)
    REAL(REAL32), INTENT(IN) :: rmin
    !! left end of 1D domain
    REAL(REAL32), INTENT(IN) :: rmax
    !! right end of 1D domain
    REAL(REAL32), INTENT(IN) :: a
    !! Ratio of largest to smallest element, a should be positive
    !! a = 1, then we get uniform mesh
    INTEGER(I4B), INTENT(IN) :: N
    !! Number of elements present in mesh
    REAL(REAL32) :: ans(N + 1)
    !! Number of nodes in mesh
  END FUNCTION ExpMesh
END INTERFACE ExpMesh
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_ExpMesh_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
