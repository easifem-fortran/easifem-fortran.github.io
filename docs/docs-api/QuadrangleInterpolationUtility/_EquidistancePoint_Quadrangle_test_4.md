```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, p, q, r
  real( dfp ), allocatable :: x(:,:)

  p=3; q=1
  x = EquidistancePoint_Quadrangle( p=p, q=q)
  call display( mdencode(TRANSPOSE(x)), "xij (order="//tostring([p,q])//")=" )
  call blanklines(nol=2)

end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=2, 1)  =

|  |  |
|  --- |  --- |
| -1 | -1 |
| 1 | -1 |
| 1 | 1 |
| -1 | 1 |
| 0 | -1 |
| 0 | 1 |

</div>
</details>
