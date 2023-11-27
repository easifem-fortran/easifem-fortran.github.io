# Sparsekit Manual

This page provides the documentation of `matvec.f`. The contents of this module are described below.

| subroutine  | description  |
|---|---|
| `AMUX`   | A times a vector. Compressed Sparse Row (CSR) format.        |
| `AMUXMS` | A times a vector. Modified Compress Sparse Row format.       |
| `ATMUX`  | `Transp(A)` times a vector. CSR format.                        |
| `ATMUXR` | `Transp(A)` times a vector. CSR format. A rectangular.         |
| `VBRMV`  | Sparse matrix-full vector product, in VBR format             |
| `LDSOL`  | Lower Triang. solve.  Modified Sparse Row (MSR) format.      |
| `LDSOLL` | Lower Triang. solve with level scheduling. MSR format.       |
| `USOL`   | Unit Upper Triang. solve. Compressed Sparse Row (CSR) format.|
| `UDSOL`  | Upper Triang. solve.  Modified Sparse Row (MSR) format.      |

## AMUX

```fortran
  subroutine amux (n, x, y, a,ja,ia)
  real*8  x(*), y(*), a(*)
  integer n, ja(*), ia(*)
```

Multiplies a matrix by a vector using the dot product form Matrix A is stored in compressed sparse row storage.

ON ENTRY

- `n` row dimension of A
- `x` real array of length equal to the column dimension of the A matrix.
- `a, ja, ia` input matrix in compressed sparse row format.

ON RETURN

- `y` = real array of length `n`, containing the product `y=Ax`

## AMUXMS

```fortran
subroutine amuxms (n, x, y, a,ja)
  real*8  x(*), y(*), a(*)
  integer n, ja(*)
```

A times a vector in MSR format, multiplies a matrix by a vector using the dot product form, Matrix A is stored in Modified Sparse Row storage.

ON ENTRY

- `n` = row dimension of A
- `x` = real array of length equal to the column dimension of the A matrix.
- `a, ja` = input matrix in modified compressed sparse row format.

ON RETURN

- `y`, real array of length n, containing the product `y=Ax`

## ATMUX

```fortran
  subroutine atmux (n, x, y, a,ja,ia)
  real*8  x(*), y(*), a(*)
  integer n, ja(*), ia(*)
```

This routine multiplies the transpose of a matrix by a vector when the original matrix is stored in compressed sparse row storage. Can also be viewed as the product of a matrix by a vector when the original matrix is stored in the compressed sparse column format.

ON ENTRY

- `n` row dimension of A
- `x` real array of length equal to the column dimension of the A matrix.
- `a, ja, ia` input matrix in compressed sparse row format.

ON RETURN

- `y` = real array of length `n`, containing the product `y=Ax`

## ATMUXR

```fortran
      subroutine atmuxr (m, n, x, y, a, ja, ia)
      real*8 x(*), y(*), a(*)
      integer m, n, ia(*), ja(*)
```

This routien multiplies transp( A ) and a vector, where A can be rectangular.
The essential difference between ATMUX and this routine is that the solution vector is initially zeroed.
If using this to multiply rectangular CSC matrices by a vector, m number of rows, n is number of columns.

ON ENTRY

- `m,n` = number of row and columns of A
- `x` = real array of length equal to the column dimension of the A matrix.
- `a, ja, ia` = input matrix in CSR

ON RETURN

- `y`, real array of length n, containing the product `y=Ax`
