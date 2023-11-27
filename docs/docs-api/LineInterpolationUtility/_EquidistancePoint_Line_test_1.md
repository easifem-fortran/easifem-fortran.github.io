This function returns the points including the end points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x1( : ), x2( : ), x(:,:), ans(:,:)
  integer(i4b), allocatable :: degree(:,:)
  x = EquidistancePoint_Line( order=1 )
  call display( x, "x = " )
  x = EquidistancePoint_Line( order=2 )
  call display( x, "x = " )
  x = EquidistancePoint_Line( order=3 )
  call display( x, "x = " )
end program main
```

<details>
<summary>See results</summary>
<div>

```bash title="results"
x =
------------------
-1.00000   1.00000
x =
----------------------------
-1.00000   1.00000   0.00000
x =
--------------------------------------
-1.00000   1.00000  -0.33333   0.33333
```

</div>
</details>
