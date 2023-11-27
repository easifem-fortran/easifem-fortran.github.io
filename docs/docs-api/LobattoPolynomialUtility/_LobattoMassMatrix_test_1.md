This example shows the usage of `LobattoMassMatrix` method.

This routine evaluates mass matrix for lobatto polynomials.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:,:)
  type(string) :: astr
```

```fortran
  n = 0
  call callme
```

|         |
|---------|
| 0.66667 |

```fortran
  n = 1
  call callme
```

|         |         |
|---------|---------|
| 0.66667 | 0.33333 |
| 0.33333 | 0.66667 |

```fortran
  n = 2
  call callme
```

|          |          |          |
|----------|----------|----------|
| 0.66667  | 0.33333  | -0.40825 |
| 0.33333  | 0.66667  | -0.40825 |
| -0.40825 | -0.40825 | 0.4      |

```fortran
  n = 3
  call callme
```

|          |          |          |             |
|----------|----------|----------|-------------|
| 0.66667  | 0.33333  | -0.40825 | 0.10541     |
| 0.33333  | 0.66667  | -0.40825 | -0.10541    |
| -0.40825 | -0.40825 | 0.4      | 0           |
| 0.10541  | -0.10541 | 0        | 9.52381E-02 |

```fortran
  n = 4
  call callme
```

|          |          |              |             |              |
|----------|----------|--------------|-------------|--------------|
| 0.66667  | 0.33333  | -0.40825     | 0.10541     | 0            |
| 0.33333  | 0.66667  | -0.40825     | -0.10541    | 0            |
| -0.40825 | -0.40825 | 0.4          | 0           | -4.36436E-02 |
| 0.10541  | -0.10541 | 0            | 9.52381E-02 | 0            |
| 0        | 0        | -4.36436E-02 | 0           | 4.44444E-02  |

```fortran
  contains
  subroutine callme
    ans= LobattoMassMatrix( n=n )
    astr = MdEncode(ans)
    CALL Display( "Lobatto mass matrix = " )
    CALL Display(astr, "" )
    call blanklines(nol=2)
  end subroutine callme
```

```fortran
end program main
```
