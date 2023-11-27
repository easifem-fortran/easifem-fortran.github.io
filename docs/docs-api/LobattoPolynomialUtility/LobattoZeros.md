# LobattoZeros

Returns the zeros of Lobatto polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LobattoZeros(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Lobatto polynomial, should be greater than equal to 2
    REAL(DFP) :: ans(n)
    !!
  END FUNCTION LobattoZeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_LobattoZeros_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
