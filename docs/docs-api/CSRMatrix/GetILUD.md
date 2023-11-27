# GetILUD

This routine computes the ILU factorization with standard threshold dropping: at ith step of elimination, an element `a(i,j)` in row i is dropped if it satisfies the following criterion:

$$
\vert a(i,j) \vert < \text{ tol } \times  \tilde{a}_{i},
$$

where $\tilde{a}_{i}$ is average magnitude of elements in row i of `A`, which is given by:

$$
\tilde{a}_{i} = \frac{1}{{nnz}_{i}}\sum_{j}^{nnz_{i}}{\vert a(i,j) \vert}
$$

where, ${nnz}_{i}$ is the number of nonzeros in ith row.

- There is no control on memory size required for the factors as is done in ILUT.
- This routine computes also various diagonal compensation ILU's such, MILU. These are defined through the parameter `alpha`.

:::caution
All diagonal elements of the input matrix must be nonzero.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface 1" default>

```fortran
INTERFACE
MODULE SUBROUTINE GetILUD(obj, ALU, JLU, JU, alpha, droptol)
TYPE(CSRMatrix*), INTENT(INOUT) :: obj
REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)
INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)
INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)
REAL(DFP), INTENT(IN) :: alpha
REAL(DFP), INTENT(IN) :: droptol
END SUBROUTINE GetILUD
END INTERFACE
```

- `alpha` = diagonal compensation parameter, alpha `*` (sum of all dropped out elements in a given row) is added to the diagonal element of U of the factorization, therefore:
  - `alph = 0` means the scheme is ILU with threshold, that is, no compensation
  - `alph = 1` means the scheme is MILU with threshold.

- `droptol` = Threshold parameter for dropping small terms in the factorization. During the elimination, a term `a(i,j)` is dropped whenever `abs (a(i,j)) .lt. tol`
- `nnz` the number of NNZ elements in the row.

- `obj` matrix stored in Compressed Sparse Row format.

- `ALU,JLU`, matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ALU(1:n) ) is inverted. Each ith row of the ALU,JLU matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U.

- `JU` = integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU.
- `droptol` it governs the theresholding in L and U. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped.

</TabItem>

<TabItem value="iface2" label="܀ Interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUD(obj, Pmat, alpha, droptol)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: droptol
  END SUBROUTINE GetILUD
END INTERFACE
```

:::info
This routine call interface 1, and returns ILU factorization in Pmat, which is an instance of `CSRMatrix_`
:::

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
