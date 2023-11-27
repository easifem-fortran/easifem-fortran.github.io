# JacobiNormSQRRatio

This function returns the ratio of Square norm of Jacobi polynomial `n+1/n`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalNormSQRRatio(n, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP) :: ans
  END FUNCTION UltrasphericalNormSQRRatio
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE27 from "./_UltrasphericalNormSQRRatio_test_1.md";

<EXAMPLE27 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
