```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  real( dfp ) :: lambda

  order=3
  lambda = 0.5_DFP
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=GaussUltrasphericalLobatto
  layout="VEFC"
  x =InterpolationPoint_Quadrangle( &
    & order=order, &
    & ipType=ipType, &
    & layout=layout, &
    & xij=xij, &
    & lambda=lambda)

  call display( Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=3)=

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
