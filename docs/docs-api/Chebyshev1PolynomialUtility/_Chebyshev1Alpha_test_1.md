```fortran
program main
use easifembase
implicit none
CALL Display(Chebyshev1Alpha(n=5), "ans:" )
CALL Display(Chebyshev1Beta(n=5), "ans:" )
end program main
```

```txt title="results"
ans:0.00000
ans:0.250000
```
