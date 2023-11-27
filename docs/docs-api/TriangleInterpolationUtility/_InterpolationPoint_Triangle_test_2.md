```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :)
  CHARACTER( 20 ) :: layout
  order=5
  xij = RefTriangleCoord("UNIT")
  ipType=BlythPozChebyshev
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
 | 9.54915E-02 | -2.02431E-14 |
 | 0.34549 | -3.27886E-14 |
 | 0.65451 | -3.28071E-14 |
 | 0.90451 | -2.02431E-14 |
 | 0.90451 | 9.54915E-02 |
 | 0.65451 | 0.34549 |
 | 0.34549 | 0.65451 |
 | 9.54915E-02 | 0.90451 |
 | -2.02431E-14 | 0.90451 |
 | -3.28071E-14 | 0.65451 |
 | -3.27886E-14 | 0.34549 |
 | -2.02431E-14 | 9.54915E-02 |
 | 0.14699 | 0.14699 |
 | 0.70601 | 0.14699 |
 | 0.14699 | 0.70601 |
 | 0.41667 | 0.16667 |
 | 0.41667 | 0.41667 |
 | 0.16667 | 0.41667 |

</div>
</details>
