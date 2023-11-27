```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  order=5
  xij = RefTriangleCoord("UNIT")
  ipType=BlythPozLegendre
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
  & ipType=ipType, layout=layout, xij=xij)
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
| -1.85037E-16 | -1.85037E-16 |
| 1 | -1.85037E-16 |
| -1.85037E-16 | 1 |
| 0.11747 | -1.4803E-16 |
| 0.35738 | -3.70074E-17 |
| 0.64262 | -3.70074E-17 |
| 0.88253 | -1.29526E-16 |
| 0.88253 | 0.11747 |
| 0.64262 | 0.35738 |
| 0.35738 | 0.64262 |
| 0.11747 | 0.88253 |
| -1.29526E-16 | 0.88253 |
| -3.70074E-17 | 0.64262 |
| -3.70074E-17 | 0.35738 |
| -1.4803E-16 | 0.11747 |
| 0.15829 | 0.15829 |
| 0.68343 | 0.15829 |
| 0.15829 | 0.68343 |
| 0.4133 | 0.17339 |
| 0.4133 | 0.4133 |
| 0.17339 | 0.4133 |

</div>
</details>
