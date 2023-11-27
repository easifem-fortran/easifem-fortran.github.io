```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp) :: x
  real(dfp), allocatable :: xij(:,:), coeff(:,:), ans(:, :)
  character( len = * ), parameter :: layout="VEFC" 
  integer(i4b) :: ipType
  !! "INCREASING"
  order = 4_I4B

  iptype = Equidistance
  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout)
  call display(ans, "Equidistance: ")

  iptype = GaussLegendre
  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout)
  call display(ans, "GaussLegendre: ")

  iptype = GaussLegendreLobatto 
  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout)
  call display(ans, "GaussLegendreLobatto: ")

  iptype = GaussChebyshev
  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout)
  call display(ans, "GaussChebyshev: ")

  iptype = GaussChebyshevLobatto
  ans = InterpolationPoint_Line(order=order, iptype=iptype, layout=layout)
  call display(ans, "GaussChebyshevLobatto: ")

end program main
```

```txt
               Equidistance:               
-------------------------------------------
0.00000  1.00000  0.25000  0.50000  0.75000
                 GaussLegendre:                 
------------------------------------------------
0.046910  0.230765  0.500000  0.769235  0.953090
             GaussLegendreLobatto:              
------------------------------------------------
-0.00000   1.00000   0.17267   0.50000   0.82733
                GaussChebyshev:                 
------------------------------------------------
0.024472  0.206107  0.500000  0.793893  0.975528
          GaussChebyshevLobatto:           
-------------------------------------------
0.00000  1.00000  0.14645  0.50000  0.85355
```
