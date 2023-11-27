```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( CSRMatrix_ ) :: obj
    TYPE( DOF_ ) :: dofobj
    REAL(DFP), ALLOCATABLE :: m2(:,:)

    CALL Initiate( obj=dofobj, tNodes=[4, 2], names=['V', 'P'], &
      & spaceCompo=[2, 1], timeCompo=[1,1], storageFMT=FMT_DOF )

    CALL Initiate( obj, ncol=.tnodes. dofobj, &
        & nrow=.tnodes. dofobj, &
        & idof=dofobj, jdof=dofobj)

    m2 = obj
    CALL Display( m2, "m2:" )

    CALL Deallocate( obj )
END PROGRAM main
```
