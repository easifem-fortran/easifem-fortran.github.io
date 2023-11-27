# Eye

This function creates an indentity matrix.

Calling example:

```fortran
amat = Eye(m, DataType)
```

- `m` is the size of matrix
- `DataType` is the data type of returned matrix. DataType can be
  - `1.0_Real32`
  - `1.0_Real64`
  - `1_Int8`
  - `1_Int16`
  - `1_Int32`
  - `1_Int64`

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
MODULE PURE FUNCTION Eye(m, DataType) RESULT(ans)
  INTEGER(I4B), INTENT(IN) :: m
  Int8| Int16| Int32 | Int64 | Real32 | Real64, INTENT(IN) :: DataType
  Int8| Int16| Int32 | Int64 | Real32 | Real64 :: ans(m, m)
END FUNCTION Eye
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE22 from "./_Eye_test_1.md";

<EXAMPLE22 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
