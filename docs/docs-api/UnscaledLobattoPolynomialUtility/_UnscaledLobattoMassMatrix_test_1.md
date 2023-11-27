This example shows the usage of `UnscaledLobattoMassMatrix` method. 

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
| 0.66667  | 0.33333  | -0.33333 |
| 0.33333  | 0.66667  | -0.33333 |
| -0.33333 | -0.33333 | 0.26667  |

```fortran
  n = 3
  call callme
```

|             |              |          |              |
|-------------|--------------|----------|--------------|
| 0.66667     | 0.33333      | -0.33333 | 6.66667E-02  |
| 0.33333     | 0.66667      | -0.33333 | -6.66667E-02 |
| -0.33333    | -0.33333     | 0.26667  | 0            |
| 6.66667E-02 | -6.66667E-02 | 0        | 3.80952E-02  |

```fortran
  n = 4
  call callme
```

|             |              |              |              |              |
|-------------|--------------|--------------|--------------|--------------|
| 0.66667     | 0.33333      | -0.33333     | 6.66667E-02  | 0            |
| 0.33333     | 0.66667      | -0.33333     | -6.66667E-02 | 0            |
| -0.33333    | -0.33333     | 0.26667      | 0            | -1.90476E-02 |
| 6.66667E-02 | -6.66667E-02 | 0            | 3.80952E-02  | 0            |
| 0           | 0            | -1.90476E-02 | 0            | 1.26984E-02  |

```fortran
  contains
  subroutine callme
    ans= UnscaledLobattoMassMatrix( n=n )
    astr = MdEncode(ans)
    CALL Display( "UnscaledLobatto mass matrix = " )
    CALL Display(astr, "" )
    call blanklines(nol=2)
  end subroutine callme
```

```fortran
end program main
```

