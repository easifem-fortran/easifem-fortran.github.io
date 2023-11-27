# LagrangeInDOF

Returns the total number of degrees of freedom internal to hexahedron.

The total number of degree of freedom is given by:

$$
t_{dof}=(p-1)*(q-1)*(r-1)
$$

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeInDOF_Hexahedron
  MODULE PURE FUNCTION LagrangeInDOF_Hexahedron1(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeInDOF_Hexahedron1
END INTERFACE LagrangeInDOF_Hexahedron
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_LagrangeInDOF_Hexahedron_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE LagrangeInDOF_Hexahedron
  MODULE PURE FUNCTION LagrangeInDOF_Hexahedron2(p, q, r) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p, q, r
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeInDOF_Hexahedron2
END INTERFACE LagrangeInDOF_Hexahedron
```
