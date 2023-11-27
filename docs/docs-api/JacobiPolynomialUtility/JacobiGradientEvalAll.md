# JacobiGradientEvalAll

Evaluate gradient of Jacobi polynomials.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalAll(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha > -1.0
    REAL(DFP), INTENT(IN) :: beta
    !! beta > -1.0
    REAL(DFP), INTENT(IN) :: x
    !! point
    REAL(DFP) :: ans(n + 1)
    !! Derivative of Jacobi polynomial of order n at point x
  END FUNCTION JacobiGradientEvalAll
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalAll(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Derivative of Jacobi polynomial of order n at x
  END FUNCTION JacobiGradientEvalAll
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE41 from "./_JacobiGradientEvalAll_test_1.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE56 from "./_JacobiGradientEvalAll_test_2.md";

<EXAMPLE56 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
