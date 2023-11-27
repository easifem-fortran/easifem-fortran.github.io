# JacobiInvTransform

Discrete Inverse Jacobi transform.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiInvTransform(n, alpha, beta, coeff, x) &
        & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! n+1  coefficient (modal values)
    REAL(DFP), INTENT(IN) :: x
    !! x point in physical space
    REAL(DFP) :: ans
    !! value in physical space
  END FUNCTION JacobiInvTransform
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiInvTransform(n, alpha, beta, coeff, x) &
        & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! n+1  coefficient (modal values)
    REAL(DFP), INTENT(IN) :: x(:)
    !! x point in physical space
    REAL(DFP) :: ans(SIZE(x))
    !! value in physical space
  END FUNCTION JacobiInvTransform
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE55 from "./_JacobiInvTransform_test_1.md";

<EXAMPLE55 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE70 from "./_JacobiInvTransform_test_2.md";

<EXAMPLE70 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
