```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  order=5
  xij = RefTriangleCoord("UNIT")
  ipType=IsaacLegendre
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
| -8.32667E-17 | -8.32667E-17 |
| 1 | -8.32667E-17 |
| -8.32667E-17 | 1 |
| 0.11747 | -4.89901E-17 |
| 0.35738 | -1.58335E-17 |
| 0.64262 | -1.58335E-17 |
| 0.88253 | -4.89901E-17 |
| 0.88253 | 0.11747 |
| 0.64262 | 0.35738 |
| 0.35738 | 0.64262 |
| 0.11747 | 0.88253 |
| -4.89901E-17 | 0.88253 |
| -1.58335E-17 | 0.64262 |
| -1.58335E-17 | 0.35738 |
| -4.89901E-17 | 0.11747 |
| 0.15599 | 0.15599 |
| 0.68802 | 0.15599 |
| 0.15599 | 0.68802 |
| 0.41807 | 0.16387 |
| 0.41807 | 0.41807 |
| 0.16387 | 0.41807 |

</div>
</details>
