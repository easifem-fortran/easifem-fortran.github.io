This example shows the usage of `UnscaledLobattoMonomialExpansionAll` method.

This routine returns the monomial expansion.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: coeff(:, :)
  type(string) :: astr
  n = 5
  coeff=UnscaledLobattoMonomialExpansionAll( n=n )
  astr = MdEncode( coeff )
  call display( astr%chars(), "" )
```

```fortran
end program main
```

| P0   | P1  | P2       | P3       | P4      | P5      |
|------|-----|----------|----------|---------|---------|
| 0.5 | 0.5 | -0.5 | -0 | 0.125 | 0 |
| -0.5 | 0.5 | 0 | -0.5 | -0 | 0.375 |
| 0 | 0 | 0.5 | 0 | -0.75 | -0 |
| 0 | 0 | 0 | 0.5 | 0 | -1.25 |
| 0 | 0 | 0 | 0 | 0.625 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0.875 |
