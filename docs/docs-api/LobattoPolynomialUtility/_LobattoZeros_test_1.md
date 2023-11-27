This example shows the usage of `LobattoZeros` method.

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

Zeros of J(x), n = 3

|    |   |   |
|----|---|---|
| -1 | 0 | 1 |

```fortran
  n = 4; call callme
```

Zeros of J(x), n = 4

|    |          |         |   |
|----|----------|---------|---|
| -1 | -0.44721 | 0.44721 | 1 |

```fortran
  n = 5; call callme
```

Zeros of J(x), n = 5

|    |          |             |         |   |
|----|----------|-------------|---------|---|
| -1 | -0.65465 | 4.29344E-17 | 0.65465 | 1 |

```fortran
  contains
  subroutine callme
    pt = LobattoZeros( n=n )
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
