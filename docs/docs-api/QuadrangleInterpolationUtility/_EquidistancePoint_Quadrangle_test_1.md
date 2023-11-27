```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)

  order=1
  x = EquidistancePoint_Quadrangle( order=order )
  call display( mdencode(TRANSPOSE(x)) , "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=2
  x = EquidistancePoint_Quadrangle( order=order )
  call display( mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=3
  x = EquidistancePoint_Quadrangle( order=order )
  call display( mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=" )
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
