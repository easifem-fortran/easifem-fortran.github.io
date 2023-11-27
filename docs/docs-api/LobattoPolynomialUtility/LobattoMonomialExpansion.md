# LobattoMonomialExpansion

Returns all the monomial expansion of a Lobatto polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoMonomialExpansion(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(1:n + 1)
  END FUNCTION LobattoMonomialExpansion
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_LobattoMonomialExpansion_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

- n : is the order of the polynomial
- ans(:) contains the coefficient of monomials for polynomial order=n
