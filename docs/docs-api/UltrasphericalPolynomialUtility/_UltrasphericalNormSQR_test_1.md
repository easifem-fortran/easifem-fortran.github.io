```fortran
program main
use easifembase
implicit none
CALL Display(UltrasphericalNormSQR(5, 0.5_DFP), "ans: " )
end program main
```

```txt title="results"
ans: 0.181818
```
