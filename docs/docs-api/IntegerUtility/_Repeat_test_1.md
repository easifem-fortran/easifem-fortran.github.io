In this example we test Repeat function.

```fortran
program main
use easifemBase
implicit none

call Display(Repeat([1,2,3], 3), "Repeat test(1) = " )
call Display(Repeat([1.,2.,3.], 3), "Repeat test(2) = " )
end program main
```

## Results

```fortran
Repeat test(1) = 
1
2
3
1
.
.
.
3
1
2
3

Repeat test(2) = 
1.00000
2.00000
3.00000
1.00000
.
.
.
3.00000
1.00000
2.00000
3.00000
```
