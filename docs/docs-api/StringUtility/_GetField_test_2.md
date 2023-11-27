```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = 100 ) :: astr
CHARACTER( LEN = : ), allocatable :: afield
INTEGER( I4B ):: ierr, ii

astr = "Hello/ world/ how/ are/ you"

DO ii = 1, 5
  CALL getField(i=ii, chars=astr, field=afield, ierr=ierr )
  CALL Display(afield, "afield(" // tostring(ii) // ") = " )
END DO

end program main
```

## Results

```txt
afield(1) =Hello/
afield(2) =world/
afield(3) =how/
afield(4) =are/
afield(5) =you
```
