```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
```

:::note "EquidistanceInPoint_Triangle"
:::

```fortran
  order=1
  x = EquidistanceInPoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=2
  x = EquidistanceInPoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=3
  x = EquidistanceInPoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=3)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.33333 | 0.33333 | 0.00000 |

</div>
</details>

:::note "EquidistanceInPoint_Triangle"
Order greater than or equal to 4.
:::

```fortran
  order=4
  x = EquidistanceInPoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=5
  x = EquidistanceInPoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=4)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.25000 | 0.25000 | 0.00000 |
| 0.50000 | 0.25000 | 0.00000 |
| 0.25000 | 0.50000 | 0.00000 |

xij (order=5)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.20000 | 0.20000 | 0.00000 |
| 0.60000 | 0.20000 | 0.00000 |
| 0.20000 | 0.60000 | 0.00000 |
| 0.40000 | 0.20000 | 0.00000 |
| 0.40000 | 0.40000 | 0.00000 |
| 0.20000 | 0.40000 | 0.00000 |

</div>
</details>

```fortran
end program main
```
