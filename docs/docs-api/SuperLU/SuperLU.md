---
sidebar_position: 1
date: 23-01-24
update: 23-01-24
status: stable
docs: done
extpkgs:
  - SuperLU
category:
  - LinearAlgebra
  - SparseMatrix
tags:
  - linearAlgebra
  - sparseMatrix
---

# SuperLU

$$
LU=P_{r}D_{r}AD_{c}P_{c}
$$

here,

- $P_{r}$ and $P_{c}$ are row and col permutation matrices
- $D_{r}$ and $D_{c}$ are row and col scaling diagonal matrices
- $L$ is unit lower triangular matrix $\left(L_{ii}=1\right)$
- $U$ is an upper triangular matrix

To solve

$$
Ax=B
$$

A is given by

$$
A=D_{r}^{-1}P_{r}^{-1}LUP_{c}^{-1}D_{c}^{-1}
$$

$A^{-1}$ is given by

$$
A^{-1}=D_{c}P_{c}U^{-1}L^{-1}P_{r}D_{r}
$$

Therefore,

$$
x=D_{c}\left(P_{c}\left(U^{-1}\left(L^{-1}\left(P_{r}\left(D_{r}B\right)\right)\right)\right)\right)
$$

Please read from right to left.

Note that $D$ and $P$ operates on column vectors only.

## Simple Driver algorithm

- Choose $P_{c}$to order the columns of $A$ to increase the sparsity of the computed $L$ and $U$ factors, and hopefully to increase parallelism

- Compute $LU$ factorization of $AP_{c}$. Most of the pkgs, including SuperLU, can perform dynamic pivoting with row interchanges for numerical stability, computing $P_{r}$, $L$ and $U$ at the same time.

- Solve the system using $P$s and $L$ and $U$ as described above (with $D$s equal to identity)

## Expert Driver Algorithm for sequential and multithreaded

- Equilibrate the matrix $A$, that is, compute diagonal matrices $D_{r}$ and $D_{c}$ so that $\hat{A}=D_{r}AD_{c}$is better conditioned than $A$, that is, $\hat{A}^{-1}$is less sensitive to perturbations in $\hat{A}$that $A^{-1}$is to perturbations in $A$.

- Order the columns of $\hat{A}$to increase the sparsity of computed $L$ and $U$ factors. In other words replace $\hat{A}$ by $\hat{A}P_{c}^{T}$.

- Compute the $LU$ factorization of $\hat{A}.$

## Column ordering

- Natural ordering
- Multiple Minimum Degree applied to the structure of $A^{T}A$
- MMD applied to the structure of $A+A^{T}$
- Column Approximation Minimum Degree (COLAMD)
- User supplied ordering, e.g., from Metis

## Sequential SuperLU

- SuperLU can preorder the columns
- Threshold row pivoting
- equilibrate the system
- estimate the condition number
- relative backward error bounds
- ILU factorization
- Real and complex with single and double precision

## Useful routines

- dgssv() solves the system of linear equations $A \cdot X=B$, using the LU factorization from `DGSTRF`.
- dgssvx() solves the system of linear equations $A\cdot X = B$ or $A^T\cdot X = B$
- dgstrf()
- dgstrs()
- dgscon()
- dgsequ()
- dlaqgs()
- dgsrfs()
- dgsisx()
- dgsitrf()

## Data structure

```c
typedef struct {
  Stype_t Stype; /* Storage type: interprets the storage structure
                    pointed to by *Store. */
  Dtype_t Dtype; /* Data type. */
  Mtype_t Mtype; /* Matrix type: describes the mathematical property of
                    the matrix. */
  int_t nrow;    /* number of rows */
  int_t ncol;    /* number of columns */
  void *Store;   /* pointer to the actual storage of the matrix */
} SuperMatrix;
```

```c
typedef struct {
  int_t nnz;     /* number of nonzeros in the matrix */
  void *nzval;   /* pointer to array of nonzero values, packed by column */
  int_t *rowind; /* pointer to array of row indices of the nonzeros */
  int_t *colptr; /* pointer to array of beginning of columns in nzval[]
                    and rowind[]  */
                 /* Note:
                    Zero-based indexing is used;
                    colptr[] has ncol+1 entries, the last one pointing
                    beyond the last column, so that colptr[ncol] = nnz. */
} NCformat;
```

```c
typedef struct {
  int_t nnz;     /* number of nonzeros in the matrix */
  void *nzval;   /* pointer to array of nonzero values, packed by raw */
  int_t *colind; /* pointer to array of columns indices of the nonzeros */
  int_t *rowptr; /* pointer to array of beginning of rows in nzval[]
                    and colind[]  */
                 /* Note:
                    Zero-based indexing is used;
                    rowptr[] has nrow+1 entries, the last one pointing
                    beyond the last row, so that rowptr[nrow] = nnz. */
} NRformat;
```

## How to call SuperLU

## Installation

Installation by using cmake:

Configuration:

```sh
export build_dir=$HOME/temp/easifem-extpkgs/superlu/build/
export install_dir=$HOME/.easifem/extpkgs/
```

```cmake
cmake -S . -B $build_dir \
-D CMAKE_INSTALL_PREFIX=$install_dir \
-D BUILD_SHARED_LIBS:BOOL=ON \
-D CMAKE_BUILD_TYPE=Release
```

Build step:

```cmake
cmake -B $build_dir
```

Install step

```cmake
cmake --build $build_dir --target install
```

SuperLU will be installed at `$install_dir/lib` and `$install_dir/include`
