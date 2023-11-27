# SetSparsity

This subroutine sets the sparsity pattern in the CSRSparsity object.

```fortran
MODULE SUBROUTINE SetSparsity( obj, Row, Col )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: Row
  INTEGER( I4B ), INTENT( IN ) :: Col( : )
END SUBROUTINE SetSparsity
```

```fortran
MODULE SUBROUTINE SetSparsity( obj, Row, Col )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: Row( : )
    !! row number
  TYPE( IntVector_ ), INTENT( IN ) :: Col( : )
    !! column number
END SUBROUTINE SetSparsity
```

This subroutine sets the sparsity pattern of a given row. If `obj%tdof` is equal to 1, then `Col` is sorted in increasing order and appended to `obj%Row(Row)`. If `obj%tdof` is not equal to 1, then based on the storage format and `Col`, connectivity information is generated. For more information see [[CSRSparsity_test_5]].

The second interface is simialar to the first one, however, in the second several rows can be given.

To handle the block sparsity we can use following routines. You can find an example in [[CSRSparsity_test_3]].

```fortran
MODULE SUBROUTINE SetSparsity( obj, row, col, ivar, jvar )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: row
    !! row number
  INTEGER( I4B ), INTENT( IN ) :: col( : )
    !! sparsity of row, column numbers
  INTEGER( I4B ), INTENT( IN ) :: ivar
    !! block address (row index)
  INTEGER( I4B ), INTENT( IN ) :: jvar
    !! block address (col index)
END SUBROUTINE SetSparsity
```

```fortran
MODULE SUBROUTINE SetSparsity( obj, Row, Col, iVar, jVar )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: Row( : )
    !! several row numbers
  TYPE( IntVector_ ), INTENT( IN ) :: Col( : )
    !! column index for each row number
  INTEGER( I4B ), INTENT( IN ) :: iVar
    !! block address (row index)
  INTEGER( I4B ), INTENT( IN ) :: jVar
    !! block address (col index)
END SUBROUTINE SetSparsity
```

:::note SetSparsity
While calling `SetSparsity()` user has to deal with the node numbers only, because this routine reads the information stored inside the [[DOF_]] object field, and take care of sparsity patterns for all degrees of freedom.
:::

:::info SetSparsity
When you are done setting the sparsity pattern, you must call `SetSparsity()` without arguments. This subroutine then creates a compact data inside the instance of [[CSRSparsity_]].
:::
