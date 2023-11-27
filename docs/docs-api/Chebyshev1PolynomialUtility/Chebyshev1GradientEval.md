# Chebyshev1GradientEval

Evaluate gradient of Chebyshev1 polynomials.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1GradientEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION Chebyshev1GradientEval
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1GradientEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x))
  END FUNCTION Chebyshev1GradientEval
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE44 from "./_Chebyshev1GradientEval_test_1.md";

<EXAMPLE44 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
