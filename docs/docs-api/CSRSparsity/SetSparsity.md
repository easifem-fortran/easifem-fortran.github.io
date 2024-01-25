# SetSparsity

This subroutine sets the sparsity pattern in the `CSRSparsity` object.

:::info SetSparsity
When you are done setting the sparsity pattern, you must call `SetSparsity()` without arguments. This subroutine then creates a compact data inside the instance of `CSRSparsity_`.

:::

## Interface 1 (Sparsity by row and column)

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE SUBROUTINE SetSparsity( obj, Row, Col )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: Row
  INTEGER( I4B ), INTENT( IN ) :: Col( : )
END SUBROUTINE SetSparsity
```

:::info
This subroutine sets the sparsity pattern of a given row. If `obj%tdof` is equal to 1, then `Col` is sorted in increasing order and appended to `obj%Row(Row)`. If `obj%tdof` is not equal to 1, then based on the storage format and `Col`, connectivity information is generated. The second interface is similar to the first one, however, this times several rows can be given.

:::

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_SetSparsity_test_2.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 2 (Sparsity by row and cols)

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
MODULE SUBROUTINE SetSparsity( obj, Row, Col )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: Row( : )
    !! row number
  TYPE( IntVector_ ), INTENT( IN ) :: Col( : )
    !! column number
END SUBROUTINE SetSparsity
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE54 from "./examples/_SetSparsity_test_3.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 3 (Sparsity for block matrix)

To handle the block sparsity we can use following routines.

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE SetSparsity
  MODULE SUBROUTINE obj_SetSparsity3(obj, row, col, ivar, jvar)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: row
    !! row number
    INTEGER(I4B), INTENT(IN) :: col(:)
    !! sparsity of row, column numbers
    INTEGER(I4B), INTENT(IN) :: ivar
    !! block address (row index)
    INTEGER(I4B), INTENT(IN) :: jvar
    !! block address (col index)
  END SUBROUTINE obj_SetSparsity3
END INTERFACE SetSparsity
```

:::note
While calling `SetSparsity()` user has to deal with the mesh node numbers only, because this routine reads the information stored inside the `DOF_` object field, and take care of sparsity patterns for all degrees of freedom.

:::

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE47 from "./examples/_SetSparsity_test_1.md";

<EXAMPLE47 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>

## Interface 4 (Sparsity for block matrix)

```fortran
INTERFACE SetSparsity
  MODULE SUBROUTINE obj_SetSparsity4(obj, Row, Col, iVar, jVar)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: Row(:)
    !! several row numbers
    TYPE(IntVector_), INTENT(IN) :: Col(:)
    !! column index for each row number
    INTEGER(I4B), INTENT(IN) :: iVar
    !! block address (row index)
    INTEGER(I4B), INTENT(IN) :: jVar
    !! block address (col index)
  END SUBROUTINE obj_SetSparsity4
END INTERFACE SetSparsity
```

## Interface 5 (Sparsity by graph)

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE SetSparsity
  MODULE SUBROUTINE obj_SetSparsity5(obj, graph)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: graph(:, :)
  !! graph of sparsity
  !! If graph( i, j ) .EQ. 0, then i and j are not connected
  !! else they are connected.
  END SUBROUTINE obj_SetSparsity5
END INTERFACE SetSparsity
```

This subroutine Sets the sparsity pattern by using the graph.
graph( i, j ) is either 0 or 1, if zero then there is not connection
between row-i and row-j

</TabItem>

<TabItem value="interface2" label="Interface 2">

```fortran
INTERFACE SetSparsity
  MODULE SUBROUTINE obj_SetSparsity6(obj, graph)
    TYPE(CSRSparsity_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: graph(:, :)
  !! graph of sparsity
  !! If graph( i, j ) .EQ. FALSE, then i and j are not connected
  !! else they are connected.
  END SUBROUTINE obj_SetSparsity6
END INTERFACE SetSparsity
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE136 from "./examples/_SetSparsity_test_5.md";

<EXAMPLE136 />

</TabItem>

<TabItem value="example2" label="example 2">

import EXAMPLE183 from "./examples/_SetSparsity_test_6.md";

<EXAMPLE183 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
