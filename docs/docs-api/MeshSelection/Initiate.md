---
sidebar_position: 3
---

# Initiate

Initiate an instance of `MeshSelection_`.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(INOUT) :: param
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️See example">

import EXAMPLE10 from "./examples/_Initiate_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
