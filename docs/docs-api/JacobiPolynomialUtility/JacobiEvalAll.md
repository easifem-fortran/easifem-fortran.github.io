# JacobiEvalAll

Evaluate Jacobi polynomials from order = 0 to n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEvalAll(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans(n + 1)
    !! Evaluate Jacobi polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION JacobiEvalAll
END INTERFACE
```

Evaluate Jacobi polynomials from order = 0 to n at single points

- N, the highest order polynomial to compute. Note that polynomials 0 through N will be computed.
- alpha, beta are parameters
- x: the point at which the polynomials are to be evaluated.
- ans(1:N+1), the values of the first N+1 Jacobi polynomials at x

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEvalAll(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Evaluate Jacobi polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION JacobiEvalAll
END INTERFACE
```

Evaluate Jacobi polynomials from order = 0 to n at several points

- N, the highest order polynomial to compute. Note that polynomials 0 through N will be computed.
- alpha, beta are parameters
- x: the point at which the polynomials are to be evaluated.
- ans(M,1:N+1), the values of the first N+1 Jacobi polynomials at the point

## Examples

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE57 from "./_JacobiEvalAll_test_1.md";

<EXAMPLE57 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE71 from "./_JacobiEvalAll_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
