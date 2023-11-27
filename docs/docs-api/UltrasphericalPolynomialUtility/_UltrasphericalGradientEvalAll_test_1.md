This example shows the usage of `UltrasphericalGradientEvalAll` method.

This routine evaluates the first derivative of Ultraspherical polynomial upto order n, for many points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  real( dfp ), parameter :: lambda = 0.5_DFP
  type(string) :: astr

  x = [-1.0, 0.0, 1.0]
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

| dP0 | dP1 | dP2 | dP3  |
|-----|-----|-----|------|
| 0   | 1   | -3  | 6    |
| 0   | 1   | 0   | -1.5 |
| 0   | 1   | 3   | 6    |

</div>
</details>
