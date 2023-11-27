---
title: Lapack95 example 8
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
  - SymGetCholesky
---

This example shows the use of `SymGetCholesky` method defined in Lapack95.

```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: LU(:, :), A(:,:), exactL(:,:)
real(dfp) :: error
integer(i4b) :: info
character(len=1) :: uplo

allocate(LU(3,3), A(3,3),  exactL(3,3))
A(1, :) = [6, 15, 55]
A(2, :) = [15, 55, 225]
A(3, :) = [55, 225, 979]

exactL(:,1) = [2.45, 6.12, 22.45]
exactL(:,2) = [0.0, 4.18, 20.92]
exactL(:,3) = [0.0, 0.0, 6.11]

uplo = "L"

CALL SymGetCholesky(A=A, LU=LU, UPLO=uplo, info=info)

CALL Display( A, "A = " )
CALL Display( exactL, "exact L = " )
CALL Display( LU, "L = " )
CALL Display( info, "info = " )

CALL Display(MATMUL(LU, TRANSPOSE(LU)), "A = ")

end program main
```

A matrix is given by

```txt
           A =
-------------------------
  6.000   15.000   55.000
 15.000   55.000  225.000
 55.000  225.000  979.000
```

Exact L is given by:

```txt
        exact L =
-------------------------
 2.4500   0.0000   0.0000
 6.1200   4.1800   0.0000
22.4500  20.9200   6.1100
```

Computed L  $\tilde{L}$ is given below.

```txt
           L =
-------------------------
 2.4495   0.0000   0.0000
 6.1237   4.1833   0.0000
22.4537  20.9165   6.1101
```

We can see that

$$
A = U^{T} \cdot U
$$

```txt
          A =
-------------------------
  6.000   15.000   55.000
 15.000   55.000  225.000
 55.000  225.000  979.000
```

If you want to calculate exact D from computed D, please call `LAPMT` routine and pass the `ipiv` returned by the routine.
