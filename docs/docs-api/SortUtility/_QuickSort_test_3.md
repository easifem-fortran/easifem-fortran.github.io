In this example we test `QuickSort` method.

```fortran
program main
  use easifembase
  implicit none
  integer(i4b), allocatable :: intvec( : )
  real(dfp), allocatable :: realvec( : )
  real(dfp), allocatable :: realvec2( : )
```

```fortran
  intvec = [ 5, 4, 3, 2, 1 ]
  realvec = [ 8, 9, 12, 3, 2 ]
  realvec2 = [ 8, 9, 12, 3, 2 ]
  call QuickSort( &
    & vect1=intvec, &
    & vect2=realvec, &
    & vect3=realvec2, &
    & low=1, &
    & high=SIZE(intvec) )
  call display( intvec, "intvec = ", advance="NO" )
  call display( realvec, "realvec= ", advance="NO" )
  call display( realvec2, "realvec2= ", advance="YES" )
```

<details>
<summary>See results</summary>
<div>

```txt
intvec = ,  realvec= ,  realvec2= 
---------,  ---------,  ----------
    1    ,    2.0000 ,    2.0000  
    2    ,    3.0000 ,    3.0000  
    3    ,   12.0000 ,   12.0000  
    4    ,    9.0000 ,    9.0000  
    5    ,    8.0000 ,    8.0000  
```

</div>
</details>

```fortran
  intvec = [ 5, 4, 3, 2, 1 ]
  realvec = [ 8, 9, 12, 3, 2 ]
  realvec2 = [ 8, 9, 12, 3, 2 ]
  call QuickSort( &
    & vect1=realvec, &
    & vect2=intvec, &
    & vect3=realvec2, &
    & low=1, &
    & high=SIZE(intvec) )
  call display( intvec, "intvec = ", advance="NO" )
  call display( realvec, "realvec= ", advance="NO" )
  call display( realvec2, "realvec2= ", advance="YES" )
```

<details>
<summary>See results</summary>
<div>

```txt
intvec = ,  realvec= ,  realvec2= 
---------,  ---------,  ----------
    1    ,    2.0000 ,    2.0000  
    2    ,    3.0000 ,    3.0000  
    5    ,    8.0000 ,    8.0000  
    4    ,    9.0000 ,    9.0000  
    3    ,   12.0000 ,   12.0000  
```

</div>
</details>

```fortran
end program main
```
