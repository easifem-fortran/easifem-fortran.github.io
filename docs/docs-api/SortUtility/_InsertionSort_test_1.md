In this example we test `InsertionSort` method.

```fortran
program main
  use easifembase
  implicit none
  integer(i4b), allocatable :: intvec( : )
  real(dfp), allocatable :: realvec( : )
```

```fortran
  intvec = [ 5, 4, 3, 2, 1 ]
  call InsertionSort(array=intvec, low=1, high=SIZE(intvec) )
  call display( intvec, "intvec = " )
```

<details>
<summary>See results</summary>
<div>

```txt
intvec =
---------
1
2
3
4
5
```

</div>
</details>

```fortran
  realvec = [ 5, 4, 3, 2, 1 ]
  call InsertionSort( realvec, 1, SIZE( realvec ) )
  call display( realvec, "realvec = " )
```

<details>
<summary>See results</summary>
<div>

```txt
realvec = 
----------
 1.00000  
 2.00000  
 3.00000  
 4.00000  
 5.00000  
```

</div>
</details>

```fortran
end program main
```
