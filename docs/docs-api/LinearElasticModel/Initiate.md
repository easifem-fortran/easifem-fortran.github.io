---
sidebar_position: 3
---

# Initiate

Initiate an instance of `LinearElasticModel_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Initiate
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️See example">

import EXAMPLE9 from "./examples/_Initiate_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="example2" label="ex2">

import EXAMPLE37 from "./examples/_Initiate_test_2.md";

<EXAMPLE37 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
