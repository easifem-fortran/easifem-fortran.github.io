> By using this subroutine we can get Chebyshev1-Gauss, Chebyshev1-Gauss-Radau, Chebyshev1-Gauss-Lobatto quadrature points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, quadType
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
```

```fortran title "Chebyshev1-Gauss"
  n = 2; quadType=Gauss; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt     |
|----------|--------|
| -0.70711 | 1.5708 |
| 0.70711  | 1.5708 |

</div>
</details>

```fortran title "Chebyshev1-Radau-Left"
  n = 3; quadType=GaussRadauLeft; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt      |
|----------|---------|
| -1       | 0.31416 |
| -0.30902 | 0.62832 |
| 0.80902  | 0.62832 |

</div>
</details>

```fortran title "Chebyshev1-Radau-Right"
  n = 3; quadType=GaussRadauRight; call callme
```

<details>
<summary>See results</summary>
<div>

| pt       | wt      |
|----------|---------|
| -0.80902 | 0.31416 |
| 0.30902  | 0.62832 |
| 1        | 0.62832 |

</div>
</details>

```fortran title "Chebyshev1-Lobatto"
  n = 4; quadType=GaussLobatto; call callme
```

<details>
<summary>See results</summary>
<div>

| pt   | wt     |
|------|--------|
| -1   | 0.5236 |
| -0.5 | 1.0472 |
| 0.5  | 1.0472 |
| 1    | 0.5236 |

</div>
</details>

```fortran
  contains
  subroutine callme
    call reallocate( pt, n, wt, n )
    call Chebyshev1Quadrature( n=n, pt=pt, wt=wt, &
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
