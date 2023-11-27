# Inv

Returns inverse of matrix.

Calling example:

```fortran
CALL Inv(A(:,:), InvA(:,:))
CALL Inv(A(:,:,:), InvA(:,:,:))
```

:::note
InvA should be allocated.
:::

:::caution
Currently, Inv can compute inverse of matrix upto 4 by 4. To calculate inverse of big matrix use the following strategy:

First get LU decomposition:

```fortran
CALL GetLU(A, LU, IPIV)
```

Then, calculate inverse by

```fortran
CALL GetLU(A, invA, IPIV)
```

:::

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Inv(invA, A)
    REAL(DFP), INTENT(INOUT) :: invA(:, :)
    REAL(DFP), INTENT(IN) :: A(:, :)
  END SUBROUTINE Inv
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE35 from "./_Inv_test_1.md";

<EXAMPLE35 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Inv(invA, A)
    REAL(DFP), INTENT(INOUT) :: invA(:, :, :)
    REAL(DFP), INTENT(IN) :: A(:, :, :)
  END SUBROUTINE Inv
END INTERFACE
```
