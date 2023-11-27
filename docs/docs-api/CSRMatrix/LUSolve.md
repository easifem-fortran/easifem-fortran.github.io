# LUSolve

This routine solves the system `LU x = y`, given an LU decomposition of a matrix stored in (`ALU, JLU, JU`) modified sparse row format (MSR).

This ALU, JLU, JU are created by calling ILU Methods.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 See Interface" default>

</TabItem>

<TabItem value="close" label="◉ Close">

```fortran
INTERFACE
MODULE SUBROUTINE LUSOLVE(sol, rhs, alu, jlu, ju)
    REAL(DFP), INTENT(INOUT) :: sol(:)
    REAL(DFP), INTENT(IN) :: rhs(:)
    REAL(DFP), INTENT(IN) :: alu(:)
    INTEGER(I4B), INTENT(IN) :: jlu(:)
    INTEGER(I4B), INTENT(IN) :: ju(:)
END SUBROUTINE LUSOLVE
END INTERFACE
```

</TabItem>
</Tabs>

## Example

TODO
