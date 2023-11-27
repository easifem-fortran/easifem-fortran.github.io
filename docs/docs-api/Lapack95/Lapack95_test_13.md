---
title: Lapack95 example 13
date: 2022-12-20
update: 2022-12-20
status: none
docs: none
extpkgs: none
category:
  - Examples
  - Lapack95
  - Matrix
tags:
  - Examples
  - Lapack95
  - matrix
  - SymGetLU
  - SymGetInv
---

This example shows the use of `SymGetLU`  and `SymGetInv` method defined in Lapack95.

- We get LU decomposition of A in LU.
- We get inverse in invA
- uplo = "U"

```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: LU(:, :), A(:,:), invA(:, :)
integer(i4b) :: info
integer(i4b), allocatable :: ipiv(:)
character(len=1) :: uplo

allocate(LU(3,3), A(3,3),  invA(3,3), ipiv(3))
A(1, :) = [6, 15, 55]
A(2, :) = [15, 55, 225]
A(3, :) = [55, 225, 979]

CALL Display( A, "A = " )

uplo = "U"

CALL SymGetLU(A=A, LU=LU, UPLO=uplo, IPIV=ipiv, INFO=info)
CALL Display( info, "info from GETLU= " )

CALL SymGetInv(A=LU, invA=invA, IPIV=ipiv, UPLO=uplo, INFO=info)

CALL Display( info, "info from  SymGetInv = " )

CALL Display( MATMUL(A, Sym(invA, UPLO) ), " I = " )
end program main
```
