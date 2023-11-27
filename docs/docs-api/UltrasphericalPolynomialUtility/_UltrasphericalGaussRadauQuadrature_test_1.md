This example shows the usage of `UltrasphericalGaussRadauQuadrature` method.

> Note that this routine returns n+1 quadrature points and one of the points will be end point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: left=-1.0, right=1.0, lambda=0.5_DFP
  type(string) :: msg, astr
  real( dfp ) :: a
```

```fortran title "left, order=1"
  n = 1; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Radau points, n+1 = 2

|         |     |
|---------|-----|
| -1      | 0.5 |
| 0.33333 | 1.5 |

</div>
</details>

```fortran title "left, order=2"
  n = 2; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Radau points, n+1 = 3

|         |         |
|---------|---------|
| -1      | 0.22222 |
| -0.2899 | 1.025   |
| 0.6899  | 0.75281 |

</div>
</details>

```fortran title "left, order=3"
  n = 3; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Radau points, n+1 = 4

|          |         |
|----------|---------|
| -1       | 0.125   |
| -0.57532 | 0.65769 |
| 0.18107  | 0.77639 |
| 0.82282  | 0.44092 |

</div>
</details>

```fortran title "left, order=4"
  n = 4; a=left; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Radau points, n+1 = 5

|          |         |
|----------|---------|
| -1       | 8E-02   |
| -0.72048 | 0.44621 |
| -0.16718 | 0.62365 |
| 0.44631  | 0.56271 |
| 0.88579  | 0.28743 |

</div>
</details>

```fortran title "right, order=1"
  n = 4; a=right; call callme
```

<details>
<summary>See results</summary>
<div>

Ultraspherical Gauss Radau points, n+1 = 5

|          |         |
|----------|---------|
| -0.88579 | 0.28743 |
| -0.44631 | 0.56271 |
| 0.16718  | 0.62365 |
| 0.72048  | 0.44621 |
| 1        | 8E-02   |

</div>
</details>

```fortran
  contains
  subroutine callme
    call reallocate( pt, n+1, wt, n+1 )
    call UltrasphericalGaussRadauQuadrature( a=a, n=n, &
      & pt=pt, wt=wt, lambda=lambda )
    msg="Ultraspherical Gauss Radau points, n+1 = " &
        & // tostring( n+1 )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
