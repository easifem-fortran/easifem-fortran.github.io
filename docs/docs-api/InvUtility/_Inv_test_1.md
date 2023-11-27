```fortran
program main
use easifemBase
implicit none

real(dfp) :: amat(3,3), ainv(3,3)

call random_number(amat)
call display(Mdencode(amat), "amat: " // char_lf // char_lf)
call inv(invA=ainv, a=amat)
call display(Mdencode(ainv), "ainv: " // char_lf // char_lf)
end program main
```

<details>
<summary>See results</summary>
<div>

amat:

 |  |  |  |
 |  --- |  --- |  --- |
 | 0.88179 | 0.51365 | 0.53015 |
 | 0.24482 | 9.60291E-02 | 0.79165 |
 | 0.25111 | 0.42564 | 9.45404E-04 |

ainv:

 |  |  |  |
 |  --- |  --- |  --- |
 | 2.2076 | -1.4756 | -2.3312 |
 | -1.3012 | 0.86698 | 3.7241 |
 | -0.52488 | 1.6144 | 0.26919 |

</div>
</details>
