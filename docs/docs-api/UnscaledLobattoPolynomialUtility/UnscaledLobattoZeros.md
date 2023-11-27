# UnscaledLobattoZeros

Returns the zeros of UnscaledLobatto polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION UnscaledLobattoZeros(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of UnscaledLobatto polynomial, should be greater than equal to 2
    REAL(DFP) :: ans(n)
    !!
  END FUNCTION UnscaledLobattoZeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_UnscaledLobattoZeros_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
