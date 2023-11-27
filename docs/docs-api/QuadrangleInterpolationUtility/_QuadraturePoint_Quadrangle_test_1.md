```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, quadType
  real( dfp ), allocatable :: x(:,:), xij(:, :)

  order=2
  xij = RefQuadrangleCoord("BIUNIT")
  quadType=GaussLegendre

  x =QuadraturePoint_Quadrangle(  &
    & order=order, &
    & quadType=quadType)

  call display( Mdencode(x), "xij (order="//tostring(order)//")=" )

end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=2)=

| |  |  |  |  |
|--- |  --- |  --- |  --- |  --- |
| $\xi$ | -0.57735 | -0.57735 | 0.57735 | 0.57735 |
| $\eta$ | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 1 | 1 | 1 | 1 |

</div>
</details>
