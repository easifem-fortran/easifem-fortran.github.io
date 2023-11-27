# UnscaledLobattoGradientEvalAll

Evaluate gradient of UnscaledLobatto polynomials upto order n.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoGradientEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans(1:n + 1)
  END FUNCTION UnscaledLobattoGradientEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./_UnscaledLobattoGradientEvalAll_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UnscaledLobattoGradientEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x), 1:n + 1)
  END FUNCTION UnscaledLobattoGradientEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE32 from "./_UnscaledLobattoGradientEvalAll_test_2.md";

<EXAMPLE32 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
