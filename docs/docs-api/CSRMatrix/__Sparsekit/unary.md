# Sparsekit Manual

This page provides the documentation of `unary.f`. The contents of this module are described below.

| subroutine  | description  |
|---|---|
| `SUBMAT` | extracts a submatrix from a sparse matrix |
| `FILTER` | filters elements from a matrix according to their magnitude |
| `CSORT`  | sorts the elements in increasing order of columns |
| `CLNCSR`  | clean up the CSR format matrix, remove duplicate entry, etc |
| `TRANSP` | in-place transposition routine |
| `COPMAT` | copy of a matrix into another matrix (both stored csr)    |
| `GETELM` | returns a(i,j) for any (i,j) from a CSR-stored matrix.     |
| `GETDIA` | extracts a specified diagonal from a matrix.                |
| `GETL`   | extracts lower triangular part |
| `GETU`   | extracts upper triangular part |
| `LEVELS` | gets the level scheduling structure for lower triangular matrices |
| `AMASK`  | extracts C = A mask M |
| `RPERM`  | permutes the rows of a matrix (B = P A) |
| `CPERM`  | permutes the columns of a matrix (B = A Q) |
| `DPERM`  | permutes both the rows and columns of a matrix (B = P A Q ) |
| `DPERM1` | general extraction routine (extracts arbitrary rows) |
| `DPERM2` | general submatrix permutation/extraction routine            |
| `DVPERM` | permutes a real vector (in-place)                           |
| `IVPERM` | permutes an integer vector (in-place)                       |
| `RETMX`  | returns the max absolute value in each row of the matrix    |
| `DIAPOS` | returns the positions of the diagonal elements in A.        |
| `EXTBDG` | extracts the main diagonal blocks of a matrix.              |
| `GETBWD` | returns the bandwidth information on a matrix.              |
| `BLKFND` | finds the block-size of a matrix.                           |
| `BLKCHK` | checks whether a given integer is the block size of A.      |
| `INFDIA` | obtains information on the diagonals of A.                  |
| `AMUBDG` | gets number of nonzeros in each row of A*B (as well as NNZ) |
| `APLBDG` | gets number of nonzeros in each row of A+B (as well as NNZ) |
| `RNRMS`  | computes the norms of the rows of A                         |
| `CNRMS`  | computes the norms of the columns of A                      |
| `ROSCAL` | scales the rows of a matrix by their norms.                 |
| `COSCAL` | scales the columns of a matrix by their norms.              |
| `ADDBLK` | Adds a matrix B into a block of A.                          |
| `GET1UP` | Collects the first elements of each row of the upper triangular portion of the matrix |
| `XTROWS` | extracts given rows from a matrix in CSR format.            |
| `CSRKVSTR`|  Finds block row partitioning of matrix in CSR format      |
| `CSRKVSTC`|  Finds block column partitioning of matrix in CSR format   |
| `KVSTMERGE`| Merges block partitionings, for conformal row/col pattern |

## SUBMAT

```fortran
      subroutine submat (job,i1,i2,j1,j2,a,ja,ia,nr,nc,ao,jao,iao)
      integer job,i1,i2,j1,j2,nr,nc,ia(*),ja(*),jao(*),iao(*)
      real*8 a(*),ao(*)
```

> extracts the submatrix A(i1:i2,j1:j2) and puts the result in matrix ao,iao,jao, In place: ao,jao,iao may be the same as a,ja,ia.

on input:

- n = row dimension of the matrix
- i1,i2 = two integers with i2 .ge. i1 indicating the range of rows to be extracted.
- j1,j2 = two integers with j2 .ge. j1 indicating the range of columns to be extracted.
- There is no checking whether the input values for i1, i2, j1, j2 are between 1 and n.
- a,ja,ia = matrix in compressed sparse row format.
- job = job indicator: if job .ne. 1 then the real values in a are NOT extracted, only the column indices (i.e. data structure) are. otherwise values as well as column indices are extracted.

on output

- nr = number of rows of submatrix
- nc = number of columns of submatrix, if either of nr or nc is nonpositive the code will quit.

- ao,jao,iao = extracted matrix in general sparse format with jao containing the column indices,and iao being the pointer to the beginning of the row,in arrays a,ja.

## FILTER

```fortran
      subroutine filter(n,job,drptol,a,ja,ia,b,jb,ib,len,ierr)
      real*8 a(*),b(*),drptol
      integer ja(*),jb(*),ia(*),ib(*),n,job,len,ierr
```

> This module removes any elements whose absolute value is small from an input matrix A and puts the resulting matrix in B. The input parameter job selects a definition of small.

on entry:

- n = integer row dimension of matrix
- job   = integer. used to determine strategy chosen by caller to drop elements from matrix A.
  - job = 1, Elements whose absolute value is less than the drop tolerance are removed.
  - job = 2, Elements whose absolute value is less than the product of the drop tolerance and the Euclidean norm of the row are removed.
  - job = 3, Elements whose absolute value is less that the product of the drop tolerance and the largest element in the row are removed.
