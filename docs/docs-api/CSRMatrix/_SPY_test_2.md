```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( CSRMatrix_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  INTEGER( I4B ) :: i, unitNo

  CALL Initiate( obj=dofobj, tNodes=[5], names=['K'], &
    & spaceCompo=[2], timeCompo=[1], storageFMT=FMT_DOF )

  CALL Initiate( obj, ncol=(.tnodes. dofobj), &
    & nrow=(.tnodes. dofobj), idof=dofobj, jdof=dofobj )

  CALL Setsparsity( obj, 1, [1,2,3,5] )
  CALL Setsparsity( obj, 2, [2,1,3] )
  CALL Setsparsity( obj, 3, [3,1,2,4,5] )
  CALL Setsparsity( obj, 4, [4,3,5] )
  CALL Setsparsity( obj, 5, [5,1,3,4] )
  CALL SetSparsity(obj)

  obj = 2.0_DFP

  CALL SPY( obj, "test_6", ".svg" )

  CALL Deallocate( obj )
END PROGRAM main
```

!!! example "result"

![](figures/test_6.svg)
