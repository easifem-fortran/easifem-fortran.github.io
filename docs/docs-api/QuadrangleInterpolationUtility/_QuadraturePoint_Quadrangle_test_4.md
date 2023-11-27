```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, quadType
  real( dfp ), allocatable :: x(:,:), xij(:, :)

  order=2
  xij = RefQuadrangleCoord("BIUNIT")
  quadType=GaussLegendreRadauRight

  x =QuadraturePoint_Quadrangle(  &
    & order=order, &
    & quadType=quadType)

  call display( Mdencode(x), "xij (order="//tostring(order)//")=" // char_lf // char_lf )

end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=2)=

|  |  |  |  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| -1 | -1 | -1 | -2.66578E-17 | -2.66578E-17 | -2.66578E-17 | 1 | 1 | 1 |
| -1 | -2.66578E-17 | 1 | -1 | -2.66578E-17 | 1 | -1 | -2.66578E-17 | 1 |
| 0.11111 | 0.44444 | 0.11111 | 0.44444 | 1.7778 | 0.44444 | 0.11111 | 0.44444 | 0.11111 |

</div>
</details>
etails>
