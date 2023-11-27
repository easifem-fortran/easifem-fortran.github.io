This example shows the usage of `JacobiZeros` method which is defined in [[JacobiPolynomialUtility]] MODULE. This routine returns the zeros of a jacobi polynomial.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP
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

```txt title="results"
Zeros of J(x), n = 2 alpha=0 beta=0

| -0.57735 | 0.57735 |
```

```fortran
  n = 3; call callme
```

<details>
<summary>See results</summary>
<div>

Zeros of J(x), n = 3 alpha=0 beta=0

| -0.7746 | 3.71231E-16 | 0.7746 |

</div>
</details>

```fortran
  contains
  subroutine callme
    pt = JacobiZeros( n=n, alpha=alpha, beta=beta )
    msg = "Zeros of J(x), n = " &
        & // tostring( n ) // " alpha="//tostring( alpha ) // &
        & " beta="//tostring( beta )
    call display(msg%chars())
    astr = MdEncode( pt )
    call display( astr%chars(), "" )
  end subroutine
```

```fortran
end program main
```
