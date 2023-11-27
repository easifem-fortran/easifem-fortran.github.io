This example shows the usage of `UltrasphericalZeros` method.

This routine returns the zeros of a jacobi polynomial.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  real( dfp ), parameter :: lambda=0.5_DFP
  type(string) :: msg, astr
```

```fortran
  n = 1; call callme
```

<details>
<summary>See results</summary>
<div>

| x |
|---|
| 0 |

</div>
</details>

```fortran
  n = 2; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of T(x), n = 2

|          |         |
|----------|---------|
| -0.57735 | 0.57735 |

</div>
</details>

```fortran
  n = 3; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of T(x), n = 3

|         |             |        |
|---------|-------------|--------|
| -0.7746 | 3.71231E-16 | 0.7746 |

</div>
</details>

```fortran
  contains
  subroutine callme
    pt = UltrasphericalZeros( n=n, lambda=lambda )
    msg = "Zeros of T(x), n = " &
        & // tostring( n )
    call display(msg%chars())
    astr = MdEncode( pt )
    call display( astr%chars(), "" )
  end subroutine
```

```fortran
end program main
```
