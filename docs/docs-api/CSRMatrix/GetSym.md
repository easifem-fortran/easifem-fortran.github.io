# GetSym

Returns the symmetric form of a sparse matrix.

Calling example:

```fortran
CALL GetSym(CSRMatrix_::obj, CSRMatrix_::symobj, char(1)::from)
CALL GetSym(CSRMatrix_::obj, char(1)::from)
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="1" label="܀ GetSym(obj, symobj, from)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetSym(obj, symObj, from)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    TYPE(CSRMatrix_), INTENT(INOUT) :: symObj
    CHARACTER(1), INTENT(IN) :: from
  END SUBROUTINE GetSym
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ See example 1">

import EXAMPLE34 from "./_GetSym_test_1.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="3" label="️܀ See example 2">

import EXAMPLE44 from "./_GetSym_test_2.md";

<EXAMPLE44 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>
<TabItem value="2" label="܀ GetSym(obj, from)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetSym(obj, from)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    CHARACTER(1), INTENT(IN) :: from
  END SUBROUTINE GetSym
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example 1">

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>
