# AMatVec

This routine performs matrix vector multiplication for csrmatrix.

Calling example:

```fortran
CALL AMat(CSRMatrix_::obj, Real::x(:), Real::y(:))
CALL AMat(Real::A(:), Integer::Ja(:), Real::x(:), Real::y(:))
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ AMatVec(obj, x, y)">

```fortran
INTERFACE
  MODULE SUBROUTINE AMatVec(obj, x, y)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
  END SUBROUTINE AMatVec
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
<TabItem value="interface" label="܀ AMatVec(A, JA, x, y)">

```fortran
INTERFACE
  MODULE SUBROUTINE AMatVec(A, JA, x, y)
    REAL(DFP), INTENT(IN) :: A(:)
    INTEGER(I4B), INTENT(IN) :: JA(:)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(INOUT) :: y(:)
  END SUBROUTINE AMatVec
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>

</Tabs>
