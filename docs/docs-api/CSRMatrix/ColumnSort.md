# ColumnSort

This routine sorts the elements of a matrix (stored in Compressed Sparse Row Format) in increasing order of their column indices within each row. It uses insertion sort algorithm.

- `values`= logical indicating whether the real values a(\*) must also be permuted. IF (.not. values) then the array `a` is not touched by csort and can be a dummy array.
- Default value of `SortValue` is true.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE ColumnSORT(obj, isValues)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN), OPTIONAL :: isValues
  END SUBROUTINE ColumnSORT
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
