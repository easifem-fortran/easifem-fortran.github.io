
# AtMatVec

This routine performs transpose matrix vector multiplication for csrmatrix ($A^T\ cdot x$).

Calling example:

```fortran
CALL AtMat(CSRMatrix_::obj, Real::x(:), Real::y(:))
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ AtMatvec(obj, x, y)">

```fortran
INTERFACE
  MODULE SUBROUTINE AtMatvec(obj, x, y)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
  END SUBROUTINE AtMatvec
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

</Tabs>
