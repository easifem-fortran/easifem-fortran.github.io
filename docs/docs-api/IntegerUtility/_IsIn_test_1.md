This example shows the usage of `isIn` method which is defined in  `IntegerUtility` module.

```fortran
program main
  use easifembase
  implicit none
 call Display( [9, 10, 11, 12] .isIn. [12,9], "test(1)=")
 call Display([12,9] .isIn. [9, 10, 11, 12], "test(2)=")
end program main
```

## Results

```fortran
test(1)=
--------
   T    
   F    
   F    
   T    
test(2)=
--------
   T    
   T    
```
