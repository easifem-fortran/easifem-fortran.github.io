# Sparsekit Manual

This page provides the documentation of `ilut.f`. The contents of this module are described below.

| Routine | Comment                                                   |
| ------- | --------------------------------------------------------- |
| `ILUT`  | Incomplete LU factorization with dual truncation strategy |
| `ILUTP` | ILUT with column pivoting                                 |
| `ILUD`  | ILU with single dropping + diagonal compensation (~MILUT) |
| `ILUDP` | ILUD with column pivoting                                 |
| `ILUK`  | level-k ILU                                               |
| `ILU0`  | simple ILU(0) preconditioning                             |
| `MILU0` | MILU(0) preconditioning                                   |

SAMPLE ACCELERATOR AND LU SOLVERS:

| Routine | Comment                                                  |
| ------- | -------------------------------------------------------- |
| PGMRES  | preconditioned GMRES solver                              |
| LUSOL   | forward followed by backward triangular solve (Precond.) |
| LUTSOL  | solving v = (LU)^{-T} u (used for preconditioning)       |

## ILUT

```fortran
  subroutine ilut(n,a,ja,ia,lfil,droptol,alu,jlu,ju,iwk,w,jw,ierr)
  implicit none
  integer n
  real*8 a(*),alu(*),w(n+1),droptol
  integer ja(*),ia(n+1),jlu(*),ju(n),jw(2*n),lfil,iwk,ierr
```

Incomplete LU factorization with dual truncation mechanism.

ON ENTRY:

- n = integer. The row dimension of the matrix A.
- a,ja,ia = matrix stored in Compressed Sparse Row format.
- lfil = integer. The fill-in parameter. Each row of L and each row of U will have a maximum of lfil elements (excluding the diagonal element). lfil must be .ge. 0.
- droptol = real\*8. Sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- iwk = integer. The lengths of arrays alu and jlu. If the arrays are not big enough to store the ILU factorizations, ilut will stop with an error message.

ON RETURN:

- ALU,JLU = matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ALU(1:n) ) is inverted. Each ith row of the ALU,JLU matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U.
- JU = integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU.
- ierr = integer. Error message with the following meaning.
- ierr = 0, successful return.
- ierr .gt. 0, zero pivot encountered at step number ierr.
- ierr = -1, Error. input matrix may be wrong. (The elimination process has generated a row in L or U whose length is .gt. n.)
- ierr = -2, The matrix L overflows the array al.
- ierr = -3 --> The matrix U overflows the array alu.
- ierr = -4 --> Illegal value for lfil.
- ierr = -5 --> zero row encountered.

WORK ARRAYS

- JW = integer work array of length 2\*n.
- W = real work array of length n+1.
- W, JU (1:n) store the working array [1:ii-1 = L-part, ii:n = u]
- JW(n+1:2n) stores nonzero indicators

NOTES:

The diagonal elements of the input matrix must be nonzero (at least 'structurally'). Dual drop strategy works as follows:

- Theresholding in L and U as set by `droptol`. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped.
- Keeping only the largest `lfil` elements in the ith row of L and the largest `lfil` elements in the ith row of `U` (excluding diagonal elements).
- Flexibility: one can use `droptol=0` to get a strategy based on keeping the largest elements in each row of `L` and `U`.
- Taking `droptol .ne. 0` but `lfil=n` will give the usual threshold strategy (however, fill-in is then mpredictible).

## ILUTP

```fortran
  subroutine ilutp(n,a,ja,ia,lfil,droptol,permtol,mbloc,alu,
    jlu,ju,iwk,w,jw,iperm,ierr)
    integer n,ja(*),ia(n+1),lfil,jlu(*),ju(n),jw(2*n),iwk,
      iperm(2*n),ierr
    real*8 a(*), alu(*), w(n+1), droptol
```

LUTP preconditioner: ILUT with pivoting, incomplete LU factorization with dual truncation mechanism

ON ENTRY:

