# GetNNZ

Returns the number of non-zero entries in csrmatrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="📝 See Interface">

```fortran
INTERFACE
  MODULE PURE FUNCTION GetNNZ(obj) RESULT(Ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B) :: Ans
  END FUNCTION GetNNZ
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close" default>

</TabItem>
</Tabs>
