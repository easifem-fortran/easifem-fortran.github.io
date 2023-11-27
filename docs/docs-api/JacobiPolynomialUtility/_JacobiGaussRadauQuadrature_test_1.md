This example shows the usage of `JacobiGaussRadauQuadrature` method.
This routine returns the quadrature points for Jacobi weights.

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)
> Note that this routine returns n+1 quadrature points and one of the points will be end point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: alpha=0.0, beta=0.0, left=-1.0, right=1.0
  type(string) :: msg, astr
  real( dfp ) :: a
```

order = 1

```fortran
  n = 1; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Radau points, n+1 = 2 alpha=0 beta=0

| pt      | wt  |
|---------|-----|
| -1      | 0.5 |
| 0.33333 | 1.5 |

</div>
</details>

order=2.

```fortran
  n = 2; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Radau points, n+1 = 3 alpha=0 beta=0

| pt      | wt      |
|---------|---------|
| -1      | 0.22222 |
| -0.2899 | 1.025   |
| 0.6899  | 0.75281 |

</div>
</details>

order=1.

```fortran
  n = 1; a=right; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Radau points, n+1 = 2 alpha=0 beta=0

| pt       | wt  |
|----------|-----|
| -0.33333 | 1.5 |
| 1        | 0.5 |

</div>
</details>

order = 2

```fortran
  n = 2; a=right; call callme
```

<details>
<summary>See results</summary>
<div>

Jacobi Gauss Radau points, n+1 = 3 alpha=0 beta=0

| pt      | wt      |
|---------|---------|
| -0.6899 | 0.75281 |
| 0.2899  | 1.025   |
| 1       | 0.22222 |

</div>
</details>

```fortran
  contains
  subroutine callme
    call reallocate( pt, n+1, wt, n+1 )
    call JacobiGaussRadauQuadrature( a=a, n=n, &
      & alpha=alpha, beta=beta, pt=pt, wt=wt )
    msg="Jacobi Gauss Radau points, n+1 = " &
        & // tostring( n+1 ) // " alpha="//tostring( alpha ) // &
        & " beta="//tostring( beta )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
