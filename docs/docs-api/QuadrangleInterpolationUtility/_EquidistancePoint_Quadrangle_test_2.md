```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, p, q, r
  real( dfp ), allocatable :: x(:,:)

  p=1; q=1
  x = EquidistancePoint_Quadrangle( p=p, q=q )
  call display( mdencode(TRANSPOSE(x)) , "xij (order="//tostring([p,q])//")=" )
  call blanklines(nol=2)

  p=2; q=2
  x = EquidistancePoint_Quadrangle( p=p, q=q)
  call display( mdencode(TRANSPOSE(x)), "xij (order="//tostring([p,q])//")=" )
  call blanklines(nol=2)

  p=3; q=3
  x = EquidistancePoint_Quadrangle( p=p, q=q)
  call display( mdencode(TRANSPOSE(x)), "xij (order="//tostring([p,q])//")=" )
  call blanklines(nol=2)
end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=1)=

|  |  |  |
|  --- |  --- |  --- |
| -1 | -1 | 0 |
| 1 | -1 | 0 |
| 1 | 1 | 0 |
| -1 | 1 | 0 |

xij (order=2)=

|  |  |  |
|  --- |  --- |  --- |
| -1 | -1 | 0 |
| 1 | -1 | 0 |
| 1 | 1 | 0 |
| -1 | 1 | 0 |
| 0 | -1 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| -1 | 0 | 0 |
| 0 | 0 | 0 |

xij (order=3)=

|  |  |  |
|  --- |  --- |  --- |
| -1 | -1 | 0 |
| 1 | -1 | 0 |
| 1 | 1 | 0 |
| -1 | 1 | 0 |
| -0.33333 | -1 | 0 |
| 0.33333 | -1 | 0 |
| 1 | -0.33333 | 0 |
| 1 | 0.33333 | 0 |
| 0.33333 | 1 | 0 |
| -0.33333 | 1 | 0 |
| -1 | 0.33333 | 0 |
| -1 | -0.33333 | 0 |
| -0.33333 | -0.33333 | 0 |
| 0.33333 | -0.33333 | 0 |
| 0.33333 | 0.33333 | 0 |
| -0.33333 | 0.33333 | 0 |

</div>
</details>