- drptol = real. drop tolerance used for dropping strategy.
- a, ja, ia = input matrix in compressed sparse format
- len = integer. the amount of space available in arrays b and jb.

on return:

- b, jb, ib = resulting matrix in compressed sparse format.
- ierr = integer. containing error message.
  - ierr .eq. 0 indicates normal return
  - ierr .gt. 0 indicates that there is'nt enough space is a and ja to store the resulting matrix. ierr then contains the row number where filter stopped.

note:

- This module is in place. (`b,jb,ib`) can ne the same as
- `a, ja, ia` in which case the result will be overwritten).

## CSORT

```fortran
subroutine csort (n,a,ja,ia,values)
  logical values
  integer n, ja(*), ia(n+1)
  real*8 a(*)
```

> This routine sorts the elements of  a matrix (stored in Compressed Sparse Row Format) in increasing order of their column indices within each row. It uses insertion sort algorithm.

on entry:

- n     = the row dimension of the matrix
- a     = the matrix A in compressed sparse row format
- ja    = the array of column indices of the elements in array a
- ia    = the array of pointers to the rows
- values= logical indicating whether or not the real values a(*) must also be permuted. if (.not. values) then the array a is not touched by csort and can be a dummy array

on return:

- the matrix stored in the structure a, ja, ia is permuted in such a way that the column indices are in increasing order within each row
- iwork(1:nnz) contains the permutation used  to rearrange the elements

## CLNCSR

```fortran
subroutine clncsr(job,value2,nrow,a,ja,ia,indu,iwk)
  integer job, nrow, value2
  integer ia(nrow+1),indu(nrow),iwk(nrow+1),ja(*)
  real*8  a(*)
```

This routine performs two tasks to clean up a CSR matrix:

- remove duplicate/zero entries,
- perform a partial ordering, new order lower triangular part, main diagonal, upper triangular part.

On entry:

- `job` can have following values
  - 0 -- nothing is done
  - 1 -- eliminate duplicate entries, zero entries.
  - 2 -- eliminate duplicate entries and perform partial ordering.
  - 3 -- eliminate duplicate entries, sort the entries in the increasing order of clumn indices.
- `value2` : if 0, then matrix is pattern only (a is not touched), if 1, then matrix has values too.
- `nrow` : row dimension of the matrix
- `a,ja,ia` : input matrix in CSR format

On return:

- `a,ja,ia` : cleaned matrix
- `indu` : pointers to the beginning of the upper triangular portion if `job > 1`
- `iwk` : integer work space of size `nrow+1`

## TRANSP

```fortran
    subroutine transp (nrow,ncol,a,ja,ia,iwk,ierr)
      integer nrow, ncol, ia(*), ja(*), iwk(*), ierr
      real*8 a(*)
```

> In-place transposition routine. This subroutine transposes a matrix stored in compressed sparse row format. the transposition is done in place in that the arrays a,ja,ia c of the transpose are overwritten onto the original arrays.

on entry:

- `nrow` = integer. The row dimension of A.
- `ncol` = integer. The column dimension of A.
- `a` = real array of size `nnz` (number of nonzero elements in A). containing the nonzero elements
- `ja` = integer array of length `nnz` containing the column positions of the corresponding elements in `a`.
- `ia` = integer of size `n+1`, where `n = max(nrow,ncol)`. On entry `ia(k)` contains the position in `a,ja` of the beginning of the k-th row.
- `iwk` = integer work array of same length as ja.

on return:

- `ncol` = actual row dimension of the transpose of the input matrix. Note that this may be .le. the input value for `ncol`, in case some of the last columns of the input matrix are zero columns. In the case where the actual number of rows found in `transp(A) ` exceeds the input value of `ncol`, `transp` will return without completing the transposition. see `ierr`.
- `a,ja,ia` = contains the transposed matrix in compressed sparse row format. The row dimension of `a, ja, ia` is now ncol.
- `ierr` = integer. error message. If the number of rows for the transposed matrix exceeds the input value of ncol, then ierr is  set to that number and transp quits. Otherwise ierr is set to 0 (normal return).

Note:

1) If you do not need the transposition to be done in place it is preferrable to use the conversion routine csrcsc (see conversion routines in formats).
2) the entries of the output matrix are not sorted (the column indices in each are not in increasing order) use csrcsc if you want them sorted.

## GETELM

```fortran
  double precision function getelm (i,j,a,ja,ia,iadd,sorted)
    integer i, ia(*), iadd, j, ja(*)
    double precision a(*)
    logical sorted
```

> this function returns the element a(i,j) of a matrix a, for any pair (i,j).  the matrix is assumed to be stored in compressed sparse row (csr) format. getelm performs a binary search in the case where it is known that the elements are sorted so that the column indices are in increasing order. also returns (in iadd) the address of the element a(i,j) in arrays a and ja when the search is successsful (zero if not).

on entry:

- `i` : the row index of the element sought (input).
- `j` : the column index of the element sought (input).
- `a` : the matrix a in compressed sparse row format (input).
- `ja` : the array of column indices (input).
- `ia` : the array of pointers to the rows' data (input).
- `sorted` : logical indicating whether the matrix is knonw to have its column indices sorted in increasing order (sorted=.true.) or not (sorted=.false.).

