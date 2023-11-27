---
title: Lapack95 example 2
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

This example shows the use of `SYTRF` method.

```fortran
program main
use easifemBase
implicit none
```

```fortran title="declare variables"
real(dfp), allocatable :: mat(:, :), mat0(:,:)
integer(i4b), allocatable :: ipiv(:)
integer(i4b) :: info
character(len=1) :: uplo
```

```fortran title="make matrix"
allocate(mat(3,3), mat0(3,3), ipiv(3))
mat0(1, :) = [2, -1, 3]
mat0(2, :) = [0, 2, 0]
mat0(3, :) = [0, 0, 1]
```

Test without extra arguments.

```fortran title="test-1"
uplo = "U"
mat = mat0
CALL SYTRF(A=mat, UPLO=uplo)
CALL Display(mat, "mat = ")
```

```txt title="results"
            mat =
----------------------------
-5.00000   1.00000   1.50000
 0.00000   1.50000  -0.50000
 0.00000   0.00000   2.00000
```

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

```fortran title="test-3"
call reallocate(mat0, 4,4)
call reallocate(ipiv, 4)

mat0 = RESHAPE( &
    & [9.56982809,  3.30527253,  7.30953613,  8.18680201, 3.30527253,   &
    & 8.38597454, 10.68872278, 10.01187194, 7.30953613, &
    & 10.68872278, 17.30316194, 14.31931041, 8.18680201, &
    & 10.01187194, 14.31931041, 14.12868642], &
    & [4,4] )

mat0 = TRANSPOSE(mat0)

mat = mat0
CALL SYTRF(A=mat, UPLO=uplo, IPIV=ipiv, info=info)
CALL Display( mat0, "mat0 = " )
CALL Display( mat, "mat = " )
CALL Display( ipiv, "ipiv = " )
CALL Display( info, "info = " )
```

```fortran title="cleanup"
end program main
```
