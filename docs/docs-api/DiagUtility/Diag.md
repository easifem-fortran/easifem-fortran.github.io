# Diag

This function creates a diagonal matrix.

The generic syntax is given below.

```fortran title="Diag syntax"
diagMat = Diag(d)
```

- where, `d` denotes the main diagonal of the `diagMat`.
- `d` can be a vector of `Real32, Real64, Int8, Int16, Int32, Int64`
- The result is always `n x n` matrix of `REAL(DFP)`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="example 1" label="܀ Example 1">

import EXAMPLE48 from "./_Diag_test_1.md";

<EXAMPLE48 />

</TabItem>

<TabItem value="example 2" label="܀ Example 2">

import EXAMPLE49 from "./_Diag_test_3.md";

<EXAMPLE49 />

</TabItem>

<TabItem value="close" label="↢ Close" default>

</TabItem>
</Tabs>

:::info
We can also use `Diag` to access the diagonal of the matrix. The syntaxt is given below:
:::

```fortran
d = Diag(mat, diagNo)
```

where,

- `mat` is a two-dimensional square matrix
- `diagNo` is an integer, which stands for the diagonal
- `diagNo == 0` denotes the main diagonal
- `diagNo > 0` denotes the super-diagonal
- `diagNo < 0` denotes the sub diagonal

<Tabs>

<TabItem value="example" label="܀ See example">

import EXAMPLE66 from "./_Diag_test_2.md";

<EXAMPLE66 />

</TabItem>

<TabItem value="close" label="↢ Close" default>

</TabItem>
</Tabs>
