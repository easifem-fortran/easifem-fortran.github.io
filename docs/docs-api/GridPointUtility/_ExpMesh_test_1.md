```fortran
program main
use easifemBase
implicit none

call Display(expmesh(rmin=1.0, rmax=100.0, a=10.0, N=10), "ans: ", full=.true. )
end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
 ans:  
-------
  1.000
  3.422
  6.551
 10.592
 15.810
 22.551
 31.256
 42.500
 57.021
 75.777
100.000
```

</div>
</details>
