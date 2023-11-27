In this example we test `QuickSort` method.

```fortran
program main
  use easifembase
  implicit none
  integer(i4b), allocatable :: intvec( : )
  real(dfp), allocatable :: realvec( : )
```

```fortran
  intvec = [ 5, 4, 3, 2, 1 ]
  realvec = [ 8, 9, 12, 3, 2 ]
  call QuickSort( vect1=intvec, vect2=realvec, low=1, high=SIZE(intvec) )
  call display( intvec, "intvec = ", advance="NO" )
  call display( realvec, "realvec= ", advance="YES" )
```

<details>
<summary>See results</summary>
<div>

```txt
intvec = ,  realvec= 
---------,  ---------
    1    ,    2.0000 
    2    ,    3.0000 
    3    ,   12.0000 
    4    ,    9.0000 
    5    ,    8.0000 
```

</div>
</details>

```fortran
  intvec = [ 5, 4, 3, 2, 1 ]
  realvec = [ 8, 9, 12, 3, 2 ]
  call QuickSort( vect1=realvec, vect2=intvec, low=1, high=SIZE(intvec) )
  call display( intvec, "intvec = ", advance="NO" )
  call display( realvec, "realvec= ", advance="YES" )
```

<details>
<summary>See results</summary>
<div>

```txt
intvec = ,  realvec= 
---------,  ---------
    1    ,    2.0000 
    2    ,    3.0000 
    5    ,    8.0000 
    4    ,    9.0000 
    3    ,   12.0000 
```

</div>
</details>

```fortran
end program main
```