- `n` = integer. The dimension of the matrix A.
- `a,ja,ia` = matrix stored in Compressed Sparse Row format. ON RETURN THE COLUMNS OF A ARE PERMUTED. SEE BELOW FOR DETAILS.
- `lfil` = integer. The fill-in parameter. Each row of L and each row of U will have a maximum of lfil elements (excluding the diagonal element). lfil must be .ge. 0.
- `droptol` = real\*8. Sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- `permtol` = tolerance ratio used to determine whether or not to permute two columns. At step i columns i and j are permuted when `abs(a(i,j))*permtol .gt. abs(a(i,i))`. [0 --> never permute; good values 0.1 to 0.01]
- `mbloc` = if desired, permuting can be done only within the diagonal blocks of size mbloc. Useful for PDE problems with several degrees of freedom.. If feature not wanted take mbloc=n.
- `iwk` = integer. The lengths of arrays alu and jlu. If the arrays are not big enough to store the ILU factorizations, ilut will stop with an error message.

ON RETURN:

- `alu,jlu` = matrix stored in Modified Sparse Row (MSR) format containing. The L and U factors together. The diagonal (stored in alu(1:n) ) is inverted. Each i-th row of the alu,jlu matrix contains the i-th row of L (excluding the diagonal entry=1) followed by the i-th row of U.
- `ju` = integer array of length n containing the pointers to the beginning of each row of U in the matrix alu,jlu.
- `iperm` = contains the permutation arrays. iperm(1:n) = old numbers of unknowns iperm(n+1:2\*n) = reverse permutation = new unknowns.
- ierr = integer. Error message with the following meaning.

| ierr | comment                                                                                                           |
| ---- | ----------------------------------------------------------------------------------------------------------------- |
| 0    | successful return.                                                                                                |
| >0   | zero pivot encountered at step number                                                                             |
| -1   | Error. input matrix may be wrong. (The elimination process has generated a row in L or U whose length is .gt. n.) |
| -2   | The matrix L overflows the array al.                                                                              |
| -3   | The matrix U overflows the array alu.                                                                             |
| -4   | Illegal value for lfil.                                                                                           |
| -5   | zero row encountered.                                                                                             |

WORK ARRAYS:

JW = integer work array of length 2\*n.
W = real work array of length n

NOTE:

To avoid permuting the solution vectors arrays for each lu-solve, the matrix a is permuted on return. All column indices are changed. SIMILARLY FOR THE U MATRIX.
To permute the matrix back to its original state use the loop:

```fortran
  do k=ia(1), ia(n+1)-1
     ja(k) = iperm(ja(k))
  enddo
```

## ILUD

ILUD preconditioner: incomplete LU factorization with standard droppoing strategy

```fortran
  subroutine ilud(n,a,ja,ia,alph,tol,alu,jlu,ju,iwk,w,jw,ierr)
  implicit none
  integer n
  real*8 a(*),alu(*),w(2*n),tol, alph
  integer ja(*),ia(n+1),jlu(*),ju(n),jw(2*n),iwk,ierr
```

> This routine computes the ILU factorization with standard threshold dropping: at ith step of elimination, an element a(i,j) in row i is dropped if it satisfies the criterion:

- abs(a(i,j)) < tol, that is, average magnitude of elements in row i of A
- There is no control on memory size required for the factors as is done in ILUT.
- This routines computes also various diagonal compensation ILU's such MILU. These are defined through the parameter `alph`

ON ENTRY:

- `n` = integer. The row dimension of the matrix A.
- `a,ja,ia` = matrix stored in Compressed Sparse Row format
- `alph` = diagonal compensation parameter, alph\*(sum of all dropped out elements in a given row) is added to the diagonal element of U of the factorization
  - `alph = 0` means the scheme is ILU with threshold,
  - `alph = 1` means the scheme is MILU with threshold.
- `tol` = Threshold parameter for dropping small terms in the factorization. During the elimination, a term a(i,j) is dropped whenever abs(a(i,j)) .lt. tol \* [weighted norm of row i]. Here weighted norm = 1-norm / number of nnz elements in the row.
- `iwk` = The length of arrays alu and jlu -- this routine will stop if storage for the factors L and U is not sufficient

ON RETURN:

