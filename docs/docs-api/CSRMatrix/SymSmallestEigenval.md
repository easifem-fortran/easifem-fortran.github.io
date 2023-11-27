# SymSmallestEigenval

This routine computes the smallest eigenvalue of CSRMatrix.

Calling example

```fortran
ans = SymSmallestEigenVal(CSRMatrix_::mat &
  & [, char(2)::which, INTEGER::NCV, INTEGER::maxIter, REAL::tol]) 

ans = SymSmallestEigenVal(CSRMatrix_::mat, INTEGER::nev &
  [&, char(2)::which, INTEGER::NCV, INTEGER::maxIter, REAL::tol]) 
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION SymSmallestEigenVal(mat, which, NCV, maxIter, tol) &
    & RESULT(ans)
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! dense matrix
    CHARACTER(*), OPTIONAL, INTENT(IN) :: which
    !! `which = "SM"` ⇨ absolute smallest eigenvalue
    !! `which = "SA"` ⇨ algebraic smallest eigenvalue
    !! default is "SA"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV
    !! Number of Lanczos vectors generated
    !! It must be greater than 1 and smaller than `size(mat,1)`
    !! Default is `NCV = MIN(n, 20)`
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! Maximum number of iteration default = `N*10`
    REAL(DFP), OPTIONAL, INTENT(IN) :: tol
    !! tolerance, default = 0.0
    REAL(DFP) :: ans
    !! maximum eigenvalue
  END FUNCTION SymSmallestEigenVal
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ Example 1">

import EXAMPLE17 from "./_SymSmallestEigenval_test_1.md";

<EXAMPLE17 />

</TabItem>

<TabItem value="3" label="️܀ Example 2">

import EXAMPLE54 from "./_SymSmallestEigenval_test_3.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION SymSmallestEigenVal(mat, nev, which, &
    & NCV, maxIter, tol) RESULT(ans)
    TYPE(CSRMatrix_), INTENT(INOUT) :: mat
    !! CSRMatrix
    INTEGER(I4B), INTENT(IN) :: nev
    !! number of eigenvalues
    CHARACTER(*), OPTIONAL, INTENT(IN) :: which
    !! `which = "SM"` ⇨ absolute smallest eigenvalue
    !! `which = "SA"` ⇨ algebraic smallest eigenvalue
    !! default is "SA"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV
    !! Number of Lanczos vectors generated
    !! It must be greater than 1 and smaller than `size(mat,1)`
    !! Default is `NCV = MIN(n, 20)`
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! Maximum number of iteration default = `N*10`
    REAL(DFP), OPTIONAL, INTENT(IN) :: tol
    !! tolerance, default = 0.0
    REAL(DFP) :: ans(nev)
    !! smallest eigenvalue
  END FUNCTION SymSmallestEigenVal
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ Example 1">

import EXAMPLE71 from "./_SymSmallestEigenval_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="3" label="܀ Example 2" default>

import EXAMPLE112 from "./_SymSmallestEigenval_test_4.md";

<EXAMPLE112 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>
