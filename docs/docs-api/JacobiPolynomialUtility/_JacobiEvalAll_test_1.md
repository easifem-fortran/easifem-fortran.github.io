This example shows the usage of `JacobiEvalAll` method.
This routine evaluates Jacobi polynomial upto order n, for many points.

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP
  type(string) :: astr
```

```fortran title "Jacobi-Gauss"
  x = [-1.0, 0.0, 1.0]
  n = 3; call callme
```

<details>
<summary>See results</summary>
<div>

| P0 | P1 | P2   | P3 |
|----|----|------|----|
| 1  | -1 | 1    | -1 |
| 1  | 0  | -0.5 | -0 |
| 1  | 1  | 1    | 1  |

</div>
</details>

```fortran
  contains
  subroutine callme
    ans= JacobiEvalAll( n=n, alpha=alpha, beta=beta, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
