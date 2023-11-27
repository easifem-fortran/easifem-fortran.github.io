```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, elemType
  real(dfp), allocatable :: ans( :, : ),  xij(:,:)

  order=1; elemType=Triangle
  xij = EquidistancePoint(order=order, elemType=elemType)
  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=2; 
  xij = EquidistancePoint(order=order, elemType=elemType)
  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=3; 
  xij = EquidistancePoint(order=order, elemType=elemType)
  ans = LagrangeVandermonde(xij=xij,  order=order, elemType=elemType )
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)
end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
      ans (order=1)=     
-------------------------
1.00000  0.00000  0.00000
1.00000  1.00000  0.00000
1.00000  0.00000  1.00000
 
 
                   ans (order=2)=                   
----------------------------------------------------
1.00000  0.00000  0.00000  0.00000  0.00000  0.00000
1.00000  1.00000  1.00000  0.00000  0.00000  0.00000
1.00000  0.00000  0.00000  1.00000  0.00000  1.00000
1.00000  0.50000  0.25000  0.00000  0.00000  0.00000
1.00000  0.50000  0.25000  0.50000  0.25000  0.25000
1.00000  0.00000  0.00000  0.50000  0.00000  0.25000
 
 
ans (order=3)=

1.00000  0.00000  0.00000  0.00000,  ...,  0.00000  0.00000  0.00000  0.00000
1.00000  1.00000  1.00000  1.00000,     ,  0.00000  0.00000  0.00000  0.00000
1.00000  0.00000  0.00000  0.00000,     ,  0.00000  1.00000  0.00000  1.00000
1.00000  0.33333  0.11111  0.03704,     ,  0.00000  0.00000  0.00000  0.00000
.
.
.
1.00000  0.33333  0.11111  0.03704,  ...,  0.07407  0.44444  0.14815  0.29630
1.00000  0.00000  0.00000  0.00000,     ,  0.00000  0.44444  0.00000  0.29630
1.00000  0.00000  0.00000  0.00000,     ,  0.00000  0.11111  0.00000  0.03704
1.00000  0.33333  0.11111  0.03704,     ,  0.03704  0.11111  0.03704  0.03704
```

</div>
</details>
