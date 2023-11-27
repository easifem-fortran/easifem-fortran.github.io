This example shows the usage of `LegendreQuadrature` method.

This routine returns the quadrature points for Legendre polynomials, also we get only inside quadrature points and their weights.

> By using this subroutine we can get Legendre-Gauss, Legendre-Gauss-Radau, Legendre-Gauss-Lobatto quadrature points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  logical(lgt), parameter :: onlyInside=.true.
```

:::note "Legendre-Gauss"
:::

```fortran
  n = 2; quadType=Gauss; call callme
```

| pt       | wt |
|----------|----|
| -0.57735 | 1  |
| 0.57735  | 1  |

:::note "Legendre-Radau-Left"
:::

```fortran
  n = 2; quadType=GaussRadauLeft; call callme
```

| pt      | wt      |
|---------|---------|
| -0.2899 | 1.025   |
| 0.6899  | 0.75281 |

:::note "Legendre-Radau-Right"
:::

```fortran
  n = 2; quadType=GaussRadauRight; call callme
```

| pt      | wt      |
|---------|---------|
| -0.6899 | 0.75281 |
| 0.2899  | 1.025   |

:::note "Legendre-Lobatto"
:::

```fortran
  n = 2; quadType=GaussLobatto; call callme
```

| pt       | wt      |
|----------|---------|
| -0.44721 | 0.83333 |
| 0.44721  | 0.83333 |

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call LegendreQuadrature( n=n, pt=pt, wt=wt, &
      & quadType=quadType, onlyInside=onlyInside )
    msg = "| pt | wt |"
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```
