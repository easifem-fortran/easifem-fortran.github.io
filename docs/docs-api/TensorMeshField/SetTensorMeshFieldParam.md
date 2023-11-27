# SetTensorMeshFieldParam

This subroutine the parameters of tensor mesh field.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE setTensorMeshFieldParam(param, name, &
    & fieldType, varType, engine, defineOn, dim1, dim2, nns)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: fieldType
    INTEGER(I4B), INTENT(IN) :: varType
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: defineOn
    !! Nodal, Quadrature
    INTEGER(I4B), INTENT(IN) :: dim1
    INTEGER(I4B), INTENT(IN) :: dim2
    INTEGER(I4B), INTENT(IN) :: nns
    !! Number of node in space
  END SUBROUTINE setTensorMeshFieldParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_SetTensorMeshFieldParam_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
