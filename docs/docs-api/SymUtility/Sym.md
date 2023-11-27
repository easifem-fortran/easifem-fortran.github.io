# Sym

This function makes the symmetric matrix by using lower or part of the matrix.

:::note
Please use this function when the matrix is not too big, otherwise use [GetSym](GetSym.md).
:::

- The following call will form symmetric matrix by using the upper triangle part of matrix `B`

```fortran title="Sym from Upper part"
A = Sym(mat=B, from="U")
```

- The following call will form symmetric matrix by using the lower triangle part of matrix `B`

```fortran title="Sym from Lower part"
A = Sym(mat=B, from="L")
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
  MODULE PURE FUNCTION Sym(mat, from) RESULT(ans)
    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: mat(:, :)
    CHARACTER(1), INTENT(IN) :: from
    !! from = "U", then upper triangular part must be provided
    !! from = "L", then lower triangular part must be provided
    INTEGER(INT8) :: ans(SIZE(mat, 1), SIZE(mat, 2))
  END FUNCTION Sym
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE26 from "./_Sym_test_1.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
