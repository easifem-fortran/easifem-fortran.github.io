# GetFacetElements

This routine returns the face elements of a reference element.

## Interface 1

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE GetFacetElements
  MODULE SUBROUTINE refelem_GetFacetElements1(refelem, ans)
    CLASS(ReferenceElement_), INTENT(IN) :: refelem
    TYPE(ReferenceElement_), INTENT(INOUT) :: ans(:)
  END SUBROUTINE refelem_GetFacetElements1
END INTERFACE GetFacetElements
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_GetFacetElements_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
 INTERFACE GetFacetElements
  MODULE SUBROUTINE refelem_GetFacetElements2(elemType, nsd, ans)
    INTEGER(I4B), INTENT(IN) :: elemType
    INTEGER(I4B), INTENT(IN) :: nsd
    TYPE(ReferenceElement_), INTENT(INOUT) :: ans(:)
  END SUBROUTINE refelem_GetFacetElements2
END INTERFACE GetFacetElements
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE34 from "./examples/_GetFacetElements_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
