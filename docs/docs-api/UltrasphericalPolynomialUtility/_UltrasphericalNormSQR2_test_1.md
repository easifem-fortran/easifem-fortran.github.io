```fortran
program main
use easifembase
implicit none
CALL Display(UltrasphericalNormSQR2(5, 0.5_DFP), "ans: " )
end program main
```

```txt title="results"
 ans:  
-------
2.00000
0.66667
0.40000
0.28571
0.22222
0.18182
```
