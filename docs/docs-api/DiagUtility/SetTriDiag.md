# SetTriDiag

`SetTriDiag` routine can be used for setting the three diagonals (main, sub
diagonal, superdiagonal) of a square dense matrix.

The generic call is given below.

```fortran
CALL SetTriDiag( mat, d, da, db)
```

where,

- `mat(:,:)` is a square matrix of `Real(DFP)`
- `d(:)` is a vector of `Real32 | Real64 | Int8 | Int16 | Int32 | Int64`, and it stands for main diagonal
- If size of `d` is 1, then it means the diagonal values are constant, otherwise the size of `d` should be same as the main diagonal of matrix `mat`.
- `da(:) is a vector of`Real32 | Real64 | Int8 | Int16 | Int32 | Int64`, and it stands for first superdiagonal. Its size should be (n-1).
- `db(:) is a vector of`Real32 | Real64 | Int8 | Int16 | Int32 | Int64`, and it stands for first subdiagonal. Its size should be (n-1).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ Example">

import EXAMPLE21 from "./_SetTriDiag_test_1.md";

<EXAMPLE21 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
