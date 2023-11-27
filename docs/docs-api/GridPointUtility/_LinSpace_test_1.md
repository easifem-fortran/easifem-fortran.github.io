```fortran
program main
use easifemBase
implicit none

call display(linspace(1., 10., 10), "ans: ", full=.true.)
end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
 ans:  
-------
 1.0000
 2.0000
 3.0000
 4.0000
 5.0000
 6.0000
 7.0000
 8.0000
 9.0000
10.0000
```

</div>
</details>
