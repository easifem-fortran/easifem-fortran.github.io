# GetILUDP

This routine computes ILUDP preconditioner: incomplete LU factorization with standard droppoing strategy.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUDP(obj, ALU, JLU, JU, alpha, droptol, &
    & permtol, mbloc, IPERM)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: droptol
    REAL(DFP), INTENT(IN) :: permtol
    INTEGER(I4B), INTENT(IN) :: mbloc
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: IPERM(:)
  END SUBROUTINE GetILUDP
END INTERFACE
```

- `droptol` is the tolerance used for dropping elements in L and U. elements are dropped if they are .lt. norm(row) x droptol row = row being eliminated
- `permtol` is the tolerance ratio used for determning whether to permute two columns. Two columns are permuted only when `abs(a(i,j))*permtol .gt. abs(a (i,i))`

:::info
permtol = 0 means never permute, and a good values 0.1 to 0.01]
:::

- `mbloc`, if desired, permuting can be done only within the diagonal blocks of size mbloc. Useful for PDE problems with several degrees of freedom. If feature not wanted take mbloc=n.
- `iperm` contains the permutation arrays, `iperm(1:n)` old numbers of unknowns, `iperm(n+1:2\*n)` reverse permutation for new unknowns.
- `abs(a(i,j)) < droptol`, that is, average magnitude of elements in row i of A
- `alpha` is diagonal compensation parameter, alph `*` (sum of all dropped out elements in a given row) is added to the diagonal element of U of the factorization
  - alph = 0 means the scheme is ILU with threshold,
  - alph = 1 means the scheme is MILU with threshold.
- `droptol` is Threshold parameter for dropping small terms in the factorization. During the elimination, a term a(i,j) is dropped whenever `abs (a(i,j)) .lt. droptol`
- `obj` matrix stored in Compressed Sparse Row format.

- `ALU,JLU`, matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ALU(1:n) ) is inverted. Each ith row of the ALU,JLU matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U.
- `JU` integer array of length n containing the pointers to the beginning of each row of U in the matrix `ALU,JLU`.
- Theresholding in L and U as set by `droptol`. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of
  diagonal element in U) is dropped.

</TabItem>

<TabItem value="iface2" label="Interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUDP(obj, Pmat, alpha, droptol, &
    & permtol, mbloc, IPERM)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: droptol
    REAL(DFP), INTENT(IN) :: permtol
    INTEGER(I4B), INTENT(IN) :: mbloc
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: IPERM(:)
  END SUBROUTINE GetILUDP
END INTERFACE
```

This routine is similar to interface 1, but in this interface ILU factorization is returned as an instance of `CSRMatrix_`.

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
