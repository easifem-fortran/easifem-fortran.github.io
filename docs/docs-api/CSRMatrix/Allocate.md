# Allocate

This subroutine creates memory space for the sparse matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="📝 See Interface">

```fortran
INTERFACE
  MODULE SUBROUTINE Allocate(obj, Dims, MatrixProp)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: Dims(2)
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: MatrixProp
  END SUBROUTINE Allocate
END INTERFACE
```

- Dims(1) denotes total number of rows
- Dims(2) denotes total number of columns
- In this case `tDOF` is set to 1, tNodes is set to dims(1), and nnz is set to 0.

</TabItem>

<TabItem value="close" label="◉ Close" default>

</TabItem>
</Tabs>
