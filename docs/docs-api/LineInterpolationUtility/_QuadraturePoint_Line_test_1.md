```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp) :: x
  real(dfp), allocatable :: xij(:,:), coeff(:,:), ans(:, :)
  character( len = * ), parameter :: layout="INCREASING" 
  integer(i4b) :: quadType

  order = 4_I4B

  quadType = GaussLegendre
  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout)
  call display(mdencode(ans), "GaussLegendre: " //char_lf//char_lf ) 

  quadType = GaussLegendreLobatto 
  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)
  call display(mdencode(ans), "GaussLegendreLobatto: " //char_lf//char_lf)

  quadType = GaussChebyshev
  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)
  call display(mdencode(ans), "GaussChebyshev: "//char_lf//char_lf)

  quadType = GaussChebyshevLobatto
  ans = QuadraturePoint_Line(order=order, quadType=quadType, layout=layout, xij=xij)
  call display(mdencode(ans), "GaussChebyshevLobatto: "//char_lf//char_lf)

end program main
```

<details>
<summary>See results</summary>
<div>

GaussLegendre:

|  |  |  |
|  --- |  --- |  --- |
| -0.7746 | 3.71231E-16 | 0.7746 |
| 0.55556 | 0.88889 | 0.55556 |

GaussLegendreLobatto:

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| -1 | -0.44721 | 0.44721 | 1 |
| 0.16667 | 0.83333 | 0.83333 | 0.16667 |

GaussChebyshev:

|  |  |  |
|  --- |  --- |  --- |
| -0.86603 | 1.03412E-13 | 0.86603 |
| 1.0472 | 1.0472 | 1.0472 |

GaussChebyshevLobatto:

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| -1 | -0.5 | 0.5 | 1 |
| 0.5236 | 1.0472 | 1.0472 | 0.5236 |

</div>
</details>
