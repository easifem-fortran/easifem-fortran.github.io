This example shows the usage of `UnscaledLobattoZeros` method.

- `n` should be greater than 2.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  type(string) :: msg, astr
```

```fortran
  n = 2; call callme
```

|    |   |
|----|---|
| -1 | 1 |

```fortran
  n = 3; call callme
```

|    |   |   |
|----|---|---|
| -1 | 0 | 1 |

```fortran
  n = 4; call callme
```

|    |          |         |   |
|----|----------|---------|---|
| -1 | -0.44721 | 0.44721 | 1 |

```fortran
  n = 5; call callme
```

|    |          |             |         |   |
|----|----------|-------------|---------|---|
| -1 | -0.65465 | 4.29344E-17 | 0.65465 | 1 |

```fortran
  contains
  subroutine callme
    pt = UnscaledLobattoZeros( n=n )
    msg = "Zeros of J(x), n = " &
        & // tostring( n )
    call display(msg%chars())
    astr = MdEncode( pt )
    call display( astr%chars(), "" )
  end subroutine
```

```fortran
end program main
```
