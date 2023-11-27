# InitiateNodeToNodeData

This routine initiates nodeToNode data (mapping) between two domains or parts of domains.

### Interface1

This subroutine generates the node to node connectivity between two meshes

- `obj%nodeToNode` will be initiated
- `domain1` main domain
- `domain2` secondary domain
- `dim1, entitynum1` dimension and entity number of mesh in `domain1`
- `dim2, entitynum2` dimension and entity number of mesh in `domain2`

:::caution
In this case bounds of `nodeToNode` will be from 1 to `mesh1%maxNptrs`.
:::

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateNodeToNodeData1(obj, domain1, domain2, &
    & dim1, dim2, entityNum1, entityNum2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object,
    !! [[DomainConnectivity:nodeToNode]] will be initiated
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in nodeToNode(i), i denotes the
    !! global node number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! secondary domain, => nodeToNode(i) denotes the
    !! global node number in `domain2` domain.
    INTEGER(I4B), INTENT(IN) :: dim1
    !! dimension of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: dim2
    !! dimension of mesh in domain2
    INTEGER(I4B), INTENT(IN) :: entityNum1
    !! entity num of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: entityNum2
    !! entity num of mesh in domain2
  END SUBROUTINE dc_InitiateNodeToNodeData1
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="1" label="️܀ Example 1">

import EXAMPLE46 from "./_DomainConnectivity_test_1.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="2" label="️܀ Example 2">

import EXAMPLE47 from "./_DomainConnectivity_test_2.md";

<EXAMPLE47 />

</TabItem>

<TabItem value="3" label="️܀ Example 3">

import EXAMPLE3 from "./_DomainConnectivity_test_3.md";

<EXAMPLE3 />

</TabItem>

<TabItem value="4" label="️܀ Example 4">

import EXAMPLE4 from "./_DomainConnectivity_test_4.md";

<EXAMPLE4 />

</TabItem>

<TabItem value="5" label="️܀ Example 5">

import EXAMPLE5 from "./_DomainConnectivity_test_5.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="6" label="️܀ Example 6">

import EXAMPLE6 from "./_DomainConnectivity_test_6.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="7" label="️܀ Example 7">

import EXAMPLE7 from "./_DomainConnectivity_test_7.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="8" label="️܀ Example 8">

import EXAMPLE8 from "./_DomainConnectivity_test_8.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface2

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateNodeToNodeData2(obj, domain1, domain2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in nodeToNode(i), i denotes the
    !! global node number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! Secondary domain => nodeToNode(i) denotes the
    !! global node number in domain2 domain.
  END SUBROUTINE dc_InitiateNodeToNodeData2
END INTERFACE
!# Introduction
!
!  This subroutine generates the node to node connectivity between two domains
!
!@note
!In this routine nodeToNode connectivity info of all meshes in domain1 to
!all meshes in the domain2 will be generated!
!@endnote
!
! - `obj%nodeToNode` will be initiated
! - `domain1` main domain
! - `domain2` secondary domain
```

<Tabs>

<TabItem value="1" label="️܀ Example 1">

import EXAMPLE9 from "./_DomainConnectivity_test_9.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="2" label="️܀ Example 2">

import EXAMPLE10 from "./_DomainConnectivity_test_10.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

This is a powerful 🔥 and useful method. You can learn about this routine at following links.
