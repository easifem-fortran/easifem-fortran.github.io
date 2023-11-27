# UnscaledLobattoEvalAll

Evaluate all UnscaledLobatto polynomials upto order n.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans(n + 1)
    !! Evaluate UnscaledLobatto polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION UnscaledLobattoEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_UnscaledLobattoEvalAll_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Evaluate UnscaledLobatto polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION UnscaledLobattoEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE32 from "./_UnscaledLobattoEvalAll_test_2.md";

<EXAMPLE32 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