- `alu,jlu` = matrix stored in Modified Sparse Row (MSR) format containing the L and U factors together. The diagonal (stored in alu(1:n) ) is inverted. Each i-th row of the `alu,jlu` matrix contains the i-th row of L (excluding the diagonal entry=1) followed by the i-th row of U.
- ju = integer array of length n containing the pointers to the beginning of each row of U in the matrix alu,jlu.
- ierr = integer. Error message with the following meaning.

| ierr | comment                                                                                                           |
| ---- | ----------------------------------------------------------------------------------------------------------------- |
| 0    | successful return.                                                                                                |
| >0   | zero pivot encountered at step number                                                                             |
| -1   | Error. input matrix may be wrong. (The elimination process has generated a row in L or U whose length is .gt. n.) |
| -2   | The matrix L overflows the array al.                                                                              |
| -3   | zero row encountered.                                                                                             |

WORK ARRAYS

- JW = integer work array of length 2\*n.
- W = real work array of length n
- W, JU(1:n) store the working array [1:ii-1 = L-part, ii:n = u]
- JW(n+1:2n) stores the nonzero indicator.
- All diagonal elements of the input matrix must be nonzero.

## ILUDP

ILUDP preconditioner, incomplete LU factorization with standard droppoing strategy.

```fortran
  subroutine iludp(n,a,ja,ia,alph,droptol,permtol,mbloc,alu,
  jlu,ju,iwk,w,jw,iperm,ierr)
  implicit none
  integer n,ja(*),ia(n+1),mbloc,jlu(*),ju(n),jw(2*n),iwk,
  iperm(2*n),ierr
  real*8 a(*), alu(*), w(2*n), alph, droptol, permtol
```

ON ENTRY

- n = integer. The dimension of the matrix A.
- a,ja,ia = matrix stored in Compressed Sparse Row format.

> On return the columns of a are permuted.

- `alph` = diagonal compensation parameter -- the term: alph\*(sum of all dropped out elements in a given row) is added to the diagonal element of U of the factorization. Thus: alph = 0 ---> ~ ILU with threshold, alph = 1, MILU with threshold.
- `droptol` = tolerance used for dropping elements in L and U. elements are dropped if they are .lt. norm(row) x droptol row = row being eliminated
- `permtol` = tolerance ratio used for determning whether to permute two columns. Two columns are permuted only when abs(a(i,j))\*permtol .gt. abs(a(i,i)) [0 --> never permute; good values 0.1 to 0.01]
- `mbloc` = if desired, permuting can be done only within the diagonal blocks of size mbloc. Useful for PDE problems with several degrees of freedom.. If feature not wanted take mbloc=n.
- `iwk` = integer. The declared lengths of arrays alu and jlu if iwk is not large enough the code will stop prematurely with ierr = -2 or ierr = -3 (see below).

ON RETURN

- `alu,jlu` = matrix stored in Modified Sparse Row (MSR) format containing the L and U factors together. The diagonal (stored in alu(1:n) ) is inverted. Each i-th row of the alu,jlu matrix contains the i-th row of L (excluding the diagonal entry=1) followed by the i-th row of U.
- ju = integer array of length n containing the pointers to the beginning of each row of U in the matrix alu,jlu.
- iperm = contains the permutation arrays, iperm(1:n) = old numbers of unknowns, iperm(n+1:2\*n) = reverse permutation = new unknowns.
- ierr = integer. Error message with the following meaning.

| ierr | comment                                                                                                           |
| ---- | ----------------------------------------------------------------------------------------------------------------- |
| 0    | successful return.                                                                                                |
| >0   | zero pivot encountered at step number                                                                             |
| -1   | Error. input matrix may be wrong. (The elimination process has generated a row in L or U whose length is .gt. n.) |
| -2   | The L/U matrix overflows the arrays alu,jlu                                                                       |
| -3   | zero row encountered.                                                                                             |

Work arrays

- JW = integer work array of length 2\*n.
- W = real work array of length 2\*n

NOTES

TO AVOID PERMUTING THE SOLUTION VECTORS ARRAYS FOR EACH LU-SOLVE, THE MATRIX A IS PERMUTED ON RETURN. [all column indices are changed]. SIMILARLY FOR THE U MATRIX. To permute the matrix back to its original state use the loop:

