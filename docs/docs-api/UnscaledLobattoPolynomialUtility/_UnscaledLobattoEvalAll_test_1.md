This example shows the usage of `UnscaledLobattoEvalAll` method. 

This routine evaluates UnscaledLobatto polynomial upto order n, at a given point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  type(string) :: astr
```

```fortran
  x = -1.0_DFP
  n = 5; call callme
```

| l0 | l1 | l2  | l3 | l4  | l5  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 1 | 0 | 0 | 0 | 0 | 0 |

```fortran
  x = 1.0_DFP
  n = 5; call callme
```

| l0 | l1 | l2  | l3 | l4  | l5  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 0 | 1 | 0 | 0 | 0 | 0 |


```fortran
  x = 0.5_DFP
  n = 5; call callme
```

| l0 | l1 | l2  | l3 | l4  | l5  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 0.25 | 0.75 | -0.375 | -0.1875 | -2.34375E-02 | 5.85938E-02 |


```fortran
  contains
  subroutine callme
    ans= UnscaledLobattoEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
```

```fortran
end program main
```
