# Chebyshev1Eval

Evaluate Chebyshev1 polynomials of order n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1Eval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation, it should be between -1 and 1
    REAL(DFP) :: ans
    !! Evaluate Chebyshev1 polynomial of order n at point x
  END FUNCTION Chebyshev1Eval 
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_Chebyshev1Eval_test_1.md";

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
  MODULE PURE FUNCTION Chebyshev1Eval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: x(:)
    !! several points of evaluation
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Chebyshev1 polynomial of order n at points x
  END FUNCTION Chebyshev1Eval 
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_Chebyshev1Eval_test_2.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
