```fortran
PROGRAM main
use easifemBase
type(multiindices_) :: obj
integer(i4b) :: n, d
integer(i4b), allocatable :: indices(:,:)
```

!!! note "Size"

```fortran
  n = 0; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(0,1)=")
  !!
  n = 1; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(1,1)=")
  !!
  n = 2; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(2,1)=")
  !!
  n = 3; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(3,1)=")
```

!!! example "result"
    size(0,1)=1
    size(1,1)=2
    size(2,1)=3
    size(3,1)=4

!!! note "Size"

```fortran
  n = 0; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, upto=.TRUE.), "size(0,1)=")
  !!
  n = 1; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, upto=.TRUE.), "size(1,1)=")
  !!
  n = 2; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, upto=.TRUE.), "size(2,1)=")
  !!
  n = 3; d = 1
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, upto=.TRUE.), "size(3,1)=")
```

!!! example "result"
    size(0,1)=1
    size(1,1)=3
    size(2,1)=6
    size(3,1)=10

!!! note "Size"

```fortran
  n = 0; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(0,2)=")
  !!
  n = 1; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(1,2)=")
  !!
  n = 2; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(2,2)=")
  !!
  n = 3; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(3,2)=")
```

!!! example "result"
    size(0,2)=1
    size(1,2)=3
    size(2,2)=6
    size(3,2)=10

!!! note "Size"

```fortran
  n = 0; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, .true.), "size(0,2)=")
  !!
  n = 1; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, .true.), "size(1,2)=")
  !!
  n = 2; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, .true.), "size(2,2)=")
  !!
  n = 3; d = 2
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj, .true.), "size(3,2)=")
```

!!! example "result"
    size(0,2)=1
    size(1,2)=4
    size(2,2)=10
    size(3,2)=20

!!! note "Size"

```fortran
  n = 0; d = 3
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(0,3)=")
  !!
  n = 1; d = 3
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(1,3)=")
  !!
  n = 2; d = 3
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(2,3)=")
  !!
  n = 3; d = 3
  obj=MultiIndices(n=n, d=d)
  CALL Display(SIZE(obj), "size(3,3)=")
```

!!! example "result"
    size(0,3)=1
    size(1,3)=4
    size(2,3)=10
    size(3,3)=20

```fortran
END PROGRAM main
```
