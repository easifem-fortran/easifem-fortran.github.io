This example shows the usage of `UltrasphericalGradientEvalAll` method.

This routine evaluates Ultraspherical polynomial upto order n, for many points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  real( dfp ), parameter :: lambda=0.5_DFP
  type(string) :: astr
  x = -1.0_DFP
  n = 3; call callme

  contains
  subroutine callme
    ans= UltrasphericalGradientEvalAll( n=n, x=x, &
      & lambda=lambda )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

<details>
<summary>See results</summary>
<div>

| P0 | P1 | P2 | P3 |
|----|----|----|----|
| 0  | 1  | -3 | 6  |

</div>
</details>
