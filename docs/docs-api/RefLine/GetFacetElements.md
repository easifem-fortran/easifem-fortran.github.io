# GetFacetElements

Get the facet elements.

The facet elements of line elements are points.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE refelem_GetFacetElements(obj, ans)
    CLASS(RefLine_), INTENT(IN) :: obj
    TYPE(AbstractRefElementPointer_), ALLOCATABLE :: ans(:)
  END SUBROUTINE refelem_GetFacetElements
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_GetFacetElements_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

