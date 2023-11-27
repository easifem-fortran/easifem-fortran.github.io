```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  order=5
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
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
 | 0 | 0 |
 | 1 | 0 |
 | 0 | 1 |
 | 0.2 | 0 |
 | 0.4 | 0 |
 | 0.6 | 0 |
 | 0.8 | 0 |
 | 0.8 | 0.2 |
 | 0.6 | 0.4 |
 | 0.4 | 0.6 |
 | 0.2 | 0.8 |
 | 0 | 0.8 |
 | 0 | 0.6 |
 | 0 | 0.4 |
 | 0 | 0.2 |
 | 0.2 | 0.2 |
 | 0.6 | 0.2 |
 | 0.2 | 0.6 |
 | 0.4 | 0.2 |
 | 0.4 | 0.4 |
 | 0.2 | 0.4 |

</div>
</details>
