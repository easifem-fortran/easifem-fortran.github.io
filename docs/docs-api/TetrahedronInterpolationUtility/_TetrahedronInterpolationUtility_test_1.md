This example shows the usage of methods defined in TetrahedronInterpolationUtility module. Following methods are covered:

- LagrangeDOF_Tetrahedron
- LagrangeInDOF_Tetrahedron

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  integer( i4b ), allocatable :: degree(:,:)
  type(string) :: astr
```

```fortran
  order=1
  i1 = LagrangeDOF_Tetrahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
  order=2
  i1 = LagrangeDOF_Tetrahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
  order=3
  i1 = LagrangeDOF_Tetrahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
```

```fortran
  order=1
  i1 = LagrangeInDOF_Tetrahedron(order=order)
  i2 = (order-1)*(order-2)*(order-3)/6
  call IS( i1, i2 )
  order=2
  i1 = LagrangeInDOF_Tetrahedron(order=order)
  i2 = (order-1)*(order-2)*(order-3)/6
  call IS( i1, i2 )
  order=3
  i1 = LagrangeInDOF_Tetrahedron(order=order)
  i2 = (order-1)*(order-2)*(order-3)/6
  call IS( i1, i2 )
```

```fortran
  order=1
  degree=LagrangeDegree_Tetrahedron(order=order)
  astr = MdEncode( degree )
  call Display( astr, "degree(order="//tostring(order)//")=" //CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

degree(order=1)=

| x | y | z |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 0 | 1 | 0 |
| 0 | 0 | 1 |

</div>
</details>

```fortran
  order=2
  degree=LagrangeDegree_Tetrahedron(order=order)
  astr = MdEncode( degree )
  call Display( astr, "degree(order="//tostring(order)//")=" //CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

degree(order=2)=

| x | y | z |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 2 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 1 | 0 |
| 0 | 2 | 0 |
| 0 | 0 | 1 |
| 1 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 0 | 2 |

</div>
</details>

```fortran
  order=3
  degree=LagrangeDegree_Tetrahedron(order=order)
  astr = MdEncode( degree )
  call Display( astr, "degree(order="//tostring(order)//")=" //CHAR_LF )
  call blanklines(nol=2)
```

<details>
<summary>See results</summary>
<div>

degree(order=3)=

| x | y | z |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 2 | 0 | 0 |
| 3 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 1 | 0 |
| 2 | 1 | 0 |
| 0 | 2 | 0 |
| 1 | 2 | 0 |
| 0 | 3 | 0 |
| 0 | 0 | 1 |
| 1 | 0 | 1 |
| 2 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 1 | 1 |
| 0 | 2 | 1 |
| 0 | 0 | 2 |
| 1 | 0 | 2 |
| 0 | 1 | 2 |
| 0 | 0 | 3 |

</div>
</details>

```fortran
end program main
```