on return:

- getelm = value of a(i,j).
- iadd   = address of element a(i,j) in arrays a, ja if found, zero if not found. (output)
- note: the inputs i and j are not checked for validity.

## GETU

```fortran
subroutine getu (n,a,ja,ia,ao,jao,iao)
  integer n, ia(*), ja(*), iao(*), jao(*)
  real*8 a(*), ao(*)
```

> this subroutine extracts the upper triangular part of a matrix and writes the result `ao`, `jao`, `iao`. The routine is in place in that `ao`, `jao`, `iao` can be the same as `a`, `ja`, `ia` if desired.

on input

- n     = dimension of the matrix a.
- a, ja, ia = matrix stored in a, ja, ia, format

On return:

- ao, jao, iao = upper triangular matrix (upper part of a) stored in compressed sparse row format

Note:

- the diagonal element is the last element in each row, that is, in `a(ia(i+1)-1 )`
- `ao, jao, iao` may be the same as `a, ja, ia` on entry, in which case getu will overwrite the result on a, ja, ia

## GETDIA

```fortran
      subroutine getdia (nrow,ncol,job,a,ja,ia,len,diag,idiag,ioff)
      real*8 diag(*),a(*)
      integer nrow, ncol, job, len, ioff, ia(*), ja(*), idiag(*)
```

> this subroutine extracts a given diagonal from a matrix stored in csr format. the output matrix may be transformed with the diagonal removed from it if desired (as indicated by job.) Our definition of a diagonal of matrix is a vector of length nrow (always) which contains the elements in rows 1 to nrow of the matrix that are contained in the diagonal offset by ioff with respect to the main diagonal. if the diagonal element falls outside the matrix then it is defined as a zero entry. Thus, the proper definition of diag(*) with offset ioff is : `diag(i) = a(i,ioff+i) i=1,2,...,nrow` with elements falling outside the matrix being defined as zero.

on entry:

- `nrow` = integer. the row dimension of the matrix a.
- `ncol` = integer. the column dimension of the matrix a.
- `job` = integer. job indicator.
  - if `job = 0` then the matrix `a, ja, ia`, is not altered on return.
  - if `job.ne.0`  then getdia will remove the entries collected in diag from the original matrix. this is done in place.
- `a,ja, ia` = matrix stored in compressed sparse row a,ja,ia,format
- `ioff` = integer,containing the offset of the wanted diagonal the diagonal extracted is the one corresponding to the entries `a(i,j)` with `j-i = ioff`. thus `ioff = 0` means the main diagonal

on return:

- `len` = number of nonzero elements found in diag. (len .le. min(nrow,ncol-ioff)-max(1,1-ioff) + 1 )
- `diag`  = real*8 array of length nrow containing the wanted diagonal. diag contains the diagonal (a(i,j),j-i = ioff ) as defined above.
- `idiag` = integer array of  length `len`, containing the poisitions in the original arrays `a` and `ja` of the diagonal elements collected in `diag`. a zero entry in `idiag(i)` means that there was no entry found in row i belonging to the diagonal.
- `a, ja, ia` = if `job .ne. 0` the matrix is unchanged. otherwise the nonzero diagonal entries collected in diag are removed from the matrix and therefore the arrays `a, ja, ia` will change. (the matrix `a, ja, ia` will contain len fewer elements)

## GETL

```fortran
      subroutine getl (n,a,ja,ia,ao,jao,iao)
      integer n, ia(*), ja(*), iao(*), jao(*)
      real*8 a(*), ao(*)
```

> this subroutine extracts the lower triangular part of a matrix and writes the result ao, jao, iao. The routine is in place in that ao, jao, iao can be the same as a, ja, ia if desired.

on input:

- `n` = dimension of the matrix a.
- `a, ja, ia` = matrix stored in compressed sparse row format.

On return:

- `ao, jao, iao` = lower triangular matrix (lower part of a) stored in `a, ja, ia`, format

note:

- the diagonal element is the last element in each row. i.e., in  `a(ia(i+1)-1 )`
- `ao, jao, iao` may be the same as `a, ja, ia` on entry, in which case getl will overwrite the result on `a, ja, ia`.

## GETU

```fortran
  subroutine getu (n,a,ja,ia,ao,jao,iao)
    integer n, ia(*), ja(*), iao(*), jao(*)
    real*8 a(*), ao(*)
```

> This subroutine extracts the upper triangular part of a matrix and writes the result ao, jao, iao. The routine is in place in that ao, jao, iao can be the same as a, ja, ia if desired. on input:

- `n` = dimension of the matrix a.
- `a, ja, ia` = matrix stored in `a, ja, ia`, format

On return:

- `ao, jao, iao` = upper triangular matrix (upper part of a) stored in compressed sparse row format

note:

- the diagonal element is the last element in each row. i.e. in  `a(ia(i+1)-1 )`
- `ao, jao, iao` may be the same as `a, ja, ia` on entry, in which case getu will overwrite the result on `a, ja, ia`.