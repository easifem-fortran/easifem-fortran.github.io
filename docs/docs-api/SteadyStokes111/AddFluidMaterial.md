# AddFluidMaterial

This routine adds Fluid material to the AbstractSteadyStokes.

- It also prepares `obj%FluidMaterialToMesh(materialNo)` and `obj%fluidMaterial(materialNo)`.
- `param` contains the parameters for constructing a FluidMaterial.
- `materialName` is the name of material, it should be `fluidMaterial`.
- `region` is an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).

:::caution
`materialNo` should be lesser than or equal to the total
number of Fluid materials.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE addFluidMaterial(obj, materialNo, materialName, &
    & param, region)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: materialNo
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region
  END SUBROUTINE addFluidMaterial
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE19 from "./_AddFluidMaterial_test_1.md";

<EXAMPLE19 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
