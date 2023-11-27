---
title: Lapack95 example 1
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
---

This example shows the use of `SYTRF` and `SYCONV` method defined in Lapack95.

```fortran
program main
use easifemBase
implicit none
```

```fortran title="declare variables"
real(dfp), allocatable :: mat(:, :), mat0(:,:), D(:)
integer(i4b), allocatable :: ipiv(:)
integer(i4b) :: info, n
character(len=1) :: uplo
```

```fortran title="make matrix"
allocate(mat(3,3), mat0(3,3), ipiv(3))
mat0(1, :) = [2, -1, 3]
mat0(2, :) = [0, 2, 0]
mat0(3, :) = [0, 0, 1]
CALL Display(mat0, "mat0 = ")
```

Test with minimum arguments.

```fortran title="test-1"
uplo = "U"
mat = mat0
CALL SYTRF(A=mat, UPLO=uplo)
CALL Display(mat, "lu from sytrf = ")
```

```txt title="results"
            mat =
----------------------------
-5.00000   1.00000   1.50000
 0.00000   1.50000  -0.50000
 0.00000   0.00000   2.00000
```

Test with extra arguments `ipiv` and `info`

```fortran title="test-2"
mat = mat0
CALL SYTRF(A=mat, UPLO=uplo, IPIV=ipiv, info=info)
CALL Display( mat, "mat = " )
CALL Display( ipiv, "ipiv = " )
CALL Display( info, "info = " )
```

```txt title="results"
mat =
----------------------------
-5.00000   1.00000   1.50000
 0.00000   1.50000  -0.50000
 0.00000   0.00000   2.00000
ipiv =
-------
   1
   2
   1
info = 0
```

Using  `ipiv` in `SYCONV` to get `LDL` factorization

```fortran title="conversion to ldl"
n = SIZE(mat, 1)
CALL Reallocate(D, n)

CALL LA_SYCONV( &
  & UPLO=uplo, WAY="C", N=n, A=mat, &
  & LDA=n, IPIV=ipiv, E=D, INFO=info )

CALL Display( mat, "U = " )
CALL Display( D, "D = " )
CALL Display( info, "info = " )
```

```txt title="results"
mat =
----------------------------
-5.00000   1.00000   1.50000
 0.00000   1.50000  -0.50000
 0.00000   0.00000   2.00000

ipiv =
-------
   1
   2
   1

info = 0
```

```fortran title="cleanup"
end program main
```
