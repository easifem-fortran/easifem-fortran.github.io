```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
```

```fortran title "Chebyshev1-Gauss"
  x = [-1.0, 0.0, 1.0]
  n = 4; call callme
```

| dP0 | dP1 | dP2 | dP3 | dP4 |
|-----|-----|-----|-----|-----|
| 0   | 1   | -4  | 9   | -16 |
| 0   | 1   | 0   | -3  | 0   |
| 0   | 1   | 4   | 9   | 16  |

```fortran
  contains
  subroutine callme
    ans= Chebyshev1GradientEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```

