This example shows the usage of `JacobiGaussQuadrature` method.
This routine returns the quadrature points for Jacobi weights.

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP
  type(string) :: msg, astr
```

order = 1

```fortran
  n = 1; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of J(x), n = 1 alpha=0 beta=0

| pt | wt |
|----|----|
| 0  | 2  |

</div>
</details>

order = 2

```fortran
  n = 2; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of J(x), n = 1 alpha=0 beta=0

| pt       | wt |
|----------|----|
| -0.57735 | 1  |
| 0.57735  | 1  |

</div>
</details>

order = 5

```fortran
  n = 5; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of J(x), n = 5 alpha=0 beta=0

| pt           | wt      |
|--------------|---------|
| -0.90618     | 0.23693 |
| -0.53847     | 0.47863 |
| -1.56541E-16 | 0.56889 |
| 0.53847      | 0.47863 |
| 0.90618      | 0.23693 |

</div>
</details>

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call JacobiGaussQuadrature( n=n, alpha=alpha, beta=beta, pt=pt, wt=wt )
    msg = "Zeros of J(x), n = " &
        & // tostring( n ) // " alpha="//tostring( alpha ) // &
        & " beta="//tostring( beta )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
