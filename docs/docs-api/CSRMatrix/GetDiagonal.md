# GetDiagonal

This routine returns the diagonal entries of sparse MATRIX.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface 1" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetDiagonal(obj, diag, idiag, offset)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: idiag(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: offset
  END SUBROUTINE GetDiagonal
END INTERFACE
```

- This subroutine returns the diagonal entries of sparse matrix.
- `offset` containing the offset of the wanted diagonal the diagonal extracted is the one corresponding to the entries `a(i,j)` with `j-i = ioff`. Thus `ioff = 0` means the main diagonal
- `diag` is an array of reals of length nrow containing the wanted diagonal. diag contains the diagonal (`a(i,j),j-i = ioff`) as defined above.
- `idiag` is an array of integer of length `len`, containing the poisitions in the original arrays `a` and `ja` of the diagonal elements collected in `diag`. A zero entry in `idiag(i)` means that there was no entry found in row i belonging to the diagonal.

</TabItem>

<TabItem value="iface2" label="Interface 2">

```fortran
INTERFACE
  MODULE SUBROUTINE GetDiagonal(obj, diag, offset)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: offset
  END SUBROUTINE GetDiagonal
END INTERFACE
```

This routine is like interface-1, but in this routine we do not get `idiag`

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
