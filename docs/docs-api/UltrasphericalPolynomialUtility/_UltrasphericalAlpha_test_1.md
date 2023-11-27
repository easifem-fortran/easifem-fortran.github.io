```fortran
program main
use easifembase
implicit none
CALL Display(UltrasphericalAlpha(n=5, lambda=0.5_DFP), "ans:" )
CALL Display(UltrasphericalBeta(n=5, lambda=0.5_DFP), "ans:" )
end program main
```

```txt title="results"
ans:0.00000
ans:0.252525
```
