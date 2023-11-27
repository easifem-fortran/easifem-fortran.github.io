# GetILUT

This routine builds the ILUT precondition.

ILUT: Incomplete LU factorization with dual truncation strategy.

:::caution
The diagonal elements of the input matrix must be nonzero (at least 'structurally').
:::

Dual drop strategy works as follows:

- Theresholding in L and U as set by `droptol`. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped, that is

$$
\vert a_{ij} \vert < \text{ tol } \times \vert a_{ii} \vert
$$

:::note
you can use `droptol` between $0.001$ and $0.005$
:::

- Keeping only the largest `lfil` elements in the ith row of L and the largest `lfil` elements in the ith row of `U` (excluding diagonal elements).

:::note
You can use `lfil` between 5 ans 10. Higher value of lfil is more reliable.
:::

- Flexibility: one can use `droptol=0` to get a strategy based on keeping the largest elements in each row of `L` and `U`.
- Taking `droptol .ne. 0` but `lfil=n` will give the usual threshold strategy (however, fill-in is then not predictible).

Sparse matrix in modified sparse row storage format:

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUT(obj, ALU, JLU, JU, lfil, droptol)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)
    INTEGER(I4B), INTENT(IN) :: lfil
    REAL(DFP), INTENT(IN) :: droptol
  END SUBROUTINE GetILUT
END INTERFACE
```

- `obj` matrix stored in Compressed Sparse Row format.
- `lfil` is a fill-in parameter. Each row of L and each row of U will have a maximum of lfil elements (excluding the diagonal element). lfil must be .ge. 0.
- `droptol` sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- `ALU,JLU`, matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in `ALU(1:n)` ) is inverted. Each ith row of the `ALU,JLU` matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U.
- `JU` is an integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU.

Dual drop strategy works as follows:

- Theresholding in L and U as set by `droptol`. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped.
- Keeping only the largest `lfil` elements in the ith row of L and the largest `lfil` elements in the ith row of `U` (excluding diagonal elements).
- Flexibility: one can use `droptol=0` to get a strategy based on keeping the largest elements in each row of `L` and `U`.
- Taking `droptol .ne. 0` but `lfil=n` will give the usual threshold strategy (however, fill-in is then mpredictible).

</TabItem>

<TabItem value="iface2" label="܀ Interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUT(obj, Pmat, lfil, droptol)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat
    INTEGER(I4B), INTENT(IN) :: lfil
    REAL(DFP), INTENT(IN) :: droptol
  END SUBROUTINE GetILUT
END INTERFACE
```

This method is similar to interface 1, but in this case we return ILU factorization in `CSRMatrix_` form.

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
