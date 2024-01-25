### Example 5

This example shows how to set sparsity pattern in an instance of `CSRSparsity_`.

The storage pattern is `FMT_DOF`, and matrix is not a block matrix.

:::info `SetSparsity`
Setting sparsity pattern. The `row` and `col` are the row and column number of the matrix.

:::

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: dofobj
INTEGER( i4b ) :: i

CALL Initiate( &
  & obj=dofobj, &
  & tNodes=[12], &
  & names=['K'], &
  & spaceCompo=[3], &
  & timeCompo=[2], &
  & storageFMT=DOF_FMT )

CALL Initiate( obj, ncol=.tNodes. dofobj, nrow=.tNodes. dofobj, idof=dofobj, &
    & jdof=dofobj )

CALL SetSparsity( obj, 1, [1,2,6,5] )
CALL SetSparsity( obj, 2, [2,1,3,5,6,7] )
CALL SetSparsity( obj, 3, [3,2,4,6,7,8] )
CALL SetSparsity( obj, 4, [4,3,7,8] )
CALL SetSparsity( obj, 5, [5,1,9,2,6,10] )
CALL SetSparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
CALL SetSparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
CALL SetSparsity( obj, 8, [8,4,12,3,7,11] )
CALL SetSparsity( obj, 9, [9,5,6,10] )
CALL SetSparsity( obj, 10, [10,9,11,5,6,7] )
CALL SetSparsity( obj, 11, [11,10,12,6,7,8] )
CALL SetSparsity( obj, 12, [12,7,8,11] )

CALL SetSparsity(obj)

CALL Display( obj, "obj=" )

CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
