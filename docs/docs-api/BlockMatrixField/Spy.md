# Spy

Spy print of sparse matrix.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE SPY(obj, filename, ext)
    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: filename
    CHARACTER(*), INTENT(IN) :: ext
  END SUBROUTINE SPY
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./BlockMatrixField_test_4.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
