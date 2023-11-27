# Size

This function returns the size of sparse matrix.

- If Dims equal to 1 then total number of rows are returned.
- If Dims is equal to 2 then total number of columns are return.
- In case dims is absent then nrow\*ncol are returned.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ See Interface">

```fortran
INTERFACE
  MODULE PURE FUNCTION Size(obj, Dims) RESULT(Ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: Dims
    INTEGER(I4B) :: Ans
  END FUNCTION Size
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
