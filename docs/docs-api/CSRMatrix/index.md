---
sidebar_position: 1
date: 2022-12-04
update: 2022-12-04
status: stable
docs: partial
extpkgs:
  - Sparsekit
category:
  - LinearAlgebra
  - Matrix
  - SparseMatrix
tags:
  - matrix
  - easifemBase
  - extpkgs
  - linearAlgebra
  - sparseMatrix
---

# CSRMatrix

`CSRMatrix` is defined to handle Compressed Sparse Row matrix. 

Currently following modules are defined.

- `CSRMatrix_ConstructorMethods` 
- `CSRMatrix_IOMethods` 
- `CSRMatrix_SparsityMethods` 
- `CSRMatrix_SetMethods` 
- `CSRMatrix_AddMethods` 
- `CSRMatrix_SetRowMethods` 
- `CSRMatrix_SetColMethods` 
- `CSRMatrix_SetBlockRowMethods` 
- `CSRMatrix_SetBlockColMethods` 
- `CSRMatrix_GetMethods` 
- `CSRMatrix_GetRowMethods` 
- `CSRMatrix_GetColMethods` 
- `CSRMatrix_GetSubMatrixMethods` 
- `CSRMatrix_GetBlockRowMethods` 
- `CSRMatrix_GetBlockColMethods` 
- `CSRMatrix_UnaryMethods` 
- `CSRMatrix_ILUMethods` 
- `CSRMatrix_LUSolveMethods` 
- `CSRMatrix_MatVecMethods` 
- `CSRMatrix_MatmulMethods` 
- `CSRMatrix_ReorderingMethods` 
- `CSRMatrix_DiagonalScalingMethods` 
- `CSRMatrix_MatrixMarketIO` 
- `CSRMatrix_Superlu` 
- `CSRMatrix_SpectralMethods` 
- `CSRMatrix_SchurMethods` 
- `CSRMatrix_DBCMethods` 
- `CSRMatrix_LinSolveMethods`

## Constructor methods 

| subroutine | description | status |
| --- | --- | --- | 
| Initiate | Initiate instance of CSRMatrix | done | 
| Shape | Returns shape of the matrix | done | 
| Size | Returns size of matrix | done | 
| TotalDimension | Returns the total dimension | done | 
| GetNNZ | Returns total number of non zeros | done | 
| Allocate | Allocate memory for sparse matrix | done | 
| Deallocate | Deallocate the data stored in CSRMatrix | done | 
| CSRMatrixAPLSB | Add two csr matrix | done | 
| CSRMatrixAPLSBSorted | Add two csr matrix | done | 


## Unary Methods 

Following subroutines are planned to include in this module

| subroutine  | description  | status | 
|---|---| --- | 
| `Scal` | Scale the sparse matrix | done | 
| `Convert` | Convert CSR matrix to dense matrix and vice-versa | done | 
| `ColumnSORT`  | sorts the elements in increasing order of columns | done |
| `RemoveDuplicates`  | clean up the CSR format matrix, remove duplicate entry, etc | done |
| `Clean` | This routine performs tasks related to the cleaning of sparse matrix. | done |
| `Copy` | copy of a matrix into another matrix (both stored csr)    | done |
| `Get` | returns `a(i,j)` for any `(i,j)` from a CSR-stored matrix. | done | 
| `DropEntry` | This routine removes any elements whose absolute value is small from an input matrix A and puts the resulting matrix in B. | done |
| `GetTranspose` | in-place transposition routine | done | 
| `GetDiagonal` | extracts a specified diagonal from a matrix. | done |
| `GetLowerTriangle`   | extracts lower triangular part | done | 
| `GetUpperTriangle`   | extracts upper triangular part | done | 
| `GetSym`   | Get the symmetric matrix from CSR matrix | done | 
| `PermuteRow`  | permutes the rows of a matrix (B = P A) |  done | 
| `PermuteColumn`  | permutes the columns of a matrix (B = A Q) | done | 
| `Permute`  | permutes both the rows and columns of a matrix (B = P A Q ) | done | 
| `DVPERM` | permutes a real vector (in-place)                           | todo | 
| `IVPERM` | permutes an integer vector (in-place)                       | todo | 
| `FILTER` | filters elements from a matrix according to their magnitude | todo | 
| `LEVELS` | gets the level scheduling structure for lower triangular matrices | todo | 
| `AMASK`  | extracts C = A mask M | todo | 
| `RETMX`  | returns the max absolute value in each row of the matrix    | todo | 
| `DIAPOS` | returns the positions of the diagonal elements in A.        | todo | 
| `EXTBDG` | extracts the main diagonal blocks of a matrix.              | todo | 
| `GETBWD` | returns the bandwidth information on a matrix.              | todo |
| `BLKFND` | finds the block-size of a matrix.                           | todo |
| `BLKCHK` | checks whether a given integer is the block size of A.      | todo |
| `INFDIA` | obtains information on the diagonals of A.                  | todo |
| `AMUBDG` | gets number of nonzeros in each row of A*B (as well as NNZ) | todo |
| `APLBDG` | gets number of nonzeros in each row of A+B (as well as NNZ) | todo |
| `RNRMS`  | computes the norms of the rows of A                         | todo |
| `CNRMS`  | computes the norms of the columns of A                      | todo |
| `ROSCAL` | scales the rows of a matrix by their norms.                 | todo |
| `COSCAL` | scales the columns of a matrix by their norms.              | todo |
| `ADDBLK` | Adds a matrix B into a block of A.                          | todo |
| `GET1UP` | Collects the first elements of each row of the upper triangular portion of the matrix | todo |
| `XTROWS` | extracts given rows from a matrix in CSR format.            | todo |
| `CSRKVSTR`|  Finds block row partitioning of matrix in CSR format      | todo | 
| `CSRKVSTC`|  Finds block column partitioning of matrix in CSR format   | todo | 
| `KVSTMERGE`| Merges block partitionings, for conformal row/col pattern | todo |


## All methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
