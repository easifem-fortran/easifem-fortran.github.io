# GetBoundaryElementData

Returns the boundary element data.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE PURE FUNCTION getBoundaryElementData(obj, globalElement) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getBoundaryElementData
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE5 from "./examples/_GetBoundaryElementData_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
