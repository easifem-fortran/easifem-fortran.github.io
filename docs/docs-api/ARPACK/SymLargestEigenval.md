# SymLargestEigenval

This function computes the largest eigenvalue of a symmetric matrix.

This function calls ARPACK's [SSAUPD](./SSAUPD.md) or DSAUPD routine.

Currently, there are two interfaces under this generic method.

```fortran
ans = SymLargestEigenVal(real::mat(:,:), char::which, int::NCV, int::maxIter, real::tol)
ans(1:nev) = SymLargestEigenVal(real::mat(:,:), int::nev, char::which, int::NCV, int::maxIter, real::tol)
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface 1" label="܀ Interface 1">

```fortran
INTERFACE
  MODULE FUNCTION SymLargestEigenVal(mat, which, NCV, maxIter, tol) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    !! dense matrix
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which
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

- `mat` is dense matrix
- `which = "LM"` ⇨ absolute largest eigenvalue
- `which = "LA"` ⇨ algebraic largest eigenvalue
- Default value of `which` is "LA"
- `NCV` Number of Lanczos vectors generated. It must be greater than 1 and smaller than `size(mat,1)`. Default is `NCV = MIN(n, 20)`
- `maxIter` Maximum number of iteration default = `N*10`
- `tol` tolerance, default = 0.0
- `ans` maximum eigenvalue.

</TabItem>

<TabItem value="interface 2" label="܀ Interface 2">

```fortran
INTERFACE
  MODULE FUNCTION SymLargestEigenVal(mat, nev, which, NCV, maxIter, tol) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    !! dense matrix
    INTEGER(I4B), INTENT(IN) :: nev
    !! number of eigenvalues requested
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which
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
  END FUNCTION SymLargestEigenVal
END INTERFACE
```

- `mat` dense matrix
- `nev` number of eigenvalues requested
- `which = "LM"` ⇨ absolute largest eigenvalue
- `which = "LA"` ⇨ algebraic largest eigenvalue
- Default value of `which` is "LA"
- `NCV` Number of Lanczos vectors generated. It must be greater than 1 and smaller than `size(mat,1)`. Default is `NCV = MIN(n, MAX(2*nev+1, 20))`
- `maxIter` Maximum number of iteration default = `N*10`
- `tol` tolerance, default = 0.0
- `ans(nev)` first k, the largest eigenvalue.

</TabItem>

<TabItem value="close" label="↢ Close" default>

</TabItem>
</Tabs>
