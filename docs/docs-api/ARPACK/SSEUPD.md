# SSEUPD

This subroutine returns the converged approximations to eigenvalues of `A*z = lambda*B*z`.

Optionally, it can also return:

- the corresponding approximate eigenvectors,
- an orthonormal (Lanczos) basis for the associated approximate invariant subspace
- Both.

:::note There is negligible additional cost to obtain eigenvectors.
An orthonormal (Lanczos) basis is always computed. There is an additional storage cost of `n*nev` if both are requested (in this case a separate array Z must be supplied).
:::

These quantities are obtained from the Lanczos factorization computed by [SSAUPD](SSAUPD.md) for the linear operator `OP` prescribed by the `MODE` selection, see [IPARAM(7)](SSAUPD.md#iparam7) in SSAUPD documentation. Therefore, `SSAUPD` must be called before this routine is called. These approximate eigenvalues and vectors are commonly called `Ritz values` and `Ritz vectors` respectively.  They are referred to as such in the comments that follow.

The computed orthonormal basis for the invariant subspace corresponding to these Ritz values is referred to as a Lanczos basis.

See documentation in the header of the subroutine SSAUPD for a definition of OP as well as other terms and the relation of computed Ritz values and vectors of OP with respect to the given problem  `A*z = lambda*B*z`.

The approximate eigenvalues of the original problem are returned in ascending algebraic order.  The user may elect to call this routine once for each desired Ritz vector and store it peripherally if desired.

There is also the option of computing a selected set of these vectors with a single call.

## Usage

```fortran
  CALL SSEUPD( &
    & RVEC, HOWMNY, SELECT, &
    & D, Z, LDZ, SIGMA, BMAT, &
    & N, WHICH, NEV, TOL, RESID, &
    & NCV, V, LDV, IPARAM, &
    & IPNTR, WORKD, WORKL, &
    & LWORKL, INFO )
```

RVEC, LOGICAL, INPUT

## RVEC

- Type: LOGICAL
- Intent: INPUT

Specifies whether Ritz vectors corresponding to the Ritz value approximations to the eigenproblem `A*z = lambda*B*z` are computed.

|RVEC| task|
|---|---|
|`.FALSE.`| Compute Ritz values only.|
|`.TRUE.`| Compute Ritz vectors.|

## HOWMNY

- Type: Character*1
- Intent: INPUT

Specifies how many Ritz vectors are wanted and the form of Z the matrix of Ritz vectors. See remark 1 below.

- 'A', compute NEV Ritz vectors
- 'S', compute some of the Ritz vectors, specified by the logical array SELECT.

## SELECT

- Type: Logical array of dimension NCV.
- Intent: INPUT/WORKSPACE

If `HOWMNY = S`, `SELECT` specifies the Ritz vectors to be computed.
To select the Ritz vector corresponding to a Ritz value `D(j)`, `SELECT(j)` must be set to `.TRUE.`.

If `HOWMNY = 'A'`, `SELECT` is used as a workspace for reordering the Ritz values.

## D

- Type: `Real( NEV )`.
- Intent: OUTPUT

- On exit, `D` contains the Ritz value approximations to the eigenvalues of `A*z = lambda*B*z`. The values are returned in ascending order. If `IPARAM(7) = 3,4,5` then `D` represents the Ritz values of `OP` computed by `SSAUPD` transformed to those of the original eigensystem `A*z = lambda*B*z`.
- If `IPARAM(7) = 1,2` then the Ritz values of OP are the same as the those of `A*z = lambda*B*z`.

## Z

- Type: `Real( N, NEV)` array if HOWMNY = 'A'.
- Intent: OUTPUT

On exit, Z contains the B-orthonormal Ritz vectors of the eigensystem `A*z = lambda*B*z` corresponding to the Ritz value approximations.

:::info If  `RVEC = .FALSE.` then Z is not referenced.
:::

:::note The array `Z` may be set equal to first `NEV` columns of the Arnoldi/Lanczos basis array `V` computed by SSAUPD.
:::

## LDZ

- Type: Integer.
- Intent: INPUT

The leading dimension of the array Z.  If Ritz vectors are desired, then  `LDZ .ge.  max( 1, N )`.  In any case,  `LDZ .ge. 1`.

## SIGMA

- Type: Real
- Intent: INPUT

If `IPARAM(7) = 3,4,5` represents the shift. Not referenced if `IPARAM(7) = 1 or 2`.

## Other args

The remaining arguments MUST be the same as for the call to SSAUPD that was just completed.

The remaining arguments

```fortran
BMAT
N
WHICH
NEV
TOL
RESID
NCV
V
LDV
IPARAM
IPNTR
WORKD
WORKL
LWORKL
INFO
```

must be passed directly to SSEUPD following the last call to SSAUPD. These arguments MUST NOT BE MODIFIED between the last call to SSAUPD and the call to SSEUPD.

Two of these parameters (`WORKL`, `INFO`) are also output parameters:

## WORKL

Real  work array of length LWORKL.  (OUTPUT/WORKSPACE)

- `WORKL(1:4*ncv)` contains information obtained in `ssaupd`.  They are not changed by `sseupd`.
- `WORKL(4*ncv+1:ncv*ncv+8*ncv)` holds the untransformed Ritz values, the computed error estimates,
and the associated eigenvector matrix of H.

:::note `IPNTR(8:10)` contains the pointer into `WORKL` for addresses of the above information computed by SSEUPD.
:::

- `IPNTR(8)` pointer to the NCV RITZ values of the original system
- `IPNTR(9)` pointer to the NCV corresponding error bounds.
- `IPNTR(10)` pointer to the NCV by NCV matrix of eigenvectors of the tridiagonal matrix T. Only referenced by `sseupd` if RVEC = .TRUE. See Remarks.

## INFO

- Integer
- OUTPUT

Error flag on output.

- 0: Normal exit.
- -1: N must be positive.
- -2: NEV must be positive.
- -3: NCV must be greater than NEV and less than or equal to N.
- -5: WHICH must be one of 'LM', 'SM', 'LA', 'SA' or 'BE'.
- -6: BMAT must be one of 'I' or 'G'.
- -7: Length of private work WORKL array is not sufficient.
- -8: Error return from trid. eigenvalue calculation; Information error from LAPACK routine ssteqr.
- -9: Starting vector is zero.
- -10: IPARAM(7) must be 1,2,3,4,5.
- -11: IPARAM(7) = 1 and BMAT = 'G' are incompatible.
- -12: NEV and WHICH = 'BE' are incompatible.
- -14: SSAUPD did not find any eigenvalues to sufficient accuracy.
- -15: HOWMNY must be one of 'A' or 'S' if RVEC = .true.
- -16: HOWMNY = 'S' not yet implemented
- -17: SSEUPD got a different count of the number of converged Ritz values than SSAUPD got. This indicates the user probably made an error in passing data from SSAUPD to SSEUPD or that the data was modified before entering SSEUPD.

## Remarks

### Remark-1

The converged Ritz values are always returned in increasing (algebraic) order.

### Remark-2

Currently only HOWMNY = 'A' is implemented. It is included at this stage for the user who wants to incorporate it.
