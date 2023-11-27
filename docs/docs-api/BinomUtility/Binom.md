# Binom

Thi function calculates the binomial coefficients.

$$
C_{k}^{n}
$$

<span class="badge badge--success"> Usage </span>

```fortran
ans = Binom( n=10, k=2, kind=1.0_Real32 )
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ See Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION Binom(n, k, kind) RESULT(ans)
    INTEGER(Int8 | Int16 | Int32 | Int64), INTENT(IN) :: n
    !! n is integer, should be a positive number and greater or equal to k
    INTEGER(Int8 | Int16 | Int32 | Int64), INTENT(IN) :: k
    !! k should be less than or equal to n
    REAL(Real32 | Real64), INTENT(IN) :: kind
    !! kind of output
    REAL(Real32 | Real64) :: ans
  END FUNCTION Binom
END INTERFACE
```

- The input arguments `n` and `k` can be `Int8, Int16, Int32, Int64`
- The output is always a real number
- If kind is `Real32` then the output is `Real32`
- If the kind is `Real64` then the output is `Real64`

</TabItem>

<TabItem value="example" label="܀ See example">

import EXAMPLE48 from "./_Binom_test_1.md";

<EXAMPLE48 />

</TabItem>

<TabItem value="close" label="↢ Close">

</TabItem>
</Tabs>
