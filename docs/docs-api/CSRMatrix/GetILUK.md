# GetILUK

This routine returns the ILU WITH LEVEL OF FILL-IN OF K (ILU(k))

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUK(obj, ALU, JLU, JU, lfil, LEVS)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)
    INTEGER(I4B), INTENT(IN) :: lfil
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: LEVS(:)
  END SUBROUTINE GetILUK
END INTERFACE
```

- `lfil` is the fill-in parameter. Each element whose leve-of-fill exceeds lfil during the ILU process is dropped. lfil must be .ge. 0
- `droptol` Sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- `ALU,JLU` = matrix stored in Modified Sparse Row (MSR) format containing the L and U factors together. The diagonal (stored in alu(1:n) ) is inverted. Each i-th row of the `ALU,JLU` matrix contains the i-th row of L (excluding the diagonal entry=1) followed by the i-th row of `U`.
- `JU` = integer array of length n containing the pointers to the beginning of each row of `U` in the matrix `ALU,JLU`.
- `LEVS` = integer (work) array of size `IWK`, which contains the levels of each element in `ALU, JLU`.

:::caution
This is not implemented efficiently storage-wise. For example: Only the part of the array levs associated with the U-matrix is needed in the routine. So some storage can be saved if needed. The levels of fills in the LU matrix are output for information only, they are not needed by LU-solve.
:::

</TabItem>

<TabItem value="iface2" label="interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetILUK(obj, Pmat, lfil, LEVS)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat
    INTEGER(I4B), INTENT(IN) :: lfil
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: LEVS(:)
  END SUBROUTINE GetILUK
END INTERFACE
```

This routine is similar to the interface 1, but in this routine ILU factorization is returned as an instance of `CSRMatrix_`.

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
