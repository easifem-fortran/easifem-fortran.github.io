# Display

`Display` method displays the contents of `CSRMatrix_` object.

Calling example:

```fortran
SUBROUTINE Display( CSRMatrix_::obj, CHAR::Msg [, INT::UnitNo] )
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 See Interface">

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, Msg, UnitNo)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: Msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: UnitNo
  END SUBROUTINE Display
END INTERFACE
```

This routine calls the `dump` method from `Sparsekit` lib.

</TabItem>

<TabItem value="close" label="◉ Close" default>

</TabItem>
</Tabs>
