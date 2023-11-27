# SetSparsity

`SetSparsity()` method sets the sparsity pattern in the sparse matrix.

There are two interfaces for this purpose. The use of this method is exactly the same as the one described for [CSRSparsity](../CSRSparsity/CSRSparsity_.md).

:::note
While calling `SetSparsity()` user has to deal with the node numbers only, because this routine reads the information stored inside the [DOF](../DOF/DOF_.md) object field, and take care of sparsity patterns for all degrees of freedom.
:::

:::info
please note that when you are done with setting the sparsity pattern make sure you call `SetSparsity(obj)`. This will clean up the workspace, and prepare the compacted data inside `CSRMatrix_` object.
:::

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ SetSparsity(obj, row, col)" default>

```fortran
INTERFACE
  MODULE SUBROUTINE SetSparsity(obj, row, col)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: row
    INTEGER(I4B), INTENT(IN) :: col(:)
  END SUBROUTINE SetSparsity
END INTERFACE
```

This method should be used for setting sparsity pattern for problems in which there is only primary unknown (i.e., single physical variable).

- This subroutine sets the sparsity pattern of a given row.
- If `obj%tdof` is equal to 1, then `Col` is sorted in increasing order, and appended to `obj%Row(Row)`
- If `obj%tdof` is not equal to 1, then based on the storage format (see [DOF\_](../DOF/DOF_.md)) we generate `Col` connectivity information.

</TabItem>

<TabItem value="example" label="܀ Example 1">

import EXAMPLE43 from "./_SetSparsity_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface2" label="܀ SetSparsity(obj, row, col)">

```fortran
INTERFACE
  MODULE SUBROUTINE SetSparsity(obj, row, col)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: row(:)
    !! row indices
    TYPE(IntVector_), INTENT(IN) :: col(:)
    !! each intVector, col(i), contains col indices of row(i)
  END SUBROUTINE SetSparsity
END INTERFACE
```

</TabItem>

<TabItem value="example" label="܀ Example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface3" label="܀ SetSparsity(obj, row, col, ivar, jvar)">

```fortran
INTERFACE
  MODULE SUBROUTINE SetSparsity(obj, row, col, ivar, jvar)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: row
    !! row index
    INTEGER(I4B), INTENT(IN) :: col(:)
    !! col indices
    INTEGER(I4B), INTENT(IN) :: ivar
    !! physical variable i
    INTEGER(I4B), INTENT(IN) :: jvar
    !! physical variable j
  END SUBROUTINE SetSparsity
END INTERFACE
```

To set sparsity patterns in multi-physics applications, use the following command.

</TabItem>

<TabItem value="example" label="܀ Example 1">

import EXAMPLE109 from "./_SetSparsity_test_2.md";

<EXAMPLE109 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE118 from "./_SetSparsity_test_3.md";

<EXAMPLE118 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="iface4" label="܀ SetSparsity(obj, row, col, ivar, jvar)">

```fortran
INTERFACE
  MODULE SUBROUTINE SetSparsity(obj, row, col, ivar, jvar)
    TYPE(CSRMatrix_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: row(:)
    TYPE(IntVector_), INTENT(IN) :: col(:)
    INTEGER(I4B), INTENT(IN) :: ivar
    INTEGER(I4B), INTENT(IN) :: jvar
  END SUBROUTINE SetSparsity
END INTERFACE
```

This routine is like Interface 3, but in this case we can specify many rows and corresponding columns.

</TabItem>

<TabItem value="example" label="܀ Example">

TODO

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
