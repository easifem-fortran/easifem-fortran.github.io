```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x1( : ), x2( : ), x(:,:), ans(:,:)
  integer(i4b), allocatable :: degree(:,:)
  call reallocate(x, 1, 2)
  x(1,:)=[-1,1]
  x1 = EquidistanceInPoint_Line( order=1, xij=x(1,:) )
  call display( x1, "x1 = ", orient="row" )
  x1 = EquidistanceInPoint_Line( order=2, xij=x(1,:) )
  call display( x1, "x1 = ", orient="row" )
  x1 = EquidistanceInPoint_Line( order=3, xij=x(1,:) )
  call display( x1, "x1 = ", orient="row" )
  x1 = EquidistanceInPoint_Line( order=4, xij=x(1,:) )
  call display( x1, "x1 = ", orient="row" )
```

<details>
<summary>See results</summary>
<div>

```bash title="results"
x1 =
-----
x1 =
-------
0.00000
x1 =
--------------------
-0.333333   0.333333
x1 =
-------------------------------
-0.500000   0.000000   0.500000
```

</div>
</details>

```fortran
  call reallocate(x, 3, 2)
  x(:,1)=[0.2,0.2,0.0]
  x(:,2)=[0.2,0.6,0.0]
  ans = EquidistanceInPoint_Line( order=1, xij=x )
  call display( ans, "ans = ")
  ans = EquidistanceInPoint_Line( order=2, xij=x )
  call display( ans, "ans = ")
```

<details>
<summary>See results</summary>
<div>

```bash title="results"
ans =
------
ans =
-------
0.20000
0.40000
0.00000
```

</div>
</details>

:::info
We can also call the routine without specifying the `xij`. In this case the reference domain is from -1 to 1 in 1D. That is, the returned points are in 1D.
:::

```fortran
  x = EquidistanceInPoint_Line( order=1 )
  call display( x, "x = " )
  x = EquidistanceInPoint_Line( order=2 )
  call display( x, "x = " )
  x = EquidistanceInPoint_Line( order=3 )
  call display( x, "x = " )
```

<details>
<summary>See results</summary>
<div>

```bash title="results"
x = 
----

  x =  
-------
0.00000

        x =         
--------------------
-0.333333   0.333333
```

</div>
</details>

```fortran
end program main
```
