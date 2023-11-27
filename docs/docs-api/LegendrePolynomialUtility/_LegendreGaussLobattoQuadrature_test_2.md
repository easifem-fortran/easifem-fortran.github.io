```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, ii
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  do ii = 1, 8
  n = ii; call callme
  end do
  contains
  subroutine callme
  call reallocate( pt, n+2, wt, n+2 )
  call LegendreGaussLobattoQuadrature( n=n, pt=pt, wt=wt )
  msg=char_lf // char_lf // "Legendre Gauss Lobatto points, n+2 = " &
      & // tostring( n+2 ) // char_lf // char_lf
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
  end subroutine
end program main
```

Legendre Gauss Lobatto points, n+2 = 3

 |  |  |
 |  --- |  --- |
 | -1 | 0.33333 |
 | -2.66578E-17 | 1.3333 |
 | 1 | 0.33333 |

Legendre Gauss Lobatto points, n+2 = 4

 |  |  |
 |  --- |  --- |
 | -1 | 0.16667 |
 | -0.44721 | 0.83333 |
 | 0.44721 | 0.83333 |
 | 1 | 0.16667 |

Legendre Gauss Lobatto points, n+2 = 5

 |  |  |
 |  --- |  --- |
 | -1 | 0.1 |
 | -0.65465 | 0.54444 |
 | 4.1375E-17 | 0.71111 |
 | 0.65465 | 0.54444 |
 | 1 | 0.1 |

Legendre Gauss Lobatto points, n+2 = 6

 |  |  |
 |  --- |  --- |
 | -1 | 6.66667E-02 |
 | -0.76506 | 0.37847 |
 | -0.28523 | 0.55486 |
 | 0.28523 | 0.55486 |
 | 0.76506 | 0.37847 |
 | 1 | 6.66667E-02 |

Legendre Gauss Lobatto points, n+2 = 7

 |  |  |
 |  --- |  --- |
 | -1 | 4.7619E-02 |
 | -0.83022 | 0.27683 |
 | -0.46885 | 0.43175 |
 | 2.39125E-16 | 0.48762 |
 | 0.46885 | 0.43175 |
 | 0.83022 | 0.27683 |
 | 1 | 4.7619E-02 |

Legendre Gauss Lobatto points, n+2 = 8

 |  |  |
 |  --- |  --- |
 | -1 | 3.57143E-02 |
 | -0.87174 | 0.2107 |
 | -0.5917 | 0.34112 |
 | -0.2093 | 0.41246 |
 | 0.2093 | 0.41246 |
 | 0.5917 | 0.34112 |
 | 0.87174 | 0.2107 |
 | 1 | 3.57143E-02 |

Legendre Gauss Lobatto points, n+2 = 9

 |  |  |
 |  --- |  --- |
 | -1 | 2.77778E-02 |
 | -0.89976 | 0.1655 |
 | -0.67719 | 0.27454 |
 | -0.36312 | 0.34643 |
 | -2.81541E-16 | 0.37152 |
 | 0.36312 | 0.34643 |
 | 0.67719 | 0.27454 |
 | 0.89976 | 0.1655 |
 | 1 | 2.77778E-02 |

Legendre Gauss Lobatto points, n+2 = 10

 |  |  |
 |  --- |  --- |
 | -1 | 2.22222E-02 |
 | -0.91953 | 0.13331 |
 | -0.73877 | 0.22489 |
 | -0.47792 | 0.29204 |
 | -0.16528 | 0.32754 |
 | 0.16528 | 0.32754 |
 | 0.47792 | 0.29204 |
 | 0.73877 | 0.22489 |
 | 0.91953 | 0.13331 |
 | 1 | 2.22222E-02 |