```fortran
do k=ia(1), ia(n+1)-1
  ja(k) = perm(ja(k))
enddo
```

## ILUK

ILU WITH LEVEL OF FILL-IN OF K (ILU(k))

```fortran
  subroutine iluk(n,a,ja,ia,lfil,alu,jlu,ju,levs,iwk,w,jw,ierr)
  implicit none
  integer n
  real*8 a(*),alu(*),w(n)
  integer ja(*),ia(n+1),jlu(*),ju(n),levs(*),jw(3*n),lfil,iwk,ierr
```

ON ENTRY

- n = integer. The row dimension of the matrix A.
- `A,JA,IA` = matrix stored in Compressed Sparse Row format.
- `lfil` = integer. The fill-in parameter. Each element whose leve-of-fill exceeds lfil during the ILU process is dropped. lfil must be .ge. 0
- tol = real\*8. Sets the threshold for dropping small terms in the factorization. See below for details on dropping strategy.
- IWK = integer. The minimum length of arrays ALU, JLU, and LEVS.

ON RETURN

- `ALU,JLU` = matrix stored in Modified Sparse Row (MSR) format containing the L and U factors together. The diagonal (stored in alu(1:n) ) is inverted. Each i-th row of the `ALU,JLU` matrix contains the i-th row of L (excluding the diagonal entry=1) followed by the i-th row of `U`.
- `JU` = integer array of length n containing the pointers to the beginning of each row of `U` in the matrix `ALU,JLU`.
- `LEVS` = integer (work) array of size `IWK`, which contains the levels of each element in `ALU, JLU`.
- `ierr` = integer. Error message with the following meaning.

| ierr | comment                                                                                                           |
| ---- | ----------------------------------------------------------------------------------------------------------------- |
| 0    | successful return.                                                                                                |
| >0   | zero pivot encountered at step number                                                                             |
| -1   | Error. input matrix may be wrong. (The elimination process has generated a row in L or U whose length is .gt. n.) |
| -2   | The matrix L overflows the array AL                                                                               |
| -3   | The matrix U overflows the array ALU                                                                              |
| -4   | Illegal value for lfil.                                                                                           |
| -5   | zero row encountered.                                                                                             |

WORK ARRAYS

- JW = integer work array of length 3\*n.
- W = real work array of length n

NOTES

This is not implemented efficiently storage-wise. For example: Only the part of the array levs(\*) associated with the U-matrix is needed in the routine.. So some storage can be saved if needed. The levels of fills in the LU matrix are output for information only -- they are not needed by LU-solve.

- W, JU (1:n) store the working array [1:ii-1 = L-part, ii:n = u]
- JW(n+1:2n) stores the nonzero indicator.

> All the diagonal elements of the input matrix must be nonzero.

## LUSOL

```fortran
  subroutine lusol(n, y, x, alu, jlu, ju)
   real*8 x(n), y(n), alu(*)
  integer n, jlu(*), ju(*)
```

This routine solves the system `LU x = y`, given an LU decomposition of a matrix stored in (`ALU, JLU, JU`) modified sparse row format (MSR)

ON ENTRY

- `n` dimension of system
- `y` the right-hand-side vector
- `alu, jlu, ju` the LU matrix as provided from the ILU routines.

ON RETURN

`x`, solution of `LU x = y`.

NOTE

Routine is in place: `CALL LUSOL (n, x, x, alu, jlu, ju)` will solve the system with rhs `X` and overwrite the result on `X`.

## LUTSOL

```fortran
  subroutine lutsol(n, y, x, alu, jlu, ju)
   real*8 x(n), y(n), alu(*)
  integer n, jlu(*), ju(*)
```

This routine solves the system Transp(LU) x = y, given an LU decomposition of a matrix stored in (alu, jlu, ju) modified sparse row format. Transp(M) is the transpose of M.

ON ENTRY

- n = dimension of system
- y = the right-hand-side vector
- alu, jlu, ju, the LU matrix as provided from the ILU routines.

ON RETURN

- x = solution of transp(LU) x = y.
