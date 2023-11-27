```fortran
program main
use easifembase
implicit none
CALL Display(JacobiAlpha(n=5, alpha=0.0_DFP, beta=0.0_DFP), "ans:" )
CALL Display(JacobiBeta(n=5, alpha=0.0_DFP, beta=0.0_DFP), "ans:" )
end program main
```

```txt title="results"
ans:0.00000
ans:0.252525
```
