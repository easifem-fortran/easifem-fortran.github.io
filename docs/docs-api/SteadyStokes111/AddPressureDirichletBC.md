# AddPressureDirichletBC

This routine sets the Dirichlet boundary condition for pressure field in [AbstractSteadyStokes_](../AbstractSteadyStokes/AbstractSteadyStokes_.md) kernel.

- It also makes the `obj%DBCForPressure(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for pressure field

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface"  default>

```fortran
INTERFACE
  MODULE SUBROUTINE AddPressureDirichletBC(obj, dbcNo, param, boundary)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE AddPressureDirichletBC
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_AddVelocityDirichletBC_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
