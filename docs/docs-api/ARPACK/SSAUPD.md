# SSAUPD

Reverse communication interface (RCI) for the Implicitly Restarted Arnoldi Iteration.  

For symmetric problems this reduces to a variant of the Lanczos
method.  This method has been designed to compute approximations to a
few eigenpairs of a linear operator represented by matrix $\mathcal{L}$, which is real and symmetric with respect to a real positive semi-definite symmetric matrix $B$, i.e.

$$
B \cdot \mathcal{L} = \mathcal{L}^{T} \cdot B
$$

- $\mathcal{L}^{T}$ denotes transpose of $\mathcal{L}$

Another way to express this condition is:

$$
x \cdot \mathcal{L} \cdot y = y \cdot \mathcal{L} \cdot x
$$

`SAUPD` internally solves the following eigenvalue problem:

$$
\mathcal{L} \cdot \tilde{x} = \tilde{\lambda} B \cdot \tilde{x}
$$

- In the standard eigenproblem $B$ is an identity matrix.

:::note
The computed approximate eigenvalues are called Ritz values and the corresponding approximate eigenvectors are called Ritz vectors.
:::

`SSAUPD` is usually called iteratively to solve one of the following problems:

## Modes

### Mode 1

$$
A \cdot x = \lambda x
$$

where,

- $\mathcal{L}={A}$ is symmetric
- $B=I$.

### Mode 2

$$
{A} \cdot {x} = \lambda {M} \cdot {x}
$$

where,

- ${A}$ is <span class="badge badge--info">Symmetric</span>
- ${M}$ is <span class="badge badge--secondary"> symmetric </span> positive definite <span class="badge badge--success">(SPD)</span>

here,

$$
\mathcal{L} = {M}^{-1} \cdot {A}
$$

$$
{B} = {M}.
$$

