# SymSmallestEigenVal

This function calculates the smallest eigenvalue of a real sym dense matrix.

- It calls ARPACK SSAUPD or DSAUPD routine with MODE=3
- Currently, there are four interfaces under this generic method.
- In this routine we use shift-inverted method to compute the smallest eigenvalue of a regular (standard) eigenvalue problem.
- This is because `ARPACK` is good at finding the largest eigenvalue.
- Internally this routine solves a system of linear equations: `mat * y = x` by using LU decomposition.
- In this routine we make a call to SymLUSolve and SymGetLU routine.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="interface1" label="܀ Interface 1" default>

```fortran
INTERFACE
  MODULE FUNCTION SymSmallestEigenVal(mat, sigma, which, NCV, maxIter, tol) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    !! dense matrix
    REAL(DFP), OPTIONAL, INTENT(IN) :: sigma
    !! Default value is 0.0
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which
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

:::caution
This routine makes a copy of mat in mat0. Then, compute the LU decomposition of mat0.
:::

- `mat` dense matrix
- `sigma` Default value is 0.0
- `which = "SM"` ⇨ absolute smallest eigenvalue
- `which = "SA"` ⇨ algebraic smallest eigenvalue
- default value of `which` is "SA"
- `NCV` Number of Lanczos vectors generated. It must be greater than 1 and smaller than `size(mat,1)`. Default is `NCV = MIN(n, 20)`
- `maxIter` Maximum number of iteration default = `N*10`
- `tol` tolerance, default = 0.0
- `ans` maximum eigenvalue.

</TabItem>

<TabItem value="interface2" label="܀ Interface 2" default>

```fortran
INTERFACE
  MODULE FUNCTION SymSmallestEigenVal(mat, isFactor, ipiv, sigma, which, &
    & NCV, maxIter, tol) RESULT(ans)
    REAL(DFP), INTENT(INOUT) :: mat(:, :)
    !!
    !! Dense matrix
    !! If isFactor is false, then this matrix will change on return
    !!    in this case, it will contain LU decomposition
    !! If isFactor is true, then this matrix will not change
    !!
    LOGICAL(LGT), INTENT(INOUT) :: isFactor
    !! if mat is already factorized, the set isFactor to true
    !! if mat is not factorized, then set isFactor to false
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipiv(:)
    !! When `isFactor` is true, then `mat` represents the
    !! `LU` factorization obtained by `SymGetLU` routine.
    !! In this case `ipiv` is returned by `SymGetLU`.
    REAL(DFP), OPTIONAL, INTENT(IN) :: sigma
    !! Default value is 0.0
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: which
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

- `mat` Dense matrix
- `isFactor` if mat is already factorized, then set isFactor to true. if mat is not factorized, then set isFactor to false. If isFactor is false, then this matrix will change on return. In this case, it will contain LU decomposition computed by `SymGetLU`. If `isFactor` is true, then this matrix will not change, and matrix `mat` should contain the `LU` decomposition computed from `SymGetLU`.
- `ipiv` When `isFactor` is true, then `mat` represents the `LU` factorization obtained by `SymGetLU` routine. In this case `ipiv` is returned by `SymGetLU`.
- `sigma` Default value is 0.0
- `which = "SM"` ⇨ absolute smallest eigenvalue
- `which = "SA"` ⇨ algebraic smallest eigenvalue
- default value of `which` is "SA"
- `NCV` Number of Lanczos vectors generated
- It must be greater than 1 and smaller than `size(mat,1)`
- Default value of `NCV` is `NCV = MIN(n, 20)`
- `maxIter` Maximum number of iteration default = `N*10`
- `tol` tolerance, default = 0.0
- `ans`, the smallest eigenvalue.

</TabItem>

<TabItem value="close" label="↢ Close">

</TabItem>
</Tabs>
