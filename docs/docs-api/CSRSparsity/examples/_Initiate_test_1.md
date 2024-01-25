### Example 1

This example shows how to create an instance of `CSRSparsity_`.

- First we will create an instance of `DOF_`
- Then we will use it to create an instance of `CSRSparsity_`.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE( CSRSparsity_ ) :: obj
TYPE( DOF_ ) :: dofobj
INTEGER( I4B ) :: i

CALL Initiate( &
    & obj=dofobj, &
    & tNodes=[12], &
    & names=['K'], &
    & spaceCompo=[1], &
    & timeCompo=[1], &
    & storageFMT=NODES_FMT )

CALL Initiate( obj, ncol=12, nrow=12, idof=dofobj, jdof=dofobj )

CALL Display( obj, "CSRSparsity : " )

CALL Deallocate( dofobj )
CALL Deallocate( obj )
END PROGRAM main
```
