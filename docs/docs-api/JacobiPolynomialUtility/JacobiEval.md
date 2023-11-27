# JacobiEval

Evaluate Jacobi polynomials of order n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEval(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiEval
END INTERFACE
```

Evaluate Jacobi polynomial of order n at single points.

- N, the order of polynomial to compute.
- alpha, beta are parameters
- x: the point at which the polynomials are to be evaluated.

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEval(n, alpha, beta, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiEval
END INTERFACE
```

- N is  order of polynomial to compute.
- alpha, beta are parameters
- x: the point at which the polynomials are to be evaluated.
- ans, the values of the Jacobi polynomials at the several points.

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE46 from "./_JacobiEval_test_1.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE60 from "./_JacobiEval_test_2.md";

<EXAMPLE60 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
