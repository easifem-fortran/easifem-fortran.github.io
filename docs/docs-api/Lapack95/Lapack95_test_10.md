---
title: Lapack95 example 10
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
  - SymLUSolve
---

This example shows the use of `SymGetLU`  and `SymLUSolve` method defined in Lapack95.

- We get LU decomposition of A in LU.
- In this example there is only one rhs
- The result is obtained in rhs
- uplo = "U"

```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: LU(:, :), A(:,:), RHS(:), xexact( : )
real(dfp) :: error
integer(i4b) :: info
integer(i4b), allocatable :: ipiv(:)
character(len=1) :: uplo

allocate(LU(3,3), A(3,3),  RHS(3), xexact(3), ipiv(3))
A(1, :) = [6, 15, 55]
A(2, :) = [15, 55, 225]
A(3, :) = [55, 225, 979]
CALL RANDOM_NUMBER(xexact)
xexact = xexact * 10.0
RHS = MATMUL( A, xexact )

CALL Display( A, "A = " )
CALL Display( xexact, "xexact = " )
CALL Display( RHS, "RHS = " )

uplo = "U"

CALL SymGetLU(A=A, LU=LU, UPLO=uplo, IPIV=ipiv, INFO=info)
CALL Display( info, "info from GETLU= " )

CALL SymLUSolve(A=LU, B=RHS, IPIV=ipiv, UPLO=uplo, INFO=info)

CALL Display( RHS, " X = " )
CALL Display( info, "info from LUSOLVE = " )
CALL Display(MAXVAL(ABS(RHS - xexact ) ), "Error = ")

end program main
```
