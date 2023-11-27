# Display

Display function prints  variable on the screen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Scalar" default>

```fortran
SUBROUTINE Display(msg, unitno, advance)
  ! Dummt arguments
  CHARACTER(*), INTENT(IN) :: msg
  !! input message
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  !! unit no
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: advance
  ! Internal variables
END SUBROUTINE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_Display_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
