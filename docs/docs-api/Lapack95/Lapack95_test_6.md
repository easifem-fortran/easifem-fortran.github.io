---
title: Lapack95 example 6
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
  - SymGetLDL
---

This example shows the use of `SymGetLDL` method defined in Lapack95.

```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: A(:,:), E(:), D(:), exactL(:,:), exactD(:)
real(dfp) :: error
integer(i4b), allocatable :: ipiv(:)
integer(i4b) :: info
character(len=1) :: uplo

allocate(A(3,3), D(3), E(3), ipiv(3), exactD(3), exactL(3,3))
A(1, :) = [2, -1, 3]
A(2, :) = [-1, 2, 0]
A(3, :) = [3, 0, 1]
CALL Display( A, "A = " )

exactL(:,1) = [1., -0.5, 1.5]
exactL(:,2) = [0., 1., 1.]
exactL(:,3) = [0., 0., 1.]
exactD = [2., 1.5, -5.0]

uplo = "L"

CALL SymGetLDL(A=A, D=D, E=E, UPLO=uplo, IPIV=ipiv, info=info)

CALL Display( exactL, "exact L = " )
CALL Display( exactD, "exact D = " )
CALL Display( A, "L, permuted = " )
CALL Display( D, "D, permuted = " )
CALL Display( E, "E, permuted " )
CALL Display( ipiv, "permutation = " )
CALL Display( info, "info = " )

CALL Display(MATMUL( MATMUL(A, Diag(D) ), TRANSPOSE(A)), &
  & "A = ")

end program main
```

A matrix is given by

```txt
            A =
----------------------------
 2.00000  -1.00000   3.00000
-1.00000   2.00000   0.00000
 3.00000   0.00000   1.00000
```

exact L is given by:

```txt
         exact L =
----------------------------
 1.00000   0.00000   0.00000
-0.50000   1.00000   0.00000
 1.50000   1.00000   1.00000
```

Computed L  $\tilde{L}$ is given below.

```txt
       L, permuted =
----------------------------
 1.00000   0.00000   0.00000
-0.50000   1.00000   0.00000
 1.50000   1.00000   1.00000
```

No permutation is performed in this case.

exact D is given by:

```txt
exact D =
----------
  2.00000
  1.50000
 -5.00000
```

Computed D, $\tilde{D}$ is given below:

```txt
D, permuted =
--------------
    2.00000
    1.50000
   -5.00000
```

The permutation is given by

```txt
permutation =
--------------
      1
      2
      3
```

In this case, if we perform

$$
\tilde{L} \cdot \tilde{D} \cdot \tilde{L}^{T}
$$

We get

$$
L \cdot D \cdot L^{T}
$$

```txt
            A =
----------------------------
 2.00000  -1.00000   3.00000
-1.00000   2.00000   0.00000
 3.00000   0.00000   1.00000
```

If you want to calculate exact D from computed D, please call `LAPMT` routine and pass the `ipiv` returned by the routine.
