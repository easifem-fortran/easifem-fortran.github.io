This example shows the usage of `RemoveDuplicates` method which is defined in `IntegerUtility` MODULE

```fortran
program main
  use easifembase
  implicit none
  integer(i4b), allocatable :: intvec( : )
  intvec = [ 5, 4, 4, 4, 3, 3, 2, 2, 1, 1, 1 ]
  call RemoveDuplicates( intvec )
  call display( intvec, "intvec = " )
end program main
```

## Results

```fortran
intvec = 
---------
    1    
    2    
    3    
    4    
    5    
```
