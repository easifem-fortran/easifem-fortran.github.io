```fortran
PROGRAM main
    USE easifemBase
    USE HDF5File_Class
    IMPLICIT NONE
    TYPE( CSRMatrix_ ) :: obj
    TYPE( DOF_ ) :: dofobj
    REAL( DFP ), ALLOCATABLE :: m2(:,:)
```

```fortran
  CALL Initiate( obj=dofobj, tNodes=[12, 5], names=['V', 'P'], &
    & spaceCompo=[2, 1], timeCompo=[1,1], storageFMT=FMT_DOF )

  CALL Initiate( obj, ncol=(.tnodes. dofobj), &
    & nrow=(.tnodes. dofobj), idof=dofobj, jdof=dofobj )

  CALL SetSparsity( obj=obj, row=1, col=[1,2,3,5,6,7,10,11,12], ivar=1, jvar=1 )
  CALL SetSparsity( obj, 2, [2,1,3,6,7,11], 1, 1 )
  CALL SetSparsity( obj, 3, [3,1,2,4,5,6,7,11,8,9,12,10], 1, 1 )
  CALL SetSparsity( obj, 4, [4,3,5,8,9,12], 1, 1 )
  CALL SetSparsity( obj, 5, [5,1,3,4,10,11,8,9,12], 1, 1 )
  CALL SetSparsity( obj, 6, [6,1,2,3,7,11], 1, 1 )
  CALL SetSparsity( obj, 7, [7,1,2,3,6,7,11], 1, 1 )
  CALL SetSparsity( obj, 8, [8,3,4,5,8,9,12], 1, 1 )
  CALL SetSparsity( obj, 9, [9,3,4,5,8,9,12], 1, 1 )
  CALL SetSparsity( obj, 10, [10,1,3,5,11,12], 1, 1 )
  CALL SetSparsity( obj, 11, [11,1,2,3,5,6,7,12,10], 1, 1 )
  CALL SetSparsity( obj, 12, [12,1,3,4,5,10,11,8,9], 1, 1 )

  CALL SetSparsity( obj, 1, [1,2,3,5], 1, 2 )
  CALL SetSparsity( obj, 2, [2,1,3], 1, 2 )
  CALL SetSparsity( obj, 3, [3,1,2,4,5], 1, 2 )
  CALL SetSparsity( obj, 4, [4,3,5], 1, 2 )
  CALL SetSparsity( obj, 5, [5,1,3,4], 1, 2 )
  CALL SetSparsity( obj, 6, [1,2,3], 1, 2 )
  CALL SetSparsity( obj, 7, [1,2,3], 1, 2 )
  CALL SetSparsity( obj, 8, [3,4,5], 1, 2 )
  CALL SetSparsity( obj, 9, [3,4,5], 1, 2 )
  CALL SetSparsity( obj, 10, [1,3,5], 1, 2 )
  CALL SetSparsity( obj, 11, [1,2,3,5], 1, 2 )
  CALL SetSparsity( obj, 12, [1,3,4,5], 1, 2 )

  CALL SetSparsity( obj, 1, [1,2,3,5,6,7,10,11,12], 2, 1 )
  CALL SetSparsity( obj, 2, [2,1,3,6,7,11], 2, 1 )
  CALL SetSparsity( obj, 3, [3,1,2,4,5,6,7,11,8,9,12,10], 2, 1 )
  CALL SetSparsity( obj, 4, [4,3,5,12,8,9], 2, 1 )
  CALL SetSparsity( obj, 5, [5,1,3,4,10,11,8,9,12], 2, 1 )

  CALL SetSparsity( obj, 1, [1,2,3,5], 2, 2 )
  CALL SetSparsity( obj, 2, [2,1,3], 2, 2 )
  CALL SetSparsity( obj, 3, [3,1,2,4,5], 2, 2 )
  CALL SetSparsity( obj, 4, [4,3,5], 2, 2 )
  CALL SetSparsity( obj, 5, [5,1,3,4], 2, 2 )
```

```fortran
  CALL SetSparsity(obj)
```

```fortran
  obj = 1.0_DFP
```

```fortran
  CALL Reallocate( m2, 2*(dofobj .tdof. 1), 2*(dofobj .tdof. 1) )
  m2 = 2.0_DFP
  CALL Add( obj=obj, inodenum=[1,2], jnodenum=[1,2], ivar=1, jvar=1, &
    & value=m2, scale=1.0_DFP)
```

```fortran
  m2=obj
  CALL Display(m2, 'test9:')
```

```fortran
  CALL Deallocate( obj )
END PROGRAM main
```
