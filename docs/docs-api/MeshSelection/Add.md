# Add

This routine adds mesh regions to the instance of `MeshSelection_`.

We can use this method for adding information based on

- mesh ID
- bounding box
- element numbers
- node numbers

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE meshSelect_Add(obj, dom, dim, meshID, box, elemNum, &
    & nodeNum)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
    TYPE(Domain_), OPTIONAL, INTENT(IN) :: dom
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: meshID(:)
    TYPE(BoundingBox_), OPTIONAL, INTENT(IN) :: box
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: elemNum(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nodeNum(:)
  END SUBROUTINE meshSelect_Add
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_MeshSelection_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
