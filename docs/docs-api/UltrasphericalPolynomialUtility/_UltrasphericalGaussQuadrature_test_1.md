This example shows the usage of `UltrasphericalGaussQuadrature` method.

This routine returns the quadrature points for Ultraspherical polynom.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), parameter :: lambda=0.5_DFP
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
```

```fortran
  n = 1; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Quadrature n = 1

| pt | wt |
|----|----|
| 0  | 2  |

</div>
</details>

```fortran
  n = 2; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Quadrature n = 2

| pt       | wt |
|----------|----|
| -0.57735 | 1  |
| 0.57735  | 1  |

</div>
</details>

```fortran
  n = 3; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Quadrature n = 3

| pt           | wt      |
|--------------|---------|
| -0.7746      | 0.55556 |
| -3.38271E-17 | 0.88889 |
| 0.7746       | 0.55556 |

</div>
</details>

```fortran
  n = 4; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Quadrature n = 4

| pt       | wt      |
|----------|---------|
| -0.86114 | 0.34785 |
| -0.33998 | 0.65215 |
| 0.33998  | 0.65215 |
| 0.86114  | 0.34785 |

</div>
</details>

```fortran
  n = 5; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Quadrature n = 5

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
    call UltrasphericalGaussQuadrature( n=n, &
      & lambda=lambda, pt=pt, wt=wt )
    msg = "Ultraspherical Gauss Quadrature n = " // tostring( n )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
