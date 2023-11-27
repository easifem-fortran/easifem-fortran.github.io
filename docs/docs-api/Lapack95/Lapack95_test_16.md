---
title: Lapack95 example 16
date: 2022-12-22
update: 2022-12-22
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
  - SymGetLDL
---

This example shows the use of `SymGetLDL` method defined in Lapack95.

```fortran
program main
  use easifemBase
  implicit none
  real(dfp), allocatable :: A(:,:), E(:), D(:), DD(:,:)
  real(dfp) :: error
  integer(i4b), allocatable :: ipiv(:)
  integer(i4b) :: info, n
  character(len=1) :: uplo
```

```fortran
  n = 10
  allocate(A(n,n), D(n), E(n), ipiv(n))
```

```fortran
  CALL random_number(A)
  A = A * 10
  A = SYM(A)
```

```fortran
  uplo = "L"

  CALL SymGetLDL(A=A, D=D, E=E, UPLO=uplo, IPIV=ipiv, INFO=info)

  IF( info .NE. 0 ) THEN
    CALL Display( "Error in SymGetLDL" )
    STOP
  ELSE
    CALL Display( "Success in SymGetLDL " )
  END IF

  !CALL Display( D, "D = " )
  !CALL Display( E, "E = " )
  !CALL Display( A, "LU = " )
  !CALL Display( ipiv, "permutation = " )

  error = MAXVAL(ABS(A - MATMUL(MATMUL(A, Tridiag(d=D, da=E, db=E)), TRANSPOSE(A))))
  CALL Display( error, msg="error = " )
  CALL OK( SOFTEQ(error, zero, REAL(1.0E-10, DFP) ), " " )

end program main
```
