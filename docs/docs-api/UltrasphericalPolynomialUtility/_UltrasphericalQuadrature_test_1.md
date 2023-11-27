This example shows the usage of `UltrasphericalQuadrature` method.

This routine returns the quadrature points for Ultraspherical weights.

> By using this subroutine we can get Ultraspherical-Gauss, Ultraspherical-Gauss-Radau, Ultraspherical-Gauss-Lobatto quadrature points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), parameter :: lambda=0.5_DFP
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
```

```fortran title "Ultraspherical-Gauss"
  n = 5; quadType=Gauss; call callme
```

<details>
<summary>See results</summary>
<div>

| pt           | wt      |
|--------------|---------|
| -0.90618     | 0.23693 |
| -0.53847     | 0.47863 |
| -1.56541E-16 | 0.56889 |
| 0.53847      | 0.47863 |
| 0.90618      | 0.23693 |

</div>
</details>

```fortran title "Ultraspherical-Radau-Left"
  n = 5; quadType=GaussRadauLeft; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt      |
|----------|---------|
| -1       | 8E-02   |
| -0.72048 | 0.44621 |
| -0.16718 | 0.62365 |
| 0.44631  | 0.56271 |
| 0.88579  | 0.28743 |

</div>
</details>

```fortran title "Ultraspherical-Radau-Right"
  n = 5; quadType=GaussRadauRight; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt      |
|----------|---------|
| -0.88579 | 0.28743 |
| -0.44631 | 0.56271 |
| 0.16718  | 0.62365 |
| 0.72048  | 0.44621 |
| 1        | 8E-02   |

</div>
</details>

```fortran title "Ultraspherical-Lobatto"
  n = 5; quadType=GaussLobatto; call callme
```

<details>
<summary>See results</summary>
<div>

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
    call reallocate( pt, n, wt, n )
    call UltrasphericalQuadrature( n=n, pt=pt, wt=wt, &
      & quadType=quadType, lambda=lambda )
    msg = "| pt | wt |"
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```
