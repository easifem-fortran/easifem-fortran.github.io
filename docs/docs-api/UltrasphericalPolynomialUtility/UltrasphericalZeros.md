# UltrasphericalZeros

Zeros of Ultraspherical polynomials.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION UltrasphericalZeros(n, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP) :: ans(n)
  END FUNCTION UltrasphericalZeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_UltrasphericalZeros_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
