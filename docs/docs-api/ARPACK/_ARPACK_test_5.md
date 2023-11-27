Eigenvalue of diffusion matrix with zero dirichlet boundary condition.

We compute first five largest eigenvalues.

## Import modules

```fortran
program main
use easifembase
implicit none
```

## Declare variables

```fortran
  integer( i4b ) :: nev
  real( dfp ), allocatable :: mat(:,:), eigenVal(:)
  integer( i4b ) :: ncv
  integer(I4B) :: nx, ny, n, ii
  integer(I4B), allocatable :: dbcnptrs(:)
  real(DFP) :: inv_dx2
```

```fortran title="declare variables"
  nev = 5; nx = 10; ny=nx; n = nx*ny
  inv_dx2 = 1.0 !REAL(nx-1, kind=DFP) * REAL(nx-1, kind=DFP)
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

```fortran title="Calculate absolute largest eigenvalue"
  eigenVal = SymLargestEigenVal(mat=mat, which="LM", nev=nev)
  call Display(eigenVal, "maxEV=")
```

```txt title="results"
 maxEV=
-------
6.76627
7.02163
7.23306
7.39074
7.48797
```

```fortran
end program main
```
