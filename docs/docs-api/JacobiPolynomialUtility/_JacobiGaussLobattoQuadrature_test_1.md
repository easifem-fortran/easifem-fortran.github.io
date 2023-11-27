- This example shows the usage of `JacobiGaussLobattoQuadrature` method.
- This routine returns the quadrature points for Jacobi weights.

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)
> Note that this routine returns n+2 points, the first point is -1 and last point is +1

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: alpha=0.0, beta=0.0
  type(string) :: msg, astr
```

order=0

```fortran
  n = 0; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Lobatto points, n+2 = 3 alpha=0 beta=0

| pt           | wt      |
|--------------|---------|
| -1           | 0.33333 |
| -4.48639E-17 | 1.3333  |
| 1            | 0.33333 |

</div>
</details>

order=1

```fortran
  n = 1; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Lobatto points, n+2 = 3 alpha=0 beta=0

| pt           | wt      |
|--------------|---------|
| -1           | 0.33333 |
| -4.48639E-17 | 1.3333  |
| 1            | 0.33333 |

</div>
</details>

order=2.

```fortran
  n = 2; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Lobatto points, n+2 = 4 alpha=0 beta=0

| pt       | wt      |
|----------|---------|
| -1       | 0.16667 |
| -0.44721 | 0.83333 |
| 0.44721  | 0.83333 |
| 1        | 0.16667 |

</div>
</details>

order=4.

```fortran
  n = 4; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Lobatto points, n+2 = 4 alpha=0 beta=0

| pt       | wt          |
|----------|-------------|
| -1       | 6.66667E-02 |
| -0.76506 | 0.37847     |
| -0.28523 | 0.55486     |
| 0.28523  | 0.55486     |
| 0.76506  | 0.37847     |
| 1        | 6.66667E-02 |

</div>
</details>

```fortran
  contains
    subroutine callme
    call reallocate( pt, n+2, wt, n+2 )
    call JacobiGaussLobattoQuadrature( n=n, alpha=alpha, &
      & beta=beta, pt=pt, wt=wt )
    msg="Jacobi Gauss Lobatto points, n+2 = " &
        & // tostring( n+2 ) // " alpha="//tostring( alpha ) // &
        & " beta="//tostring( beta )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
