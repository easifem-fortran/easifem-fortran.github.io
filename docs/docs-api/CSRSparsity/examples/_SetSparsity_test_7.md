### example 9

This example shows how to create an instance of `CSRSparsity_` for block matrix storage.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: idofobj, jdofobj
INTEGER( I4B ) :: i

CALL Initiate( &
  & obj=idofobj, &
  & tNodes=[6], &
  & names=['V'], &
  & spaceCompo=[2], &
  & timeCompo=[1], &
  & storageFMT=FMT_DOF )

CALL Initiate( &
  & obj=jdofobj, &
  & tNodes=[3], &
  & names=['P'], &
  & spaceCompo=[1], &
  & timeCompo=[1], &
  & storageFMT=FMT_DOF )

call Display(.tnodes. idofobj, "nrow=")
call Display(.tnodes. jdofobj, "ncol=")

CALL Initiate( &
  & obj, &
  & nrow=( .tNodes. idofobj), &
  & ncol=( .tnodes. jdofobj), &
  & idof=idofobj, &
  & jdof=jdofobj )

CALL Display( SIZE(obj, 1), "size(obj, 1) : " )
CALL Display( SIZE(obj, 2), "size(obj, 2) : " )

CALL SetSparsity( obj=obj, row=1, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=2, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=3, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=4, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=5, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity( obj=obj, row=6, col=[1,2,3], ivar=1, jvar=1 )
CALL SetSparsity(obj)

CALL Display( obj, "obj = ")

CALL Deallocate( idofobj )
CALL Deallocate( jdofobj )
CALL Deallocate( obj )
END PROGRAM main
```
