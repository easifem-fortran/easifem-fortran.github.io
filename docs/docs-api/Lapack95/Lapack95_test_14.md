---
title: Lapack95 example 14
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
  - SymSolve
---

This example shows the use of `SymSolve` method defined in Lapack95.

- We preserve A, when passing to symSolve
- In this example there is only one rhs
- The result is obtained in x, not in rhs
- uplo = "U"

```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: A(:,:), RHS(:), X(:), xexact( : )
real(dfp) :: error
integer(i4b) :: info
integer(i4b), allocatable :: ipiv(:)
character(len=1) :: uplo

allocate(A(10,10),  RHS(10), X(10), xexact(10), ipiv(10))
CALL RANDOM_NUMBER(A)
A = A * 10
A = Sym(A)
CALL RANDOM_NUMBER(xexact)
xexact = xexact * 10.0
RHS = MATMUL( A, xexact )

CALL Display( A, "A = " )
CALL Display( xexact, "xexact = " )
CALL Display( RHS, "RHS = " )

uplo = "U"

CALL SymSolve(A=A, preserveA=.TRUE., X=X, B=RHS, UPLO=uplo, IPIV=ipiv, INFO=info)

IF( info .NE. 0 ) THEN
  CALL Display( "Error occured in SymSolve, code = " // tostring(info) )
END IF

CALL Display( X, " X = " )
CALL Display( ipiv, "ipiv = ")
CALL Display(MAXVAL(ABS(X - xexact ) ), "Error = ")

end program main
```

```txt
                                          A =
----------------------------------------------------------------------------------------
9.86162  5.33004  2.28513  2.96782  4.25222  9.27302  5.47377  4.96836  3.03017  4.98111
5.33004  9.31661  3.37218  7.52843  4.26007  0.43418  4.76446  0.16881  1.81621  6.93537
2.28513  3.37218  5.14456  3.03380  4.32844  2.62773  8.32263  3.99124  5.10083  5.45799
2.96782  7.52843  3.03380  5.80883  6.38903  6.17802  5.89712  5.06155  6.03653  9.02908
4.25222  4.26007  4.32844  6.38903  8.96956  7.44208  7.50062  3.08730  5.72935  3.65661
9.27302  0.43418  2.62773  6.17802  7.44208  8.60312  2.97954  1.95409  5.36057  7.21267
5.47377  4.76446  8.32263  5.89712  7.50062  2.97954  5.17103  6.69969  4.57285  7.22960
4.96836  0.16881  3.99124  5.06155  3.08730  1.95409  6.69969  1.87655  5.12482  4.58572
3.03017  1.81621  5.10083  6.03653  5.72935  5.36057  4.57285  5.12482  5.47498  4.96055
4.98111  6.93537  5.45799  9.02908  3.65661  7.21267  7.22960  4.58572  4.96055  5.73067
```
