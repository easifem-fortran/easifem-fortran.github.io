```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, elemType
  real(dfp), allocatable :: ans( :, : ),  xij(:,:)

  order=1; elemType=Triangle
  ans = EquidistancePoint(order=order, elemType=elemType)
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=2
  ans = EquidistancePoint(order=order, elemType=elemType)
  call display( ans, "ans (order="//tostring(order)//")=" )
  call blanklines(nol=2)

  order=3
  ans = EquidistancePoint(order=order, elemType=elemType)
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
0.00000  1.00000  0.00000
0.00000  0.00000  1.00000
0.00000  0.00000  0.00000
 
 
                   ans (order=2)=                   
----------------------------------------------------
0.00000  1.00000  0.00000  0.50000  0.50000  0.00000
0.00000  0.00000  1.00000  0.00000  0.50000  0.50000
0.00000  0.00000  0.00000  0.00000  0.00000  0.00000
 
 
                                     ans (order=3)=                                     
----------------------------------------------------------------------------------------
0.00000  1.00000  0.00000  0.33333  0.66667  0.66667  0.33333  0.00000  0.00000  0.33333
0.00000  0.00000  1.00000  0.00000  0.00000  0.33333  0.66667  0.66667  0.33333  0.33333
0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000
```

</div>
</details>
