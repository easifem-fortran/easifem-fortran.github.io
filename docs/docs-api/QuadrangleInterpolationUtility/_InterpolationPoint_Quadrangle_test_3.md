```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout

  order=3
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=GaussChebyshevLobatto
  layout="VEFC"

  x =InterpolationPoint_Quadrangle(  &
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

xij (order=3) =

|      |      |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 0 | 1 |
| 0.11747 | 0 |
| 0.35738 | 0 |
| 0.64262 | 0 |
| 0.88253 | 0 |
| 0.88253 | 0.11747 |
| 0.64262 | 0.35738 |
| 0.35738 | 0.64262 |
| 0.11747 | 0.88253 |
| 0 | 0.88253 |
| 0 | 0.64262 |
| 0 | 0.35738 |
| 0 | 0.11747 |
| 0.15829 | 0.15829 |
| 0.68343 | 0.15829 |
| 0.15829 | 0.68343 |
| 0.4133 | 0.17339 |
| 0.4133 | 0.4133 |
| 0.17339 | 0.4133 |

</div>
</details>
