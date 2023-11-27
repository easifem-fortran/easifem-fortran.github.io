# Shape

Returns the shape of csrmatrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ See Interface">

```fortran
INTERFACE
  MODULE PURE FUNCTION Shape(obj) RESULT(Ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B) :: Ans(2)
  END FUNCTION Shape
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
