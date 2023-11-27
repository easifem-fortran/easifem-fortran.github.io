# UltrasphericalNormSQR

Square norm of Ultraspherical polynomial.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalNormSQR(n, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP) :: ans
  END FUNCTION UltrasphericalNormSQR
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_UltrasphericalNormSQR_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
