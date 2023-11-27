```fortran
program main
use easifemBase
implicit none

call display(&
  & logspace(a=1.0, b=10.0, N=10, endPoint=.true., base=10), &
  & "ans:", full=.true.  )
end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
    ans:   
-----------
1.00000E+01
1.00000E+02
1.00000E+03
1.00000E+04
1.00000E+05
1.00000E+06
1.00000E+07
1.00000E+08
1.00000E+09
1.00000E+10
```

</div>
</details>
