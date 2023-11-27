```fortran
program main
use easifemBase
implicit none

real(dfp) :: amat(3,3), ainv(3,3)

call random_number(amat)
call display(Mdencode(amat), "amat: " // char_lf // char_lf)
call display(det(amat), "det : " // char_lf // char_lf)
end program main
```

<details>
<summary>See results</summary>
<div>

amat:

 |  |  |  |
 |  --- |  --- |  --- |
 | 0.6584 | 0.74781 | 0.1522 |
 | 0.12227 | 0.83529 | 0.23357 |
 | 0.19271 | 0.50045 | 0.99899 |

det :

0.399570

</div>
</details>
