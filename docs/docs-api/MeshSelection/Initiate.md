# Initiate

Initiate an instance of MeshSelection.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, isSelectionByMeshID, &
    & isSelectionByElemNum, isSelectionByBox, isSelectionByNodeNum)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByMeshID
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByElemNum
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByBox
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSelectionByNodeNum
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_MeshSelection_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
