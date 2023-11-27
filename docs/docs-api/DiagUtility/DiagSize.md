# DiagSize

`DiagSize` returns the size of the diagonal. It works for both rectangle and square arrays.

For example,

```fortran
ans = DiagSize(n=3, diagNo=1)
```

Returns the size of first super diagonal of a square matrix of shape (3,3).

And,

```fortran
ans = DiagSize(n=3, diagNo=-1)
```

Returns the size of first sub diagonal of a square matrix of shape (3,3).

```fortran
ans = DiagSize(m=4, n=7, diagNo = 1)
```

Returns the size of first super diagonal of a rectangle matrix of shape (4,7). Here m and n stand for number of rows and cols, respectively.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE52 from "./_DiagSize_test_1.md";

<EXAMPLE52 />

</TabItem>

<TabItem value="close" label="↢ Close" default>

</TabItem>
</Tabs>
