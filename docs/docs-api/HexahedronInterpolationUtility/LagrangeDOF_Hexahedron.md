# LagrangeDOF

Returns the total number of degrees of freedom.

The total number of degree of freedom is given by:

$$
t_{dof}=(p+1)*(q+1)*(r+1)
$$

Calling example:

```fortran
ans = LagrangeDOF_Hexahedron(order)
ans = LagrangeDOF_Hexahedron(p,q,r)
```

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeDOF_Hexahedron
  MODULE PURE FUNCTION LagrangeDOF_Hexahedron1(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Hexahedron1
END INTERFACE LagrangeDOF_Hexahedron
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_LagrangeDOF_Hexahedron_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE LagrangeDOF_Hexahedron
  MODULE PURE FUNCTION LagrangeDOF_Hexahedron2(p, q, r) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p, q, r
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Hexahedron2
END INTERFACE LagrangeDOF_Hexahedron
```
