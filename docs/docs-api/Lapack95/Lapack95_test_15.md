---
title: Lapack95 example 15
date: 2022-12-18
update: 2022-12-18
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
  real(dfp), allocatable :: LU(:, :), A(:,:), E(:), D(:), DD(:,:)
  real(dfp) :: error
  integer(i4b), allocatable :: ipiv(:)
  integer(i4b) :: info, n
  character(len=1) :: uplo
```

```fortran
  n = 10
  allocate(LU(n,n), A(n,n), D(n), E(n), ipiv(n))
```

```comment
  CALL random_number(A)
  A = A * 10
  A = SYM(A)
```

```fortran
A = RESHAPE( &
    &[3.71, 2.18, 1.75, 4.93, 1.77, 8.82, 3.01, 8.06, 1.19, 2.87, &
    & 2.18, 5.26, 0.68, 7.23, 4.78, 2.99, 2.75, 9.47, 2.4 , 2.43, &
    & 1.75, 0.68, 4.4 , 2.46, 8.68, 8.71, 2.31, 3.77, 9.18, 2.04, &
    & 4.93, 7.23, 2.46, 8.22, 4.45, 3.58, 9.73, 2.68, 6.14, 4.2 , &
    & 1.77, 4.78, 8.68, 4.45, 2.85, 4.51, 7.61, 6.66, 2.71, 7.44, &
    & 8.82, 2.99, 8.71, 3.58, 4.51, 7.68, 2.5 , 7.  , 5.91, 8.46, &
    & 3.01, 2.75, 2.31, 9.73, 7.61, 2.5 , 6.99, 1.42, 0.89, 1.41, &
    & 8.06, 9.47, 3.77, 2.68, 6.66, 7.  , 1.42, 4.65, 7.12, 6.34, &
    & 1.19, 2.4 , 9.18, 6.14, 2.71, 5.91, 0.89, 7.12, 2.36, 1.06, &
    & 2.87, 2.43, 2.04, 4.2 , 7.44, 8.46, 1.41, 6.34, 1.06, 8.48  &
    & ], &
    [10,10] &
)

!CALL Display(A, "A = ")
```

```fortran
  uplo = "L"

  CALL SymGetLDL(A=A, LU=LU, D=D, E=E, UPLO=uplo, IPIV=ipiv, INFO=info)

  IF( info .NE. 0 ) THEN
    CALL Display( "Error in SymGetLDL error code = " // tostring(info)  )
    STOP
  ELSE
    CALL Display( "Success in SymGetLDL " )
  END IF

  !CALL Display( D, "D = " )
  !CALL Display( E, "E = " )
  !CALL Display( LU, "LU = " )
  !CALL Display( ipiv, "permutation = " )

  error = MAXVAL(ABS(A - MATMUL(MATMUL( LU, Tridiag(d, e, e) ), TRANSPOSE(LU))))
  CALL OK( SOFTEQ(error, zero, REAL(1.0E-10, DFP) ), " " )

end program main
```
