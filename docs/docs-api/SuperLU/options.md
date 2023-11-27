# Options

The `options` argument is the input argument to control the behaviour of the library. The user can tell the solver how the linear systems should be solved based on some known characteristics of the system. For example, for diagonally dominant matrices, choosing the diagonal pivots ensures stability; there is no need for numerical pivoting (i.e., Pr can be an Identity matrix). In another situation where a sequence of matrices with the same sparsity pattern need be factorized, the column permutation Pc (and also the row permutation Pr, if the numerical values are similar) need be computed only once, and reused thereafter. In these cases, the solvers’ performance can be much improved over using the default settings. Options is implemented as a C structure containing the following fields:

## Fact

Specifies whether the factored form of the matrix A is supplied on entry, and if not, how the matrix A will be factorized base on the previous history, such as factor from scratch, reuse Pc and/or Pr, or reuse the data structures of L and U. fact can be one of:

- `DOFACT` the matrix A will be factorized from scratch.
- `SamePattern` the matrix A will be factorized assuming that a factorization of a matrix with the same sparsity pattern was performed prior to this one. Therefore, this factorization will reuse column permutation vector perm c.
- `SampPattern_SameRowPerm` the matrix A will be factorized assuming that a factorization of a matrix with the same sparsity pattern and similar numerical values was performed prior to this one. Therefore, this factorization will reuse both row and column permutation vectors `perm_r` and `perm_c`, both row and column scaling factors Dr and Dc, and the distributed data structure set up from the previous symbolic factorization.
- `FACTORED` the factored form of A is input.

## Equil

- YES
- NO

Specifies whether to equilibrate the system (scale A’s rows and columns to have unit norm).

## ColPerm

Specifies how to permute the columns of the matrix for sparsity preservation.

- NATURAL: natural ordering.
- `MMD_ATA`: minimum degree ordering on the structure of $A^{T} \cdot A$.
- `MMD_AT_PLUS_A`: minimum degree ordering on the structure of $A^{T} + A$.
- `COLAMD`: approximate minimum degree column ordering.
- `MY_PERMC`: use the ordering given in perm c input by the user.

## Trans

- NOTRANS
- TRANS
- CONJ

Specifies whether to solve the transposed system.

## IterRefine

Specifies whether to perform iterative refinement, and in what precision to compute the residual.

- NO: no iterative refinement
- `SLU_SINGLE`: perform iterative refinement in single precision
- `SLU_DOUBLE`: perform iterative refinement in double precision
- `SLU_EXTRA`: perform iterative refinement in extra precision

## DiagPivotThresh

Specifies the threshold used for a diagonal entry to be an acceptable pivot. It lies in $[0, 1.0]$

## SymmetricMode

- YES
- NO

Specifies whether to use the symmetric mode. Symmetric mode gives preference to diagonal pivots, and uses a `(AT + A)` based column-permutation algorithm.

## PivotGrowth

- YES
- NO

Specifies whether to compute the reciprocal pivot growth.

## ConditionNumber

- YES
- NO

Specifies whether to compute the reciprocal condition number.

## RowPerm

(only for ILU or SuperLU DIST)
Specifies whether to permute the rows of the original matrix.

- NO: not to permute the rows
- LargeDiag MC64: use a serial, weighted bipartite matching algorithm implemented in
MC64 to permute the rows to make the diagonal large relative to the off-diagonal [11].
- LargeDiag AWPM: use a parallel, approximate weighted bipartite matching algorithm
implemented in CombBLAS to permute the rows to make the diagonal large relative to
the off-diagonal [3].
- MY PERMR: use the permutation given by the user.

## ILU_DropRule

Specifies the dropping rule for ILU: (Default: DROP BASIC | DROP AREA)

- `DROP_BASIC`: Basic dropping rule, supernodal based ILUTP(τ).
- `DROP_PROWS`: Supernodal based ILUTP(p, τ), p = γ · nnz(A)/n.
- `DROP_COLUMN`: Variant of ILUTP(p, τ), for j-th column, p = γ · nnz(A(:, j)).
- `DROP_AREA`: Variation of ILUTP, for j-th column, use nnz(F (:, 1 : j))/nnz(A(:, 1 : j)) to control memory.
- `DROP_DYNAMIC`: Dynamically adjust the threshold τ during factorizaion:

```txt
If nnz(L(:, 1 : j))/nnz(A(:, 1 : j)) > γ, τL (j) := min(τ0, τL (j − 1) · 2); Otherwise τL (j) :=
max(τ0 , τL (j − 1)/2). τU (j) uses the similar rule.
```

- `DROP_INTERP`: Compute the second dropping threshold by interpolation instead of quick select (default). In this case, the actual fill ratio is not guaranteed to be smaller than gamma.

## ILU_DropTol

Specifies the numerical dropping threshold for ILU. It belongs to $[0.0, 1.0]$.

## ILU_FillFactor

(≥ 1.0)
Specifies the expected fill ratio upper bound, γ, for ILU.

## ILU_MILU

- `SILU`
- `SMILU_1`
- `SMILU_2`
- `SMILU_3`

Specifies which version of modified ILU to use.

## PrintStat

- YES
- NO

Specifies whether to print the solver’s statistics.
