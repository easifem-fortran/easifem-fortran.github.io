# Initiate

This routine initiates the SteadyStokes221 kernel.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, dom, domains)
    CLASS(SteadyStokes221_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
    !! domains(1) is for velocity
    !! domains(2) is for pressure
  END SUBROUTINE Initiate
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
