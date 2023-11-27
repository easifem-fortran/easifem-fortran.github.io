```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout

  order=3
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=Equidistance
  layout="VEFC"

  x =InterpolationPoint_Quadrangle(  &
    & order=order, &
    & ipType=ipType,  &
    & layout=layout,  &
    & xij=xij)

  call display( Mdencode(x), "xij (order="//tostring(order)//")=" )


  order=3
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=Equidistance
  layout="INCREASING"

  x =InterpolationPoint_Quadrangle(  &
    & order=order, &
    & ipType=ipType,  &
    & layout=layout,  &
    & xij=xij)

  call display( Mdencode(x), "xij (order="//tostring(order)//")=" )

end program main
```

<details>
<summary>See results</summary>
<div>

xij (order=3), VEFC:

| |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- | --- |
| $x$ | -1 | 1 | 1 | -1 | -0.33333 | 0.33333 | 1 | 1 | 0.33333 | -0.33333 | -1 | -1 | -0.33333 | -0.33333 | 0.333 33 | 0.33333 |
| $y$ | -1 | -1 | 1 | 1 | -1 | -1 | -0.33333 | 0.33333 | 1 | 1 | 0.33333 | -0.33333 | -0.33333 | 0.33333 | 0.3333 3 | -0.33333 |

xij (order=3)=, INCREASING

| |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- | --- |
| $x$ | -1 | -1 | -1 | -1 | -0.33333 | -0.33333 | -0.33333 | -0.33333 | 0.33333 | 0.33333 | 0.33333 | 0.33333 | 1 | 1 | 1 | 1 |
| $y$ | | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 | -1 | -0.33333 | 0.33333 | 1 |

</div>
</details>