> If M can be factored see [Remark 3](#remarks).

### Mode 3 (Shift-and-Invert)

$$
{K} \cdot {x} = \lambda {M} \cdot {x}
$$

- ${K}$ is <span class="badge badge--info"> symmetric </span>
- $\bf{M}$ is <span class="badge badge--success"> symmetric </span> <span class="badge badge--secondary"> positive semi-definite </span>

In this problem:

$$
\mathcal{L} = {(K - \sigma \cdot M)}^{-1} {M}
$$

This is called the Shift-and-Invert mode

$$
{B} = {M}
$$

In this mode the relationship between the eigenvalue $\tilde{\lambda}$ and $\lambda$ is given by:

$$
\tilde{\lambda} = \frac{1}{\lambda - \sigma}
$$

So, we can use shift and inverted method to find the smallest value of $\lambda$ [See for more information.](#standard-problem-by-using-shift-inverted-mode)

### Mode 4 (Buckling)

$$
{K} \cdot {x} = \lambda M \cdot  {x}
$$

where,

- ${K}$ is <span class="badge badge--primary"> symmetric </span> <span class="badge badge--secondary"> positive semi-definite </span>
- $M$ is a <span class="badge badge--warning"> symmetric indefinite </span>

also,

$$
\mathcal{L} = (K - \sigma M)^{-1} \cdot K
$$

$$
B = K.
$$

### Mode 5 (Cayley)

$$
{K} \cdot {x} = \lambda {M} \cdot {x}
$$

where,

- ${K}$ is a <span class="badge badge--primary"> symmetric </span>
- $M$ is a <span class="badge badge--primary"> symmetric </span> <span class="badge badge--secondary"> positive semi-definite </span> matrix.

In this case:

$$
\mathcal{L} = (K - \sigma \cdot M) * (K + \sigma \cdot M)
$$

$$
B = M
$$

:::info
The action of

$$
w = (A - \sigma M)^{-1} \cdot v
$$

and

$$
w = {M}^{-1} \cdot v
$$

should be accomplished either by a direct method using a sparse matrix factorization and solving

$$
(A - \sigma \cdot M) \cdot w = v
$$

$$
M \cdot w = v
$$

or through an iterative method for solving these systems.

- If an iterative method is used, the convergence test must be more stringent than the accuracy requirements for the eigenvalue approximations.
:::

## Smallest eigenvalue problem

Suppose we want to solve the standard problem,

$$
A \cdot x = \lambda x
$$

by using <span class="badge badge--primary"> shift-inverted </span> mode.

Then, ARPACK solves:

$$
\mathcal{L} \cdot \tilde{x} = \tilde{\lambda} B \cdot \tilde{x}
$$

with,

$$
\mathcal{L} = (A-\sigma I)^{-1}
$$

and,

$$
B = I
$$

and,

$$
\tilde{\lambda} = \frac{1}{\lambda - \sigma}
$$

:::note ARPACK is good at finding largest eigenvalues.
:::

When we need smallest eigenvalue of standard problem, we should use shifted-inverted method as shown above. In addition, we can select $\sigma=0.0$, then $\tilde{\lambda}=1/{\lambda}$.

## Usage

```fortran
CALL SSAUPD( &
  & IDO, &
  & BMAT, &
  & N, &
  & WHICH, &
  & NEV, &
  & TOL, &
  & RESID, &
  & NCV, &
  & V, &
  & LDV, &
  & IPARAM,
  & IPNTR, &
  & WORKD, &
  & WORKL, &
  & LWORKL, &
  & INFO )
```

| Argument | Type           | Intent | Options                   |
|:---------|:---------------|:-------|:--------------------------|
| IDO      | Int            | INOUT  |                           |
| BMAT     | Char(1)        | IN     | I, G                      |
| N        | Int            | IN     |                           |
| WHICH    | Char(2)        | IN     | LA, SA, LM, SM, BE        |
| NEV      | Int            | IN     |                           |
| TOL      | Real32         | IN     |                           |
| RESID    | Real32(N)      | INOUT  |                           |
| NCV      | Int            | IN     |                           |
| V        | Real32(N,NCV)  | OUT    |                           |
| LDV      | Int            | IN     | SIZE(V,1)                 |
| IPARAM   | Int(11)        | INOUT  |                           |
| IPNTR    | Int(11)        | OUT    |                           |
| WORKD    | Real32(3*N)    | INOUT  |                           |
| WORKL    | Real32(LWORKL) | OUT    |                           |
| LWORKL   | Int            | IN     | at least `NCV**2 + 8*NCV` |
| INFO     | Int            | INOUT  |                           |
|          |                |        |                           |

These arguments are explained below.

## IDO

- Type: Integer
- Intent: INPUT/OUTPUT

`IDO` is Reverse communication flag.

:::caution IDO must be zero on the first call to SSAUPD.
:::

IDO will be set internally to indicate the type of operation to be performed. Control is then given back to the calling routine which has the responsibility to carry out the requested operation and call SSAUPD with the result.  The operand is given in `WORKD(IPNTR(1))`, the result must be put in `WORKD(IPNTR(2))`.

:::note If Mode = 2 see [Remark 5](#remarks)
:::

### IDO =  0

First call to the reverse communication interface

### IDO = -1

Task to be performed:  $y = \mathcal{L} \cdot x$, where

- `IPNTR(1)` is the pointer into `WORKD` for X,
- `IPNTR(2)` is the pointer into `WORKD` for Y.
- This is for the initialization phase to force the starting vector into the range of $\mathcal{L}$.

### IDO =  1

Task to be peformed: $y = \mathcal{L} \cdot x$, where

- `IPNTR(1)` is the pointer into `WORKD` for `X`,
- `IPNTR(2)` is the pointer into `WORKD` for `Y`.

:::note In <span class="badge badge--primary"> mode 3,4 and 5 </span>, the vector $B \cdot x$ is already available in `WORKD`(ipntr(3)).  It does not need to be recomputed in forming $\mathcal{L} \cdot x$.
:::

### IDO =  2

Compute  $y = B \cdot x$, where,

- `IPNTR(1)` is the pointer into `WORKD` for `X`,
- `IPNTR(2)` is the pointer into `WORKD` for `Y`.

### IDO =  3

Compute the `IPARAM(8)` shifts where `IPNTR(11)` is the pointer into `WORKL` for placing the shifts. See [Remark 6](#remarks) below.

### IDO = 99

nothing to be done

## BMAT

- Type: `Character*1`
- Intent: INPUT

`BMAT` specifies the type of the matrix B that defines the semi-inner product for the operator `OP`.

- B = 'I' -> standard eigenvalue problem `A*x = lambda*x`
- B = 'G' -> generalized eigenvalue problem `A*x = lambda*B*x`

## N

- Type: Integer
- Intent: INPUT

Dimension of the eigenproblem.

## WHICH

- Character*2
- INPUT

Specify which of the Ritz values of OP to compute.

- 'LA' - compute the NEV largest (algebraic) eigenvalues.
- 'SA' - compute the NEV smallest (algebraic) eigenvalues.
- 'LM' - compute the NEV largest (in magnitude) eigenvalues.
- 'SM' - compute the NEV smallest (in magnitude) eigenvalues.
- 'BE' - compute NEV eigenvalues, half from each end of the spectrum.  When NEV is odd, compute one more from the high end than from the low end. (see remark 1 below)

## NEV

- Type: Integer
- Intent: INPUT

Number of eigenvalues of OP to be computed, `0 < NEV < N`

## TOL

- Type: Real, scalar
- Intent: INPUT

Stopping criterion: the relative accuracy of the Ritz value is considered acceptable if

```fortran
BOUNDS(I) .LE. TOL*ABS(RITZ(I)).
```

If `TOL .LE. 0` is passed, then a default tolerance is set as:

```txt
DEFAULT = SLAMCH('EPS')
```

where, machine precision as computed by the LAPACK auxiliary subroutine `SLAMCH`.

## RESID

Type: Real, array of length N.
Intent: INPUT/OUTPUT

On INPUT:

- If `INFO .EQ. 0`, a random initial residual vector is used.
- If `INFO .NE. 0`, `RESID` contains the initial residual vector, possibly from a previous run.

On OUTPUT:

`RESID` contains the final residual vector.

## NCV

- Type: Integer
- Intent: INPUT

:::info `NCV` should be less than or equal to `N`
:::

Number of columns of the matrix V (less than or equal to N). This will indicate how many Lanczos vectors are generated at each iteration.  After the startup phase in which `NEV` Lanczos vectors are generated, the algorithm generates `NCV-NEV` Lanczos vectors at each subsequent update iteration.

:::note Most of the cost in generating each Lanczos vector is in the matrix-vector product $\mathcal{L} \cdot x$. See, [Remark 4](#remarks).
:::

## V

- Real  N by NCV array
- OUTPUT

The NCV columns of V contain the Lanczos basis vectors.

## LDV

- Integer
- INPUT

Leading dimension of V exactly as declared in the calling program.

## IPARAM

- Integer array of length 11
- INOUT

|  |  | Options | Safe Default | Comment |
| --- | --- | --- | --- | --- |
| IPARAM (1) | ISHIFT | 1,2 | 1 | IN |
| IPARAM (2) | LEVEC | NA | NA | IN: Deprecated |
| IPARAM (3) | MAXITER |  |  | IN: Max iteration allowed OUT: no. of iteration performed. |
| IPARAM (4) | NB | 1 | 1 | IN: Number of blocks |
| IPARAM (5) | NCONV |  |  | OUT: Number of converged Ritz values  |
| IPARAM (6) | IUPD | NA | NA | IN: Deprecated |
| IPARAM (7) | MODE | 1,2,3,4,5 |  | IN: Mode of eigenvalue problem |
| IPARAM (8) | NP |  |  | IN: See the docs |
| IPARAM (9) | NUMOP |  |  | OUT: No. of `OP*x` operations performed |
| IPARAM (10) | NUMOPB |  |  | OUT: No. of `B*x` operations performed. |
| IPARAM (11) | NUMREO |  |  | OUT: No. of steps of re-orthogonalization |

### IPARAM(1)

- It stands for `ISHIFT`, which is method for selecting the implicit shifts.
- The shifts selected at each iteration are used to restart the Arnoldi iteration in an implicit fashion.
- `ISHIFT = 0`: the shifts are provided by the user via reverse communication.  The `NCV` eigenvalues of the current tridiagonal matrix `T` are returned in the part of `WORKL` array corresponding to RITZ. See [remark 6](#remarks).
- `ISHIFT = 1`: exact shifts with respect to the reduced tridiagonal matrix `T`.  This is equivalent to restarting the iteration with a starting vector that is a linear combination of Ritz vectors associated with the "wanted" Ritz values.

### IPARAM(2)

LEVEC: No longer referenced. See [remark 2](#remarks) below.

### IPARAM(3)

- On INPUT:  maximum number of Arnoldi update iterations allowed.
- On OUTPUT: actual number of Arnoldi update iterations taken.

### IPARAM(4)

- NB: blocksize to be used in the recurrence. The code currently works only for NB = 1.

### IPARAM(5)

- `NCONV`: number of "converged" Ritz values.
- This represents the number of Ritz values that satisfy the convergence criterion.

### IPARAM(6)

`IUPD`: No longer referenced. Implicit restarting is `ALWAYS` used.

### IPARAM(7)

- `MODE`: On INPUT, determines what type of eigenproblem is being solved.
- It must be 1,2,3,4,5

### IPARAM(8)

- `NP`: When `IDO = 3` and the user provides shifts through reverse communication (i.e., `IPARAM(1)=0`), SSAUPD returns NP, the number of shifts the user is to provide.

:::note `0 < NP <=NCV-NEV`, See [Remark 6](#remarks) below.
:::

### IPARAM(9)

`NUMOP`: On OUTPUT,  total number of $\mathcal{L} \cdot x$ operations

### IPARAM(10)

`NUMOPB`: total number of $B \cdot x$ operations if `BMAT='G'`,

### IPARAM(11)

`NUMREO`: total number of steps of re-orthogonalization.

## IPNTR

- Integer array of length 11.
- OUTPUT

This integer vectors contains pointer to mark the starting locations in the `WORKD` and `WORKL` arrays for matrices/vectors used by the Lanczos iteration.

### IPNTR(1)

Pointer to the current operand vector X in `WORKD`.

### IPNTR(2)

Pointer to the current result vector Y in `WORKD`.

### IPNTR(3)

Pointer to the vector `B*X` in `WORKD` when used in the shift-and-invert mode.

### IPNTR(4)

Pointer to the next available location in `WORKL` that is untouched by the program.

### IPNTR(5)

Pointer to the `NCV by 2` tridiagonal matrix T in WORKL.

### IPNTR(6)

Pointer to the NCV RITZ values array in `WORKL`.

### IPNTR(7)

Pointer to the Ritz estimates in array `WORKL` associated
with the Ritz values located in RITZ in `WORKL`.

### IPNTR(11)

pointer to the NP shifts in `WORKL`. See [Remark 6](#remarks) below.

### IPNTR(8:10)

These values are only referenced by [SSEUPD](SSEUPD.md).

See [Remark 2](#remarks).

- `IPNTR(8)`: pointer to the `NCV` RITZ values of the original system.
- `IPNTR(9)`: pointer to the `NCV` corresponding error bounds.
- `IPNTR(10)`: pointer to the `NCV` by `NCV` matrix of eigenvectors of the tridiagonal matrix T.
- Only referenced by SSEUPD if `RVEC = .TRUE.` See Remarks.

## WORKD

- Real work array of length `3*N`.
- REVERSE COMMUNICATION

Distributed array to be used in the basic Arnoldi iteration for reverse communication. The user should not use WORKD as temporary workspace during the iteration.

Upon termination WORKD(1:N) contains `B*RESID(1:N)`. If the Ritz vectors are desired subroutine [SSEUPD](SSEUPD.md) uses this output. See Data Distribution Note below.

## WORKL

- Real work array of length `LWORKL`.
- OUTPUT, WORKSPACE

Private (replicated) array on each PE or array allocated on the front end.  See Data Distribution Note below.

## LWORKL

- Integer
- INPUT

:::note `LWORKL` must be at least `NCV**2 + 8*NCV`.
:::

## INFO

- Integer
- INOUT

### On input

:::note If `INFO .EQ. 0`, a randomly initial residual vector is used.
:::

:::note If INFO .NE. 0, RESID contains the initial residual vector possibly from a previous run.
:::

### On output

On output `INFO` represents the Error flag.

| 0  | Normal exit.                                                                                                                                                                 |
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Maximum number of iterations taken. All possible eigenvalues of OP has been found. IPARAM(5) returns the number of wanted converged Ritz values.                             |
| 2  | No longer an informational error. Deprecated starting with release 2 of ARPACK.                                                                                              |
| 3  | No shifts could be applied during a cycle of the Implicitly restarted Arnoldi iteration. One possibility is to increase the size of NCV relative to NEV. See remark 4 below. |
| -1 | N must be positive.                                                                                                                                                          |
| -2 | NEV must be positive.                                                                                                                                                        |
| -3 | NCV must be greater than NEV and less than or equal to N.                                                                                                                    |
| -4 | The maximum number of Arnoldi update iterations allowed must be greater than zero.                                                                                           |
|-5| WHICH must be one of 'LM'| 'SM'| 'LA'| 'SA' or 'BE'.|
|-6| BMAT must be one of 'I' or 'G'.|
|-7| Length of private work array WORKL is not sufficient.|
|-8| Error return from trid. eigenvalue calculation. Informatinal error from LAPACK routine ssteqr.|
|-9| Starting vector is zero.|
|-10| IPARAM(7) must be 1|2|3|4|5.|
|-11| IPARAM(7) = 1 and BMAT = 'G' are incompatible.|
|-12| IPARAM(1) must be equal to 0 or 1.|
|-13| NEV and WHICH = 'BE' are incompatible.|
|-9999| Could not build an Arnoldi factorization. IPARAM(5) returns the size of the current Arnoldi factorization. The user is advised to check that enough workspace and array storage has been allocated.|

## Remarks

### Remark 1

- The converged Ritz values are always returned in ascending algebraic order.
- The computed Ritz values are approximate eigenvalues of OP.
- The selection of `WHICH` should be made with this in mind when `Mode = 3,4,5.`
- After convergence, approximate eigenvalues of the original problem may be obtained with the ARPACK subroutine [SSEUPD](SSEUPD.md)

### Remark 2

If the Ritz vectors corresponding to the converged Ritz values are needed,
the user must call `SSEUPD` immediately following completion of `SSAUPD`.
This is new starting with version 2.1 of ARPACK.

### Remark 3

- If M can be factored into a Cholesky factorization $M=L\cdot L^{T}$, then (Mode=2) should NOT be selected. Instead one should use (Mode = 1) with $\mathcal{L}=L^{-1} \cdot A \cdot L^{-1}$.
- Appropriate triangular linear systems should be solved with L and $L^T$ rather than computing inverses.
- After convergence, an approximate eigenvector z of the original problem is recovered by solving $L^T \cdot z = x$, where x is a Ritz vector of $\mathcal{L}$.

### Remark 4

At present there is no a-priori analysis to guide the selection of `NCV` relative to `NEV`.
The only formal requirement is that `NCV > NEV`. However, it is recommended that $\text{NCV} \ge 2 \times \text{NEV}$.

:::tip
If many problems of the same type are to be solved, one should experiment with increasing
NCV while keeping NEV fixed for a given test problem.
This will usually decrease the required number of `OP*x` operations
but it also increases the work and storage required to maintain the orthogonal basis vectors.
The optimal "cross-over" with respect to CPU time is problem dependent and must be determined empirically.
:::

### Remark 5

If [IPARAM(7)](#iparam7) `= 2` then in the Reverse communication interface (RCI) the user must do the following.

- When `IDO = 1`, $y = \mathcal{L} \cdot x$ is to be computed, where $\mathcal{L} = {B}^{-1} \cdot A$.
- After computing $A \cdot x$ , the user must overwrite $x$ with $A \cdot x$.
- Then, $y$ is the solution to the linear set of equations $B \cdot y = A \cdot x$.

### Remark 6

When `IPARAM(1)` = 0, and IDO = 3, the user needs to provide the NP = IPARAM(8) shifts in locations:

```txt
 1   WORKL(IPNTR(11))
 2   WORKL(IPNTR(11)+1)
  .
  .
  .
NP  WORKL(IPNTR(11)+NP-1).
```

- The eigenvalues of the current tridiagonal matrix are located in
`WORKL(IPNTR(6))` through `WORKL(IPNTR(6)+NCV-1)`.
- They are in the order defined by `WHICH`.
- The associated Ritz estimates are located in `WORKL(IPNTR(8))`,
`WORKL(IPNTR(8)+1)`, ... , `WORKL(IPNTR(8)+NCV-1)`.

## References

1. D.C. Sorensen, "Implicit Application of Polynomial Filters in a k-Step Arnoldi Method", SIAM J. Matr. Anal. Apps., 13 (1992), pp 357-385.
2. R.B. Lehoucq, "Analysis and Implementation of an Implicitly Restarted Arnoldi Iteration", Rice University Technical Report TR95-13, Department of Computational and Applied Mathematics.
3. B.N. Parlett, "The Symmetric Eigenvalue Problem". Prentice-Hall, 1980.
4. B.N. Parlett, B. Nour-Omid, "Towards a Black Box Lanczos Program", Computer Physics Communications, 53 (1989), pp 169-179.
5. B. Nour-Omid, B.N. Parlett, T. Ericson, P.S. Jensen, "How to Implement the Spectral Transformation", Math. Comp., 48 (1987), pp 663-673.
6. R.G. Grimes, J.G. Lewis and H.D. Simon, "A Shifted Block Lanczos Algorithm for Solving Sparse Symmetric Generalized Eigenproblems", SIAM J. Matr. Anal. Apps.,  January (1993).
7. L. Reichel, W.B. Gragg, "Algorithm 686: FORTRAN Subroutines for Updating the QR decomposition", ACM TOMS, December 1990, Volume 16 Number 4, pp 369-377.
8. R.B. Lehoucq, D.C. Sorensen, "Implementation of Some Spectral Transformations in a k-Step Arnoldi Method". In Preparation.
