---
sidebar_position: 3
---

# Initiate

Initiate an instance of `SolidMaterial_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, prefix)
    CLASS(SolidMaterial_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_Initiate_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="example2" label="example">

import EXAMPLE34 from "./examples/_Initiate_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
