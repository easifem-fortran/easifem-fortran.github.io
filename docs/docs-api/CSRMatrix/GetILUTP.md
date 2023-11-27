# GetILUTP

Incomplete LU factorization with dual truncation mechanism

This routine builds the ILUTP precondition, that is ILUT with pivoting.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUTP(obj, ALU, JLU, JU, lfil, droptol, &
    & permtol, mbloc, IPERM)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)
    INTEGER(I4B), INTENT(IN) :: lfil
    REAL(DFP), INTENT(IN) :: droptol
    REAL(DFP), INTENT(IN) :: permtol
    INTEGER(I4B), INTENT(IN) :: mbloc
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: IPERM(:)
  END SUBROUTINE GetILUTP
END INTERFACE
```

- `obj` matrix stored in Compressed Sparse Row format.
- `lfil` denotes the fill-in parameter. Each row of L and each row of U will have a maximum of lfil elements (excluding the diagonal element). lfil must be .ge. 0.
- `droptol` sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- `permtol` = tolerance ratio used to determine whether or not to permute two columns. The columns i and j are permuted when `abs(a(i,j))*permtol .gt. abs(a(i,i))`.
- permtol=0 implies never permute; good values 0.1 to 0.01
- `mbloc` = if desired, permuting can be done only within the diagonal blocks of size mbloc. Useful for PDE problems with several degrees of freedom.. If feature not wanted take mbloc=n, that is size of problem.
- `iperm` = contains the permutation arrays. iperm(1:n) = old numbers of unknowns iperm(n+1:2\*n) = reverse permutation = new unknowns.

:::note
Due to the permuatation of cols of sparse matrix `obj`, we need to permuate the solution vectors after calling a LUSolve method. This is because, due to permuation, the col indices of `obj` (csrmatrix) has been changed. If you want to permute the matrix back to its original state then you can use the following loop (where, n is the number of rows in obj):
:::

```fortran
do k=obj%ia(1), obj%ia(n+1)-1
  obj%ja(k) = iperm(ja(k))
enddo
```

- `ALU, JLU`, matrix are stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ALU(1:n) ) is inverted. Each ith row of the ALU,JLU matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U.
- JU = integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU.
- `droptol` sets the threshold in L and U. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped.
- Keeping only the largest `lfil` elements in the ith row of L and the largest `lfil` elements in the ith row of `U` (excluding diagonal elements).
- Flexibility: one can use `droptol=0` to get a strategy based on keeping the largest elements in each row of `L` and `U`.
- Taking `droptol .ne. 0` but `lfil=n` will give the usual threshold strategy (however, fill-in is then mpredictible).

</TabItem>

<TabItem value="iface2" label="Interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUTP(obj, Pmat, lfil, droptol, permtol, &
    & mbloc, IPERM)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat
    INTEGER(I4B), INTENT(IN) :: lfil
    REAL(DFP), INTENT(IN) :: droptol
    REAL(DFP), INTENT(IN) :: permtol
    INTEGER(I4B), INTENT(IN) :: mbloc
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: IPERM(:)
  END SUBROUTINE GetILUTP
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
