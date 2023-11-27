```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, quadType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: refTriangle
  order=2
  xij = RefTriangleCoord("UNIT")
  quadType=Equidistance
  refTriangle="UNIT"

  x =QuadraturePoint_Triangle(  &
    & order=order, &
    & quadType=quadType,  &
    & refTriangle=refTriangle)

  call display( Mdencode(x), "xij (order="//tostring(order)//")="  // char_lf // char_lf )

end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=2)=

|  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 1.11022E-16 | 5.55112E-17 | 0.5 | 0.25 | 1 | 0.5 |
| 0 | 0.5 | 0 | 0.5 | 0 | 0.5 |
| 2.77778E-02 | 5.55556E-02 | 0.11111 | 0.22222 | 2.77778E-02 | 5.55556E-02 |

</div>
</details>
