# GetSym

This function makes the symmetric matrix by using lower or part of the matrix.

:::note
In terms of functionality `GetSym` is same as `Sym`.
This subroutine does not allocate any additional memory, so it is efficient.
:::

- The following call will form symmetric matrix by using the upper triangle part of matrix `B`

```fortran title="Sym from Upper part"
CALL GetSym(mat=B, from="U")
```

- The following call will form symmetric matrix by using the lower triangle part of matrix `B`

```fortran title="Sym from Lower part"
CAL GetSym(mat=B, from="L")
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE SUBROUTINE GetSym(mat, from)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: mat(:, :)
    CHARACTER(1), INTENT(IN) :: from
    !! from = "U", then upper triangular part must be provided
    !! from = "L", then lower triangular part must be provided
  END SUBROUTINE GetSym
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE15 from "./_GetSym_test_1.md";

<EXAMPLE15 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
