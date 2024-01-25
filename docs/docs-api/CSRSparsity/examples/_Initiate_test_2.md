#### example 2

This example shows how to create an instance of `CSRSparsity_` for block matrix storage. Following methods are tested:

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: dofobj
INTEGER( I4B ) :: i

CALL Initiate( &
  & obj=dofobj, &
  & tNodes=[20, 10], &
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

CALL Display( obj, "CSRSparsity : " )

CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
