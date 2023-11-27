# UltrasphericalGradientEval

Evaluate gradient of Ultraspherical polynomials.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalGradientEval(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION UltrasphericalGradientEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE44 from "./_UltrasphericalGradientEval_test_1.md";

<EXAMPLE44 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalGradientEval(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x))
  END FUNCTION UltrasphericalGradientEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE45 from "./_UltrasphericalGradientEval_test_2.md";

<EXAMPLE45 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
