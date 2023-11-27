```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, elemType
  integer( i4b ), allocatable :: ans( :, : )

  order=1; elemType=Triangle
  ans = LagrangeDegree( order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=2
  ans = LagrangeDegree( order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=3
  ans = LagrangeDegree( order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)

end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
ans (order=1)=
--------------
     0  0     
     1  0     
     0  1     
 
 
ans (order=2)=
--------------
     0  0     
     1  0     
     2  0     
     0  1     
     1  1     
     0  2     
 
 
ans (order=3)=
--------------
     0  0     
     1  0     
     2  0     
     3  0     
     0  1     
     1  1     
     2  1     
     0  2     
     1  2     
     0  3     
```

</div>
</details>
