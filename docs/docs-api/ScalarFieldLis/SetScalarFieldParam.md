# SetScalarFieldParam

Set the parameter for constructing a scalar field.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE setScalarFieldParam(param, name, engine, fieldType, comm, global_n, local_n)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n

  END SUBROUTINE setScalarFieldParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_ScalarField_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
