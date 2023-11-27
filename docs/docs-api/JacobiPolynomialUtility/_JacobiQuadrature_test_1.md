This example shows the usage of `JacobiQuadrature` method which is defined in [[JacobiPolynomialUtility]] MODULE. This routine returns the quadrature points for Jacobi weights.

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)
> By using this subroutine we can get Jacobi-Gauss, Jacobi-Gauss-Radau, Jacobi-Gauss-Lobatto quadrature points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP
  type(string) :: msg, astr
```

```fortran title "Jacobi-Gauss"
  n = 2; quadType=Gauss; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt |
|----------|----|
| -0.57735 | 1  |
| 0.57735  | 1  |

</div>
</details>

```fortran title "Jacobi-Radau-Left"
  n = 3; quadType=GaussRadauLeft; call callme
```

```txt title="results"
| pt      | wt      |
|---------|---------|
| -1      | 0.22222 |
| -0.2899 | 1.025   |
| 0.6899  | 0.75281 |
```

```fortran title "Jacobi-Radau-Right"
  n = 3; quadType=GaussRadauRight; call callme
```

<details>
<summary>See results</summary>
<div>

| pt      | wt      |
|---------|---------|
| -0.6899 | 0.75281 |
| 0.2899  | 1.025   |
| 1       | 0.22222 |

</div>
</details>

```fortran title "Jacobi-Lobatto"
  n = 4; quadType=GaussLobatto; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt      |
|----------|---------|
| -1       | 0.16667 |
| -0.44721 | 0.83333 |
| 0.44721  | 0.83333 |
| 1        | 0.16667 |

</div>
</details>

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call JacobiQuadrature( n=n, alpha=alpha, beta=beta, pt=pt, wt=wt, &
      & quadType=quadType )
    msg = "| pt | wt |"
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
