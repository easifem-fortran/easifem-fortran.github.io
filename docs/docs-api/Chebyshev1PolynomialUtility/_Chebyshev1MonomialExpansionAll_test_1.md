```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: coeff(:, :)
  type(string) :: astr
```

```fortran title "Chebyshev1MonomialExpansionAll"
  n = 5; call callme
```

| P0 | P1 | P2 | P3 | P4 | P5  |
|----|----|----|----|----|-----|
| 1  | 0  | -1 | -0 | 1  | 0   |
| 0  | 1  | 0  | -3 | -0 | 5   |
| 0  | 0  | 2  | 0  | -8 | -0  |
| 0  | 0  | 0  | 4  | 0  | -20 |
| 0  | 0  | 0  | 0  | 8  | 0   |
| 0  | 0  | 0  | 0  | 0  | 16  |

```fortran title "Chebyshev1MonomialExpansion"
  n = 5; call callme2
```

| x0 | x1 | x2 | x3  | x4 | x5 |
|----|----|----|-----|----|----|
| 0  | 5  | -0 | -20 | 0  | 16 |

```fortran
  contains
  subroutine callme
    coeff=Chebyshev1MonomialExpansionAll( n=n )
    astr = MdEncode( coeff )
    call display( astr%chars(), "" )
  end subroutine callme
  !!
  subroutine callme2
    astr = MdEncode( Chebyshev1MonomialExpansion( n=n ) )
    call display( astr%chars(), "" )
  end subroutine callme2
```

```fortran
end program main
```
