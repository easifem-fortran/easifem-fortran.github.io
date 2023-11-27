# UnscaledLobattoLeadingCoeff

Returns the leading coefficient of UnscaledLobatto polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoLeadingCoeff(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of UnscaledLobatto polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION UnscaledLobattoLeadingCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_UnscaledLobattoLeadingCoeff_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
