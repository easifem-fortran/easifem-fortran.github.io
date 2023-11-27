```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  integer( i4b ), allocatable :: ans( :, : )

  order=1
  ans = LagrangeDegree_Quadrangle( order=order )
  call display( mdencode(ans), "ans (order="//tostring(order)//")=" )
  call blankLines(nol=2)

  order=2
  ans = LagrangeDegree_Quadrangle( order=order )
  call display( mdencode(ans), "ans (order="//tostring(order)//")=" )
  call blankLines(nol=2)

  order=3
  ans = LagrangeDegree_Quadrangle( order=order )
  call display( mdencode(ans), "ans (order="//tostring(order)//")=" )
  call blankLines(nol=2)
end program main
```

<details>
<summary>See results</summary>
<div>

ans (order=1)=

|  a |  b |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 0 | 1 |
| 1 | 1 |

ans (order=2)=

|  a | b |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 2 | 0 |
| 0 | 1 |
| 1 | 1 |
| 2 | 1 |
| 0 | 2 |
| 1 | 2 |
| 2 | 2 |

ans (order=3)=

| a  | b |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 2 | 0 |
| 3 | 0 |
| 0 | 1 |
| 1 | 1 |
| 2 | 1 |
| 3 | 1 |
| 0 | 2 |
| 1 | 2 |
| 2 | 2 |
| 3 | 2 |
| 0 | 3 |
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |

</div>
</details>
