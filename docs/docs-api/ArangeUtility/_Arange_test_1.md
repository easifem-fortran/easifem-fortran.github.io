```fortran
program main
use easifemBase
implicit none
CALL Display(arange(1.0, 10.0, 1.0), "ans = ", full=.true., orient="row" )
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
                                         ans =                                          
----------------------------------------------------------------------------------------
 1.0000   2.0000   3.0000   4.0000   5.0000   6.0000   7.0000   8.0000   9.0000  10.0000
```

</div>
</details>

```fortran
CALL Display(arange(1, 10, 2), "ans = ", full=.true., orient="row" )
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
    ans =    
-------------
1  3  5  7  9
```

</div>
</details>

```fortran
end program main
```
