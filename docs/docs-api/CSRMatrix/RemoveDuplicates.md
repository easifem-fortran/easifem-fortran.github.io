# RemoveDuplicates

Remove the duplicate entries from the sparse matrix

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE csrMat_RemoveDuplicates(obj, isValues)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN), OPTIONAL :: isValues
  END SUBROUTINE csrMat_RemoveDuplicates
END INTERFACE
```

</TabItem>

<TabItem value="close" label="◉ Close">

</TabItem>
</Tabs>
