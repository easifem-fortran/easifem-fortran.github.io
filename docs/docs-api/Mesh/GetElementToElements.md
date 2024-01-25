# GetElementToElements

Get element to elements connectivity information.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE PURE FUNCTION getElementToElements(obj, globalElement, &
  & onlyElements) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! Global element number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: onlyElements
  !! If onlyElements is absent or it is FALSE then full information
  !! about the elements connected to element iel is given
  !! If onlyElements is present and it is TRUE then only the
  !! information about the elements connected to element iel is given
  INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  !! list of elements surrounding elements
END FUNCTION getElementToElements
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE5 from "./examples/_GetElementToElements_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
