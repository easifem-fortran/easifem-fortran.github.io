# Chebyshev1EvalAll

Evaluate Chebyshev1 polynomials from order = 0 to n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1EvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! Highest order of polynomial.
    !! Polynomials from 0 to n will be computed.
    REAL(DFP), INTENT(IN) :: x
    !! Point of evaluation, $x \in [-1, 1]$
    REAL(DFP) :: ans(n + 1)
    !! Evaluate Chebyshev1 polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION Chebyshev1EvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_Chebyshev1EvalAll_test_2.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1EvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! Highest order of polynomial.
    !! Polynomials from 0 to n will be computed.
    REAL(DFP), INTENT(IN) :: x(:)
    !! number of points, SIZE(x)=M
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! shape (M,N+1)
  END FUNCTION Chebyshev1EvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE46 from "./_Chebyshev1EvalAll_test_1.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
