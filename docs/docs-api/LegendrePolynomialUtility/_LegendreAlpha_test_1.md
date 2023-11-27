```fortran
program main
use easifembase
implicit none
CALL Display(LegendreAlpha(n=5), "ans:" )
CALL Display(LegendreBeta(n=5), "ans:" )
end program main
```

```txt title="results"
ans:0.00000
ans:0.252525
```
