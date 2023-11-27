```fortran
program main
use easifemBase
implicit none

real(dfp), allocatable :: x(:,:,:), y(:,:,:), z(:,:,:)

call meshgrid(x, y,z, arange(1._dfp,3._dfp), arange(4._dfp, 5._dfp), arange(6._dfp, 7._dfp) )
call display(mdencode(x), "x:")
call display(mdencode(y), "y:")
call display(mdencode(z), "z:")
end program main
```

<details>
<summary>See results</summary>
<div>

x:( :, :,  1 ) = 

 |  |  | 
 |  --- |  --- | 
 | 1 | 1 | 
 | 2 | 2 | 
 | 3 | 3 | 

( :, :,  2 ) = 

 |  |  | 
 |  --- |  --- | 
 | 1 | 1 | 
 | 2 | 2 | 
 | 3 | 3 | 

y:( :, :,  1 ) = 

 |  |  | 
 |  --- |  --- | 
 | 4 | 5 | 
 | 4 | 5 | 
 | 4 | 5 | 

( :, :,  2 ) = 

 |  |  | 
 |  --- |  --- | 
 | 4 | 5 | 
 | 4 | 5 | 
 | 4 | 5 | 

z:( :, :,  1 ) = 

 |  |  | 
 |  --- |  --- | 
 | 6 | 6 | 
 | 6 | 6 | 
 | 6 | 6 | 

( :, :,  2 ) = 

 |  |  | 
 |  --- |  --- | 
 | 7 | 7 | 
 | 7 | 7 | 
 | 7 | 7 | 

</div>
</details>
