```fortran
program main
use easifemBase
implicit none

real(DFP) :: amat( 5, 5 )

amat = InvHilbertMatrix(5)
CALL Display(amat, "InvHilbertMatrix(5) = ")

end program main
```

```txt
             InvHilbertMatrix(5) =              
------------------------------------------------
     25.     -300.     1050.    -1400.      630.
   -300.     4800.   -18900.    26880.   -12600.
   1050.   -18900.    79380.  -117600.    56700.
  -1400.    26880.  -117600.   179200.   -88200.
    630.   -12600.    56700.   -88200.    44100.
```
