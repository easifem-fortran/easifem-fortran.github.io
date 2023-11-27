---
title: ARPACK example 7
date: 2022-12-15
update: 2022-12-15
status: testing
docs: todo
extpkgs:
  - ARPACK
category:
  - LinearAlgebra
  - SparseMatrix
  - EigenValues
  - EigenVectors
tags:
  - easifemBase
  - extpkgs
  - matrix
  - sparse
  - eigenvectors
  - eigenvalues
  - SymSmallestEigenval
---

This is a test program for [SymSmallestEigenVal](ARPACK.md#symsmallesteigenval) routine. Eigenvalue of diffusion matrix with zero dirichlet boundary condition.

## Import modules

```fortran
program main
use easifembase
implicit none
```

## Declare variables

```fortran
  real( dfp ) :: eigenVal
  real( dfp ), allocatable :: mat(:,:)
  integer( i4b ) :: ncv
  integer(I4B) :: nx, ny, n, ii
  integer(I4B), allocatable :: dbcnptrs(:)
  real(DFP) :: inv_dx2
```

```fortran title="declare variables"
  nx = 10; ny=nx; n = nx*ny
  inv_dx2 = REAL(nx-1, kind=DFP) * REAL(nx-1, kind=DFP)
```

```fortran title="make diffusion matrix"
  mat = zeros(n,n, 1.0_DFP)
  call SetDiag(mat=mat, d=inv_dx2 * [4.0], diagNo=0)
  call SetDiag(mat=mat, d=inv_dx2 * [-1.0], diagNo=1)
  call SetDiag(mat=mat, d=inv_dx2 * [-1.0], diagNo=5)
  call GetSym(mat=mat, from="U")
```

```fortran title="apply dirichlet boundary condition"
  dbcnptrs = (arange(2, nx-1, 1) .APPEND. arange(n-nx+2, n-1, 1)) &
    & .APPEND. &
    & (arange(1, nx*ny, nx ) .APPEND. arange(nx, nx*(ny-1)+1, nx))
```

```fortran title="applying dirichlet boundary condition"
  mat(:, dbcnptrs) = 0.0_DFP
  mat(dbcnptrs, :) = 0.0_DFP
  do concurrent(ii=1:size(dbcnptrs))
    mat(dbcnptrs(ii), dbcnptrs(ii)) = 1.0_DFP
  end do
```

```fortran title="Calculate ABSOLUTE smallest eigenvalue"
  eigenVal = SymSmallestEigenVal(mat=mat, which="SM")
  call Display(eigenVal, "eigenVal, SM =")
```

eigenVal=1.0

```fortran title="Calculate ALGEBRAIC smallest eigenvalue"
  eigenVal = SymSmallestEigenVal(mat=mat, which="SA")
  call Display(eigenVal, "eigenVal, SA =")
```

eigenVal=1.0

```fortran
end program main
```
