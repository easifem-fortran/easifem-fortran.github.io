# MatVec

This routine performs matrix vector multiplication between CSRMatrix and dense vector.

Calling example:

```fortran
CALL MatVec(CSRMatrix_::obj, Real::x(:), Real::y(:)[, Bool::transp])
CALL MatVec(Real::A(:), Integer::JA(:), Real::x(:), Real::y(:))
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ MatVec(obj, x, y, transp)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE MatVec(obj, x, y, transp)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: transp
  END SUBROUTINE MatVec
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>

</Tabs>

<Tabs>

<TabItem value="interface" label="܀ MatVec(A, JA, x, y)">

```fortran
INTERFACE
  MODULE SUBROUTINE MatVec(A, JA, x, y)
    REAL(DFP), INTENT(IN) :: A(:)
    INTEGER(I4B), INTENT(IN) :: JA(:)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
  END SUBROUTINE MatVec
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>

</Tabs>
