# LagrangeDOF

This routine returns the number of dof for lagrange polynomial.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDOF(order, elemType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    INTEGER(I4B), INTENT(IN) :: elemType
    INTEGER(I4B) :: ans
    !! number of degree of freedom
  END FUNCTION LagrangeDOF
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_LagrangeDOF_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
