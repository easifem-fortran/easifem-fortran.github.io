# JacobiGradientEval

Evaluate gradient of Jacobi polynomials.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEval(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha > -1.0
    REAL(DFP), INTENT(IN) :: beta
    !! beta > -1.0
    REAL(DFP), INTENT(IN) :: x
    !! point
    REAL(DFP) :: ans
    !! Derivative of Jacobi polynomial of order n at point x
  END FUNCTION JacobiGradientEval
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEval(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x))
    !! Derivative of Jacobi polynomial of order n at x
  END FUNCTION JacobiGradientEval
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE44 from "./_JacobiGradientEval_test_1.md";

<EXAMPLE44 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
