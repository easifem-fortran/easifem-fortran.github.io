# SetDiag

`SetDiag` routine can be used for setting the diagonal entries of a square dense matrix. The generic call is given below.

```fortran
CALL SetDiag( mat, d, diagNo )
```

where,

- `mat(:,:)` is a square matrix of `Real(DFP)`
- `d(:)` is a vector of `Real32 | Real64 | Int8 | Int16 | Int32 | Int64`.
- If size of `d` is 1, then it means the diagonal values are constant, otherwise the size of `d` should be same as the corresponding diagonal of matrix `mat`. For example, if `d` is first sub diagonal, then its size should be `n-1` (where, n is size of mat).
- `diagNo` is an integer, which stands for the diagonal number.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="܀ See example">

import EXAMPLE95 from "./_SetDiag_test_1.md";

<EXAMPLE95 />

</TabItem>

<TabItem value="close" label="↢ Close" default>

</TabItem>
</Tabs>
