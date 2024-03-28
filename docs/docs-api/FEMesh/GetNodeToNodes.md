# GetNodeToNodes

Returns node to node connectivity in the mess.

## Interface

There are two interfaces to this method

### Interface 1

<Tabs>
<TabItem value="interface" label="Interface 1" default>

```fortran
MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode
  LOGICAL(LGT), INTENT(IN) :: IncludeSelf
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getNodeToNodes
```

</TabItem>

<TabItem value="interface2" label="Interface 2">

```fortran
MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode( : )
  LOGICAL(LGT), INTENT(IN) :: IncludeSelf
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getNodeToNodes
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE11 from "./examples/_GetNodeToNodes_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
