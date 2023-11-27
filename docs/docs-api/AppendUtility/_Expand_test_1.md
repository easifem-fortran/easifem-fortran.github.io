```fortran
program main
use easifemBase
implicit none

integer(I4B), allocatable :: aintvec(:)
integer(I4B) :: n, val
```

First call
We set n = 0, as aintvec is not allocated.

```fortran
val = 1
n = 0
CALL Expand(vec=aintvec, n=n, chunk_size=10_I4B, val=val, finished=.FALSE.)

CALL Display(aintvec, "aintvec = ")
CALL Display(n, "n = ")
CALL Display(size(aintvec), "size of aintvec = " )
```

```txt title="results"
n = 1
size of aintvec = 10
```

Let's finish.

```fortran
val = 2
CALL Expand(vec=aintvec, n=n, chunk_size=10_I4B, val=val, finished=.TRUE.)

CALL Display(aintvec, "aintvec= ")
CALL Display(n, "n = ")
CALL Display(size(aintvec), "size of aintvec = " )
```

```txt title="results"
aintvec= 
---------
    1    
    2    

n = 2

size of aintvec = 2
```

```fortran
end program main
```
