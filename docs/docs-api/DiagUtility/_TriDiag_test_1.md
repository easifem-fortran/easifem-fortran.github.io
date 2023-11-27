This example shows the use of TriDiag method.

```fortran
program main
use easifemBase
implicit none

real(dfp), allocatable :: amat(:, :), d(:), da(:), db(:)

d = ones(5, 1.0_DFP)
da = 2.0*ones(4, 1.0_DFP) !! Above diagonal
db = -2.0*ones(4, 1.0_DFP) !! Below diagonal

amat = TriDiag(d=d, da=da, db=db, diagNo=1_I4B)
call Display(MdEncode(amat), "amat = ")
end program main 
```

## Results

amat =

|  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |
| 1 | 2 | 0 | 0 | 0 |
| -2 | 1 | 2 | 0 | 0 |
| 0 | -2 | 1 | 2 | 0 |
| 0 | 0 | -2 | 1 | 2 |
| 0 | 0 | 0 | -2 | 1 |
