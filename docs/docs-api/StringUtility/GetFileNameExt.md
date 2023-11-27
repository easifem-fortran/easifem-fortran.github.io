# GetFileNameExt

This routine returns the extension of a file.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE getFileNameExt(chars, ext)
    CHARACTER(*), INTENT(IN) :: chars
    CHARACTER(*), INTENT(OUT) :: ext
  END SUBROUTINE getFileNameExt
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_GetFileNameExt_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
