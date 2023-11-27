This example shows the usage of methods defined in TetrahedronInterpolationUtility module. Following methods are covered:

- EquidistanceInPoint_Tetrahedron

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type( String ) :: astr
```

```fortran
  order=4
  x = EquidistanceInPoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=4)=

| x    | y    | z    |
|------|------|------|
| 0.25 | 0.25 | 0.25 |

</div>
</details>

```fortran
  order=5
  x = EquidistanceInPoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=5)=

|  x  |  y  |  z  |
|-----|-----|-----|
| 0.2 | 0.2 | 0.2 |
| 0.4 | 0.2 | 0.2 |
| 0.2 | 0.4 | 0.2 |
| 0.2 | 0.2 | 0.4 |

</div>
</details>

```fortran
  order=6
  x = EquidistanceInPoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=6)=

|    x    |    y    |    z    |
|---------|---------|---------|
| 0.16667 | 0.16667 | 0.16667 |
| 0.5     | 0.16667 | 0.16667 |
| 0.16667 | 0.5     | 0.16667 |
| 0.16667 | 0.16667 | 0.5     |
| 0.33333 | 0.16667 | 0.16667 |
| 0.16667 | 0.33333 | 0.16667 |
| 0.16667 | 0.16667 | 0.33333 |
| 0.33333 | 0.33333 | 0.16667 |
| 0.33333 | 0.16667 | 0.33333 |
| 0.16667 | 0.33333 | 0.33333 |

</div>
</details>

```fortran
end program main
```
