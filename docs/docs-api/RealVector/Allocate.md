# Allocate

Allocate memory for RealVector.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Allocate(obj, Dims)
    CLASS(RealVector_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: Dims
  END SUBROUTINE Allocate
END INTERFACE 
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_Initiate_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


