This example shows the usage of `LobattoMonomialExpansionAll` method.

This routine returns the monomial expansion.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: coeff(:, :)
  type(string) :: astr
  n = 5; call callme
  contains
  subroutine callme
    coeff=LobattoMonomialExpansionAll( n=n )
    astr = MdEncode( coeff )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

| P0   | P1  | P2       | P3       | P4      | P5      |
|------|-----|----------|----------|---------|---------|
| 0.5  | 0.5 | -0.61237 | -0       | 0.23385 | 0       |
| -0.5 | 0.5 | 0        | -0.79057 | -0      | 0.7955  |
| 0    | 0   | 0.61237  | 0        | -1.4031 | -0      |
| 0    | 0   | 0        | 0.79057  | 0       | -2.6517 |
| 0    | 0   | 0        | 0        | 1.1693  | 0       |
| 0    | 0   | 0        | 0        | 0       | 1.8562  |
