### Example 3

This example shows how to Set sparsity pattern in an instance of `CSRSparsity_`. The storage pattern is `FMT_DOF`, and matrix is block matrix.

- Make an instance of `DOF_` which contains the storage pattern.
- Initiate an instance of `CSRSparsity_`.

:::note `SetSparsity`
In this example we will set sparsity pattern in each block. The block address is given by
ivar and jvar. `row` and `col` are the row and column number in that
block.

We should now call `SetSparsity()` to indicate that setting of sparsity pattern is finished. This step will compact the storage.

:::

## Usage

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

  TYPE( CSRSparsity_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  INTEGER( I4B ) :: i

  CALL Initiate( &
    & obj=dofobj, &
    & tNodes=[6, 3], &
    & names=['V', 'P'], &
    & spaceCompo=[3, 1], &
    & timeCompo=[1, 1], &
    & storageFMT=FMT_DOF )

  CALL Initiate( &
    & obj, &
    & ncol=(.tnodes. dofobj), &
    & nrow=(.tNodes. dofobj),  &
    & idof=dofobj, &
    & jdof=dofobj )

!Block 1,1 ( V, V )

CALL SetSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=4, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=5, col=[1,2,3,4,5,6], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=6, col=[1,2,3,4,5,6], ivar=1, jvar=1 )

!Block 1,2 (V, P)

CALL SetSparsity( obj=obj, row=1, col=[1,2,3], ivar=1, jvar=2 )
CALL SetSparsity( obj=obj, row=2, col=[1,2,3], ivar=1, jvar=2 )
CALL SetSparsity( obj=obj, row=3, col=[1,2,3], ivar=1, jvar=2 )
CALL SetSparsity( obj=obj, row=4, col=[1,2,3], ivar=1, jvar=2 )
CALL SetSparsity( obj=obj, row=5, col=[1,2,3], ivar=1, jvar=2 )
CALL SetSparsity( obj=obj, row=6, col=[1,2,3], ivar=1, jvar=2 )

!Block 2,1 (P,V)

CALL SetSparsity( obj=obj, row=1, col=[1,2,3,4,5,6], ivar=2, jvar=1 )
CALL SetSparsity( obj=obj, row=2, col=[1,2,3,4,5,6], ivar=2, jvar=1 )
CALL SetSparsity( obj=obj, row=3, col=[1,2,3,4,5,6], ivar=2, jvar=1 )

!Block 2,2 (P,P)

CALL SetSparsity( obj=obj, row=1, col=[1,2,3], ivar=2, jvar=2 )
CALL SetSparsity( obj=obj, row=2, col=[1,2,3], ivar=2, jvar=2 )
CALL SetSparsity( obj=obj, row=3, col=[1,2,3], ivar=2, jvar=2 )

CALL SetSparsity( obj )

CALL Display( obj, "" )

CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
