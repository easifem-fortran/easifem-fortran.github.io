# SPY

Use `SPY()` method to generate a PDF/PNG/SVG file for visualizing the sparsity patterns in `CSRMatrix_`.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE SPY(obj, filename, ext)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: filename
    CHARACTER(LEN=*), INTENT(IN) :: ext
  END SUBROUTINE SPY
END INTERFACE
```

</TabItem>

<TabItem value="example1" label="܀ Example 1">

import EXAMPLE25 from "./_SPY_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE36 from "./_SPY_test_2.md";

<EXAMPLE36 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>
