```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( CSRMatrix_ ) :: obj
    TYPE( DOF_ ) :: dofobj
    REAL( DFP ), ALLOCATABLE :: m2(:,:)
```

Initiate degrees of freedom object [DOF](../DOF/DOF_.md)

```fortran
    CALL Initiate( obj=dofobj, tNodes=[4, 2], names=['V', 'P'], &
      & spaceCompo=[2, 1], timeCompo=[1,1], storageFMT=FMT_DOF )
```

Initiate [CSRMatrix_](CSRMatrix_.md)

```fortran
    CALL Initiate( obj, &
      & ncol=.tnodes. dofobj, &
      & nrow=.tnodes. dofobj, &
      & idof=dofobj, jdof=dofobj )
```

Convert CSRMatrix to dense matrix.

```fortran
    m2 = obj
    CALL Display( m2, "test2" )
```

Cleanup

```fortran
    CALL Deallocate( obj )
END PROGRAM main
```
