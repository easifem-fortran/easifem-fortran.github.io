# ReferenceTopology

This method returns the topology of reference element.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE PURE FUNCTION ReferenceTopology(nptrs, name) RESULT(obj)
  TYPE(ReferenceTopology_) :: obj
  INTEGER(I4B), INTENT(IN) :: nptrs(:)
  INTEGER(I4B), INTENT(IN) :: name
END FUNCTION ReferenceTopology
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_ReferenceTopology_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
