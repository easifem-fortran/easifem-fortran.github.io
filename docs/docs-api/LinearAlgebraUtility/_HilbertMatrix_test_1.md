```fortran
program main
use easifemBase
implicit none

real(DFP) :: amat( 5, 5 )

amat = HilbertMatrix(5)
CALL Display(amat, "HilbertMatrix(5) = ")

end program main
```

Results

```txt
            HilbertMatrix(5) =             
-------------------------------------------
1.00000  0.50000  0.33333  0.25000  0.20000
0.50000  0.33333  0.25000  0.20000  0.16667
0.33333  0.25000  0.20000  0.16667  0.14286
0.25000  0.20000  0.16667  0.14286  0.12500
0.20000  0.16667  0.14286  0.12500  0.11111
```
