```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, ii
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  
  do ii = 1, 10
    n = ii; call callme
  end do

  contains
  subroutine callme
  call reallocate( pt, n, wt, n )
  call LegendreGaussQuadrature( n=n, pt=pt, wt=wt )
  msg = char_lf // char_lf // "Legendre Gauss Quadrature n = " // tostring( n ) // char_lf // char_lf
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
  end subroutine
end program main
```

Legendre Gauss Quadrature n = 1

 | Point | Weight |
 |  --- |  --- |
 | 0 | 2 |

Legendre Gauss Quadrature n = 2

 | Point | Weight |
 |  --- |  --- |
 | -0.57735 | 1 |
 | 0.57735 | 1 |

Legendre Gauss Quadrature n = 3

 | Point | Weight |
 |  --- |  --- |
 | -0.7746 | 0.55556 |
 | 3.71231E-16 | 0.88889 |
 | 0.7746 | 0.55556 |

Legendre Gauss Quadrature n = 4

 | Point | Weight |
 |  --- |  --- |
 | -0.86114 | 0.34785 |
 | -0.33998 | 0.65215 |
 | 0.33998 | 0.65215 |
 | 0.86114 | 0.34785 |

Legendre Gauss Quadrature n = 5

 | Point | Weight |
 |  --- |  --- |
 | -0.90618 | 0.23693 |
 | -0.53847 | 0.47863 |
 | 2.66893E-17 | 0.56889 |
 | 0.53847 | 0.47863 |
 | 0.90618 | 0.23693 |

Legendre Gauss Quadrature n = 6

 | Point | Weight |
 |  --- |  --- |
 | -0.93247 | 0.17132 |
 | -0.66121 | 0.36076 |
 | -0.23862 | 0.46791 |
 | 0.23862 | 0.46791 |
 | 0.66121 | 0.36076 |
 | 0.93247 | 0.17132 |

Legendre Gauss Quadrature n = 7

 | Point | Weight |
 |  --- |  --- |
 | -0.94911 | 0.12948 |
 | -0.74153 | 0.27971 |
 | -0.40585 | 0.38183 |
 | 1.88509E-16 | 0.41796 |
 | 0.40585 | 0.38183 |
 | 0.74153 | 0.27971 |
 | 0.94911 | 0.12948 |

Legendre Gauss Quadrature n = 8

 | Point | Weight |
 |  --- |  --- |
 | -0.96029 | 0.10123 |
 | -0.79667 | 0.22238 |
 | -0.52553 | 0.31371 |
 | -0.18343 | 0.36268 |
 | 0.18343 | 0.36268 |
 | 0.52553 | 0.31371 |
 | 0.79667 | 0.22238 |
 | 0.96029 | 0.10123 |

Legendre Gauss Quadrature n = 9

 | Point | Weight |
 |  --- |  --- |
 | -0.96816 | 8.12744E-02 |
 | -0.83603 | 0.18065 |
 | -0.61337 | 0.26061 |
 | -0.32425 | 0.31235 |
 | 2.76366E-17 | 0.33024 |
 | 0.32425 | 0.31235 |
 | 0.61337 | 0.26061 |
 | 0.83603 | 0.18065 |
 | 0.96816 | 8.12744E-02 |

Legendre Gauss Quadrature n = 10

 | Point | Weight |
 |  --- |  --- |
 | -0.97391 | 6.66713E-02 |
 | -0.86506 | 0.14945 |
 | -0.67941 | 0.21909 |
 | -0.4334 | 0.26927 |
 | -0.14887 | 0.29552 |
 | 0.14887 | 0.29552 |
 | 0.4334 | 0.26927 |
 | 0.67941 | 0.21909 |
 | 0.86506 | 0.14945 |
 | 0.97391 | 6.66713E-02 |
