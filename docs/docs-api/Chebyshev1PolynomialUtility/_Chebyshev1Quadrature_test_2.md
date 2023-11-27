```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  logical(lgt), parameter :: onlyInside=.true.
```

```fortran title "Chebyshev1-Gauss"
  n = 2; quadType=Gauss; call callme
```

| pt       | wt     |
|----------|--------|
| -0.70711 | 1.5708 |
| 0.70711  | 1.5708 |

```fortran title "Chebyshev1-Radau-Left"
  n = 2; quadType=GaussRadauLeft; call callme
```

| pt       | wt      |
|----------|---------|
| -0.30902 | 0.62832 |
| 0.80902  | 0.62832 |

```fortran title "Chebyshev1-Radau-Right"
  n = 2; quadType=GaussRadauRight; call callme
```

| pt       | wt      |
|----------|---------|
| -0.80902 | 0.31416 |
| 0.30902  | 0.62832 |

```fortran title "Chebyshev1-Lobatto"
  n = 2; quadType=GaussLobatto; call callme
```

| pt   | wt     |
|------|--------|
| -0.5 | 1.0472 |
| 0.5  | 1.0472 |

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call Chebyshev1Quadrature( n=n, pt=pt, wt=wt, &
      & quadType=quadType, onlyInside=onlyInside )
    msg = "| pt | wt |"
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
