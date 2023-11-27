# UltrasphericalEvalAll

Evaluate Ultraspherical polynomials from order = 0 to n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEvalAll(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans(n + 1)
    !! Evaluate Ultraspherical polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION UltrasphericalEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE57 from "./_UltrasphericalEvalAll_test_1.md";

<EXAMPLE57 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEvalAll(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! Evaluate Ultraspherical polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION UltrasphericalEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE71 from "./_UltrasphericalEvalAll_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
