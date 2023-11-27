This example shows the usage of `UltrasphericalEvalAll` method.

This routine evaluates Ultraspherical polynomial upto order n, for many points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  real( dfp ), parameter :: lambda=0.5_DFP
  type(string) :: astr
```

```fortran title "Ultraspherical-Gauss"
  x = [-1.0, -0.5, 0.0, 0.5, 1.0]
  n = 5; call callme
```

<details>
<summary>See results</summary>
<div>

| P0 | P1   | P2     | P3      | P4       | P5           |
|----|------|--------|---------|----------|--------------|
| 1  | -1   | 1      | -1      | 1        | -1           |
| 1  | -0.5 | -0.125 | 0.4375  | -0.28906 | -8.98438E-02 |
| 1  | 0    | -0.5   | -0      | 0.375    | 0            |
| 1  | 0.5  | -0.125 | -0.4375 | -0.28906 | 8.98438E-02  |
| 1  | 1    | 1      | 1       | 1        | 1            |

</div>
</details>

```fortran
  contains
  subroutine callme
    ans= UltrasphericalEvalAll( n=n, x=x, lambda=lambda )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
