# FacetElements

This routine returns the face elements of a reference element.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE PURE FUNCTION RefElem_FacetElements(RefElem) RESULT(ans)
  CLASS(ReferenceElement_), INTENT(IN) :: RefElem
  TYPE(ReferenceElement_), ALLOCATABLE :: ans(:)
END FUNCTION RefElem_FacetElements
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_FacetElements_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
