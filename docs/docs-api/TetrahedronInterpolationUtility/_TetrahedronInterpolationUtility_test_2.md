This example shows the usage of methods defined in TetrahedronInterpolationUtility module. Following methods are covered:

- EquidistancePoint_Tetrahedron

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(string) :: astr
```

```fortran
  order=1
  x = EquidistancePoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=1)=

| x | y | z |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

</div>
</details>
!!! note "Order=2"

```fortran
  order=2
  x = EquidistancePoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=2)=

| x   | y   | z   |
|-----|-----|-----|
| 0   | 0   | 0   |
| 1   | 0   | 0   |
| 0   | 1   | 0   |
| 0   | 0   | 1   |
| 0.5 | 0   | 0   |
| 0   | 0.5 | 0   |
| 0   | 0   | 0.5 |
| 0.5 | 0.5 | 0   |
| 0.5 | 0   | 0.5 |
| 0   | 0.5 | 0.5 |

</div>
</details>
!!! note "Order=3"

```fortran
  order=3
  x = EquidistancePoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=3)=

| x       | y       | z       |
|---------|---------|---------|
| 0       | 0       | 0       |
| 1       | 0       | 0       |
| 0       | 1       | 0       |
| 0       | 0       | 1       |
| 0.33333 | 0       | 0       |
| 0.66667 | 0       | 0       |
| 0       | 0.33333 | 0       |
| 0       | 0.66667 | 0       |
| 0       | 0       | 0.33333 |
| 0       | 0       | 0.66667 |
| 0.66667 | 0.33333 | 0       |
| 0.33333 | 0.66667 | 0       |
| 0.66667 | 0       | 0.33333 |
| 0.33333 | 0       | 0.66667 |
| 0       | 0.66667 | 0.33333 |
| 0       | 0.33333 | 0.66667 |
| 0.33333 | 0.33333 | 0       |
| 0.33333 | 0       | 0.33333 |
| 0       | 0.33333 | 0.33333 |
| 0.33333 | 0.33333 | 0.33333 |

</div>
</details>

```fortran
  order=4
  x = EquidistancePoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=4)=

|      |      |      |
|------|------|------|
| 0    | 0    | 0    |
| 1    | 0    | 0    |
| 0    | 1    | 0    |
| 0    | 0    | 1    |
| 0.25 | 0    | 0    |
| 0.5  | 0    | 0    |
| 0.75 | 0    | 0    |
| 0    | 0.25 | 0    |
| 0    | 0.5  | 0    |
| 0    | 0.75 | 0    |
| 0    | 0    | 0.25 |
| 0    | 0    | 0.5  |
| 0    | 0    | 0.75 |
| 0.75 | 0.25 | 0    |
| 0.5  | 0.5  | 0    |
| 0.25 | 0.75 | 0    |
| 0.75 | 0    | 0.25 |
| 0.5  | 0    | 0.5  |
| 0.25 | 0    | 0.75 |
| 0    | 0.75 | 0.25 |
| 0    | 0.5  | 0.5  |
| 0    | 0.25 | 0.75 |
| 0.25 | 0.25 | 0    |
| 0.25 | 0.5  | 0    |
| 0.5  | 0.25 | 0    |
| 0.25 | 0    | 0.25 |
| 0.5  | 0    | 0.25 |
| 0.25 | 0    | 0.5  |
| 0    | 0.25 | 0.25 |
| 0    | 0.25 | 0.5  |
| 0    | 0.5  | 0.25 |
| 0.5  | 0.25 | 0.25 |
| 0.25 | 0.5  | 0.25 |
| 0.25 | 0.25 | 0.5  |
| 0.25 | 0.25 | 0.25 |

</div>
</details>

```fortran
  order=5
  x = EquidistancePoint_Tetrahedron( order=order )
  astr = MdEncode( TRANSPOSE(x) )
  call display( astr, "xij (order="//tostring(order)//")=" // CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=5)=

|     |     |     |
|-----|-----|-----|
| 0   | 0   | 0   |
| 1   | 0   | 0   |
| 0   | 1   | 0   |
| 0   | 0   | 1   |
| 0.2 | 0   | 0   |
| 0.4 | 0   | 0   |
| 0.6 | 0   | 0   |
| 0.8 | 0   | 0   |
| 0   | 0.2 | 0   |
| 0   | 0.4 | 0   |
| 0   | 0.6 | 0   |
| 0   | 0.8 | 0   |
| 0   | 0   | 0.2 |
| 0   | 0   | 0.4 |
| 0   | 0   | 0.6 |
| 0   | 0   | 0.8 |
| 0.8 | 0.2 | 0   |
| 0.6 | 0.4 | 0   |
| 0.4 | 0.6 | 0   |
| 0.2 | 0.8 | 0   |
| 0.8 | 0   | 0.2 |
| 0.6 | 0   | 0.4 |
| 0.4 | 0   | 0.6 |
| 0.2 | 0   | 0.8 |
| 0   | 0.8 | 0.2 |
| 0   | 0.6 | 0.4 |
| 0   | 0.4 | 0.6 |
| 0   | 0.2 | 0.8 |
| 0.2 | 0.2 | 0   |
| 0.2 | 0.6 | 0   |
| 0.6 | 0.2 | 0   |
| 0.2 | 0.4 | 0   |
| 0.4 | 0.4 | 0   |
| 0.4 | 0.2 | 0   |
| 0.2 | 0   | 0.2 |
| 0.6 | 0   | 0.2 |
| 0.2 | 0   | 0.6 |
| 0.4 | 0   | 0.2 |
| 0.4 | 0   | 0.4 |
| 0.2 | 0   | 0.4 |
| 0   | 0.2 | 0.2 |
| 0   | 0.2 | 0.6 |
| 0   | 0.6 | 0.2 |
| 0   | 0.2 | 0.4 |
| 0   | 0.4 | 0.4 |
| 0   | 0.4 | 0.2 |
| 0.6 | 0.2 | 0.2 |
| 0.2 | 0.6 | 0.2 |
| 0.2 | 0.2 | 0.6 |
| 0.4 | 0.4 | 0.2 |
| 0.2 | 0.4 | 0.4 |
| 0.4 | 0.2 | 0.4 |
| 0.2 | 0.2 | 0.2 |
| 0.4 | 0.2 | 0.2 |
| 0.2 | 0.4 | 0.2 |
| 0.2 | 0.2 | 0.4 |

</div>
</details>

```fortran
end program main
```
