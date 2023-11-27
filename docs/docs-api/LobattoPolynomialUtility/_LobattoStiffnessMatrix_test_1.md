This example shows the usage of `LobattoStiffnessMatrix` method.

This routine evaluates stiffness matrix for lobatto polynomials.

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

|     |
|-----|
| 0.5 |

```fortran
  n = 1
  call callme
```

|      |      |
|------|------|
| 0.5  | -0.5 |
| -0.5 | 0.5  |

```fortran
  n = 4
  call callme
```

|      |      |   |   |   |
|------|------|---|---|---|
| 0.5  | -0.5 | 0 | 0 | 0 |
| -0.5 | 0.5  | 0 | 0 | 0 |
| 0    | 0    | 1 | 0 | 0 |
| 0    | 0    | 0 | 1 | 0 |
| 0    | 0    | 0 | 0 | 1 |

```fortran
  contains
  subroutine callme
    ans= LobattoStiffnessMatrix( n=n )
    astr = MdEncode(ans)
    CALL Display( "Lobatto mass matrix = " )
    CALL Display(astr, "" )
    call blanklines(nol=2)
  end subroutine callme
```

```fortran
end program main
```
