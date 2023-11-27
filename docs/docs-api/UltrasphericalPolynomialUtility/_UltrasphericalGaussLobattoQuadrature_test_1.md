- This example shows the usage of `UltrasphericalGaussLobattoQuadrature` method.
- This routine returns the quadrature points for Ultraspherical weights.

> Note that this routine returns n+2 points, the first point is -1 and last point is +1

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), parameter :: lambda=0.5_DFP
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
```

```fortran title "order=0"
  n = 0; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Lobatto points, n+2 = 3

| pt           | wt      |
|--------------|---------|
| -1           | 0.33333 |
| -4.48639E-17 | 1.3333  |
| 1            | 0.33333 |

</div>
</details>

```fortran title "order=1"
  n = 1; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Lobatto points, n+2 = 3

| pt           | wt      |
|--------------|---------|
| -1           | 0.33333 |
| -4.48639E-17 | 1.3333  |
| 1            | 0.33333 |

</div>
</details>

```fortran title "order=2"
  n = 2; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Lobatto points, n+2 = 4

| pt       | wt      |
|----------|---------|
| -1       | 0.16667 |
| -0.44721 | 0.83333 |
| 0.44721  | 0.83333 |
| 1        | 0.16667 |

</div>
</details>

```fortran title "order=3"
  n = 3; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Lobatto points, n+2 = 4

| pt           | wt      |
|--------------|---------|
| -1           | 0.1     |
| -0.65465     | 0.54444 |
| -6.41178E-17 | 0.71111 |
| 0.65465      | 0.54444 |
| 1            | 0.1     |

</div>
</details>

```fortran
  contains
    subroutine callme
    call reallocate( pt, n+2, wt, n+2 )
    call UltrasphericalGaussLobattoQuadrature( n=n, &
      & pt=pt, wt=wt, lambda=lambda )
    msg="Ultraspherical Gauss Lobatto points, n+2 = " &
        & // tostring( n+2 )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
