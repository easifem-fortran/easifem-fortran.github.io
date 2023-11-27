# Deallocate

To Deallocate the data stored inside an instance of `CSRMatrix_` use `Deallocate()` method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="📝 See Interface">

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close" default>

</TabItem>
</Tabs>
