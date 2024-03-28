# GetNodeToElements

Get node to elements connectivity.

There are two interfaces to this method.

## Interface

### Interface 1

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode
  !! global node number
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION getNodeToElements
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE5 from "./examples/_GetNodeToElements_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

### Interface 2

```fortran
MODULE PURE FUNCTION getNodeToElements(obj, globalNode) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode(:)
  !! global node number
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION getNodeToElements
```
