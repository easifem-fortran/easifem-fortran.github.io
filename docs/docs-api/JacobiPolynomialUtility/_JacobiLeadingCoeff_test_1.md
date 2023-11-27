```fortran
program main
use easifembase
implicit none
CALL Display(JacobiLeadingCoeff(5, 0.0_DFP, 0.0_DFP), "ans: " )
end program main
```

```txt title="results"
ans: 7.87500
```
