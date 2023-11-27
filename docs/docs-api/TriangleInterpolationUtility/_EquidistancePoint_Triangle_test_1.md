```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
```

:::note "EquidistancePoint_Triangle"
Order less than or equal to 3.
:::

```fortran
  order=1
  x = EquidistancePoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=2
  x = EquidistancePoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=3
  x = EquidistancePoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=1)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.00000 | 0.00000 | 0.00000 |
| 1.00000 | 0.00000 | 0.00000 |
| 0.00000 | 1.00000 | 0.00000 |

xij (order=2)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.00000 | 0.00000 | 0.00000 |
| 1.00000 | 0.00000 | 0.00000 |
| 0.00000 | 1.00000 | 0.00000 |
| 0.50000 | 0.00000 | 0.00000 |
| 0.50000 | 0.50000 | 0.00000 |
| 0.00000 | 0.50000 | 0.00000 |

xij (order=3)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.00000 | 0.00000 | 0.00000 |
| 1.00000 | 0.00000 | 0.00000 |
| 0.00000 | 1.00000 | 0.00000 |
| 0.33333 | 0.00000 | 0.00000 |
| 0.66667 | 0.00000 | 0.00000 |
| 0.66667 | 0.33333 | 0.00000 |
| 0.33333 | 0.66667 | 0.00000 |
| 0.00000 | 0.66667 | 0.00000 |
| 0.00000 | 0.33333 | 0.00000 |
| 0.33333 | 0.33333 | 0.00000 |

</div>
</details>

:::note "EquidistancePoint_Triangle"
Order greater than or equal to 4.
:::

```fortran
  order=4
  x = EquidistancePoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=5
  x = EquidistancePoint_Triangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

xij (order=4)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.00000 | 0.00000 | 0.00000 |
| 1.00000 | 0.00000 | 0.00000 |
| 0.00000 | 1.00000 | 0.00000 |
| 0.25000 | 0.00000 | 0.00000 |
| 0.50000 | 0.00000 | 0.00000 |
| 0.75000 | 0.00000 | 0.00000 |
| 0.75000 | 0.25000 | 0.00000 |
| 0.50000 | 0.50000 | 0.00000 |
| 0.25000 | 0.75000 | 0.00000 |
| 0.00000 | 0.75000 | 0.00000 |
| 0.00000 | 0.50000 | 0.00000 |
| 0.00000 | 0.25000 | 0.00000 |
| 0.25000 | 0.25000 | 0.00000 |
| 0.50000 | 0.25000 | 0.00000 |
| 0.25000 | 0.50000 | 0.00000 |

xij (order=5)=

| x1      | x2      | x3      |
|---------|---------|---------|
| 0.00000 | 0.00000 | 0.00000 |
| 1.00000 | 0.00000 | 0.00000 |
| 0.00000 | 1.00000 | 0.00000 |
| 0.20000 | 0.00000 | 0.00000 |
| 0.40000 | 0.00000 | 0.00000 |
| 0.60000 | 0.00000 | 0.00000 |
| 0.80000 | 0.00000 | 0.00000 |
| 0.80000 | 0.20000 | 0.00000 |
| 0.60000 | 0.40000 | 0.00000 |
| 0.40000 | 0.60000 | 0.00000 |
| 0.20000 | 0.80000 | 0.00000 |
| 0.00000 | 0.80000 | 0.00000 |
| 0.00000 | 0.60000 | 0.00000 |
| 0.00000 | 0.40000 | 0.00000 |
| 0.00000 | 0.20000 | 0.00000 |
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
