```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  REAL( DFP )  :: alpha, beta

  order=3
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=GaussJacobiLobatto
  layout="VEFC"
  alpha = 0.0_DFP
  beta = 0.0_DFP

  x =InterpolationPoint_Quadrangle(  &
    & order=order, &
    & ipType=ipType, &
    & layout=layout, &
    & xij=xij, &
    & alpha=alpha, &
    & beta = beta)

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
