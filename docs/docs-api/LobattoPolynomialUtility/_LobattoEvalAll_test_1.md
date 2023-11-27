This example shows the usage of `LobattoEvalAll` method.

This routine evaluates Lobatto polynomial upto order n, for many points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
```

```fortran
  x = [-1.0, 0.0, 1.0]
  n = 0; call callme
```

| P0  |
|-----|
|     |
| --- |
| 1   |
| 0.5 |
| 0   |

```fortran
  n = 1; call callme
```

| l0  | l1  |
|-----|-----|
| 1   | 0   |
| 0.5 | 0.5 |
| 0   | 1   |

```fortran
  x = [-1.0, 0.0, 1.0, 0.5]
  n = 5; call callme
```

| l0   | l1   | l2       | l3       | l4           | l5     |
|------|------|----------|----------|--------------|--------|
| 1    | 0    | 0        | 0        | 0            | 0      |
| 0.5  | 0.5  | -0.61237 | -0       | 0.23385      | 0      |
| 0    | 1    | 0        | 0        | 0            | 0      |
| 0.25 | 0.75 | -0.45928 | -0.29646 | -4.38475E-02 | 0.1243 |

```fortran
  contains
  subroutine callme
    ans= LobattoEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
