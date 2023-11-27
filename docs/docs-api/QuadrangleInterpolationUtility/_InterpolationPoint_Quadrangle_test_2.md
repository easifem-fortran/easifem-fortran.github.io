```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout

  order=3
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=GaussLegendreLobatto
  layout="VEFC"

  x =InterpolationPoint_Quadrangle( &
    & order=order, &
    & ipType=ipType,  &
    & layout=layout,  &
    & xij=xij)

  call display( Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=5)=

|  |  |
|  --- |  --- |
| -1 | -1 |
| 1 | -1 |
| 1 | 1 |
| -1 | 1 |
| -0.44721 | -1 |
| 0.44721 | -1 |
| 1 | -0.44721 |
| 1 | 0.44721 |
| 0.44721 | 1 |
| -0.44721 | 1 |
| -1 | 0.44721 |
| -1 | -0.44721 |
| -0.44721 | -0.44721 |
| -0.44721 | 0.44721 |
| 0.44721 | 0.44721 |
| 0.44721 | -0.44721 |

</div>
</details>
