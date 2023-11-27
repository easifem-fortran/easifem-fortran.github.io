```fortran
program main
use easifembase
implicit none
CALL Display(JacobiNormSQR(5, 0.0_DFP, 0.0_DFP), "ans: " )
end program main
```

```txt title="results"
ans: 0.181818
```
