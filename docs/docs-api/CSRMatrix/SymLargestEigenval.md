# SymLargestEigenval

This routine computes the largest eigenvalue of a csrmatrix.

Calling example

```fortran
ans = SymLargestEigenVal(CSRMatrix_::mat [, char(2)::which, &
  & INTEGER::NCV, INTEGER::maxIter, REAL::tol]) &

ans = SymLargestEigenVal(CSRMatrix_::mat, INTEGER::nev &
  & [, char(2)::which, INTEGER::NCV, &
  & INTEGER::maxIter, REAL::tol]) &
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="1" label="܀ SymLargestEigenVal(mat, which, NCV, maxIter, tol)" default>

```fortran
INTERFACE
  MODULE FUNCTION SymLargestEigenVal(mat, which, NCV, maxIter, tol) &
    & RESULT(ans)
    TYPE(CSRMatrix_), INTENT(IN) :: mat
    !! dense matrix
    CHARACTER(*), OPTIONAL, INTENT(IN) :: which
    !! `which = "LM"` ⇨ absolute largest eigenvalue
    !! `which = "LA"` ⇨ algebraic largest eigenvalue
    !! default is "LA"
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
  END FUNCTION SymLargestEigenVal
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ Example 1">

import EXAMPLE18 from "./_SymLargestEigenval_test_1.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="3" label="️܀ Example 2">

import EXAMPLE60 from "./_SymLargestEigenval_test_3.md";

<EXAMPLE60 />

</TabItem>

<TabItem value="close" label="↢">

</TabItem>
</Tabs>

<Tabs>
<TabItem value="interface" label="܀ SymLargestEigenVal2(mat, nev, which, NCV, maxIter, tol)" default>

```fortran
INTERFACE
  MODULE FUNCTION SymLargestEigenVal2(mat, nev, which, NCV, maxIter, tol) &
    & RESULT(ans)
    TYPE(CSRMatrix_), INTENT(IN) :: mat
    !! dense matrix
    INTEGER(I4B), INTENT(IN) :: nev
    !! number of eigenvalues requested
    CHARACTER(*), OPTIONAL, INTENT(IN) :: which
    !! `which = "LM"` ⇨ absolute largest eigenvalue
    !! `which = "LA"` ⇨ algebraic largest eigenvalue
    !! default is "LA"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: NCV
    !! Number of Lanczos vectors generated
    !! It must be greater than 1 and smaller than `size(mat,1)`
    !! Default is `NCV = MIN(n, MAX(2*nev+1, 20))`
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! Maximum number of iteration default = `N*10`
    REAL(DFP), OPTIONAL, INTENT(IN) :: tol
    !! tolerance, default = 0.0
    REAL(DFP) :: ans(nev)
    !! first k, largest eigenvalue
  END FUNCTION SymLargestEigenVal2
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ Example 1">

import EXAMPLE64 from "./_SymLargestEigenval_test_2.md";

<EXAMPLE64 />

</TabItem>

<TabItem value="3" label="️܀ Example 2">

import EXAMPLE112 from "./_SymLargestEigenval_test_4.md";

<EXAMPLE112 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
