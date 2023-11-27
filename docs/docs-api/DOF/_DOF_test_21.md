This example show how to use `Set` method.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: dofobj
    INTEGER( I4B ), ALLOCATABLE :: indx( : )
    REAL(DFP), ALLOCATABLE :: vec(:), value(:), ans(:)
```

Initiate an instance of [DOF_](DOF_.md)

```fortran
    CALL Initiate( dofobj, tNodes=[10, 5], &
      & names=["V", "P"], spaceCompo=[2, 1], &
      & timeCompo=[2, 2], storageFMT = FMT_DOF )
```

Initiate a vector of reals.

```fortran
    CALL Initiate(vec, dofobj)
    CALL Initiate(ans, dofobj)
```

Set Methods:

```fortran
    CALL Set( vec=vec, obj=dofobj, nodenum=[1], value=[1.0_DFP], &
        & conversion=[NONE] )
    ans(1) = 1.0
    ans(11)=1.0
    ans(21)=1.0
    ans(31)=1.0
    ans(41) = 1.0
    ans(46)=1.0
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Set( vec=vec, obj=dofobj, nodenum=[1,2], value=[1.0_DFP], &
        & conversion=[NONE] )
    ans(1:2) = 1.0
    ans(11:12)=1.0
    ans(21:22)=1.0
    ans(31:32)=1.0
    ans(41:42) = 1.0
    ans(46:47)=1.0
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & conversion=[NONE] )
    ans(1:2) = [1,2]
    ans(11:12)=[1,2]
    ans(21:22)=[1,2]
    ans(31:32)=[1,2]
    ans(41:42)=[1,2]
    ans(46:47)=[1,2]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1], &
        & value=arange(1.0_DFP, 6.0_DFP), &
        & conversion=[NONE] )
    ans([1,11,21,31,41,46]) = arange(1.0_DFP, 6.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1], &
        & value=arange(1.0_DFP, 6.0_DFP), &
        & conversion=[NodesToDOF] )
    ans([1,11,21,31,41,46]) = arange(1.0_DFP, 6.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1], &
        & value=arange(1.0_DFP, 6.0_DFP), &
        & conversion=[DOFtoNodes] )
    ans([1,11,21,31,41,46]) = arange(1.0_DFP, 6.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1,2], &
        & value=arange(1.0_DFP, 12.0_DFP), &
        & conversion=[NONE] )
    ans([1,2,11,12,21,22,31,32,41,42,46,47]) = arange(1.0_DFP, 12.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, obj=dofobj, &
        & nodenum=[1,2], &
        & value=arange(1.0_DFP, 12.0_DFP), &
        & conversion=[DOFtoNodes] )
    ans([1,2,11,12,21,22,31,32,41,42,46,47]) = arange(1.0_DFP, 12.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=arange(1.0_DFP, 12.0_DFP), &
        & conversion=[NodesToDOF] )
    ans([1,11,21,31,41,46]) = arange(1.0_DFP, 6.0_DFP)
    ans([2,12,22,32,42,47]) = arange(7.0_DFP, 12.0_DFP)
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & idof=1 )
    ans(1:2) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & idof=2 )
    ans(11:12) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & idof=3 )
    ans(21:22) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & idof=4 )
    ans(31:32) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & idof=5 )
    ans(41:42) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=1, &
        & idof=1 )
    ans(1:2) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=1, &
        & idof=2 )
    ans(11:12) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=1, &
        & idof=3 )
    ans(21:22) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=1, &
        & idof=4 )
    ans(31:32) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=2, &
        & idof=1 )
    ans(41:42) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    vec = 0.0; ans = 0.0
    CALL Set( vec=vec, &
        & obj=dofobj, &
        & nodenum=[1,2], &
        & value=[1.0_DFP, 2.0_DFP], &
        & ivar=2, &
        & idof=2 )
    ans(46:47) = [1.0_DFP, 2.0_DFP]
    CALL OK( ALL(vec .approxeq. ans), 'set' )
```


```fortran
    CALL Deallocate( dofobj )
END PROGRAM main
```
