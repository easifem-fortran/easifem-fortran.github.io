```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( CSRMatrix_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  REAL(DFP), ALLOCATABLE :: m2(:,:)
  INTEGER( I4B ) :: i, unitNo
```

```fortran
  CALL Initiate( obj=dofobj, tNodes=[5], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=FMT_NODES )
```

```fortran
  CALL Initiate( obj, ncol=(.tnodes. dofobj), &
    & nrow=(.tnodes. dofobj), idof=dofobj, jdof=dofobj )
```

```fortran
  CALL Setsparsity( obj, 1, [1,2,3,5] )
  CALL Setsparsity( obj, 2, [2,1,3] )
  CALL Setsparsity( obj, 3, [3,1,2,4,5] )
  CALL Setsparsity( obj, 4, [4,3,5] )
  CALL Setsparsity( obj, 5, [5,1,3,4] )
  CALL SetSparsity(obj)
```

```fortran
  CALL Set( obj, 1, 1, 2.0_DFP )
  CALL Set( obj, 1, 2, 3.0_DFP )
  CALL Set( obj, 1, 3, 4.0_DFP )
  CALL Set( obj, 1, 5, 5.0_DFP )
  CALL Set( obj, 2, 2, 4.0_DFP )
  CALL Set( obj, 2, 1, 3.0_DFP )
  CALL Set( obj, 2, 3, 5.0_DFP )
  CALL Set( obj, 3, 3, 6.0_DFP )
  CALL Set( obj, 3, 1, 4.0_DFP )
  CALL Set( obj, 3, 2, 5.0_DFP )
  CALL Set( obj, 3, 4, 7.0_DFP )
  CALL Set( obj, 3, 5, 8.0_DFP )
  CALL Set( obj, 4, 4, 8.0_DFP )
  CALL Set( obj, 4, 3, 7.0_DFP )
  CALL Set( obj, 4, 5, 9.0_DFP )
  CALL Set( obj, 5, 5, 10.0_DFP )
  CALL Set( obj, 5, 1, 6.0_DFP )
  CALL Set( obj, 5, 3, 8.0_DFP )
  CALL Set( obj, 5, 4, 9.0_DFP )
```

```fortran
  m2=obj
  CALL Display(m2, "m2: ")
```

now we perform diagnonal scaling

```fortran
  CALL DiagonalScaling( obj, 'RIGHT' )
  m2=obj
  CALL Display(m2, "m2: ")
```

```fortran
  CALL Deallocate( obj )
END PROGRAM main
```
