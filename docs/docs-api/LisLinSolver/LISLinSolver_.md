Lis (Library of Iterative Solvers for linear systems) is a parallel software library for solving discretized linear equations

$$
Ax = b
$$
and eigenvalue problems:

$$
Ax = \lambda B x
$$

## Linear solvers

- CG
- BiCG
- CGS
- BiCGSTAB
- GPBiCG
- BiCGSTAB
- Jacobi
- Gauss-Seidel
- SOR
- IDR
- COCG
- CR
- BiCR
- CRS
- BiCRSTAB
- GPBiCR
- BiCRSafe
- TFQMR
- Orthomin
- GMRES
- MINRES
- COCR

## Eigensolvers

- Power
- Inverse
- Rayleigh Quotient
- CG
- CR
- Subspace
- Lanczos
- Arnoldi

## Preconditioners

- Jacobi
- SSOR
- ILU(k)
- ILUT
- Crout ILU
- I+S
- SA-AMG
- Hybrid
- SAINV
- Additive Schwarz
- User defined

## Matrix Storage Formats

- CSR
- CSC
- MSR
- DIA
- ELL
- JAD
- BSR
- BSC
- VBR
- COO
- DNS

## Configuration

```txt
lis-($VERSION)
+ config
| configuration files
+ doc
| documents
+ graphics
| sample files for graphics
+ include
| header files
+ src
| source files
+ test
| test programs
+ win
configuration files for Windows systems
```

### Configuration for Multi thread

- `--prefix=<path to install>` location of installing the lib
- `--enable-omp` enable openmp support
- `--enable-f90` enable fortran90 interface
- `--enable-shared` enable shared library
- `TARGET=<TARGET>` optional
- `CC=<c_compiler>` specify c compiler
- `CFLAGS=<additional c flags>` specify additional cflags
- `FC=<fortran compiler>` specify fortran compiler
- `FCFLAGS=<f90 flags>` specify additional fortran compiler flags
- `LDFLAGS=<ld flags for linker>`  optional
- `--enable-saamg` optional
- `--enable-quad` optional
- `--enable-longdouble` optional
- `--enable-longlong` optional, to support `Int64`
- `--enable-complex` optional, it is necessary when we want to compute the eigenvalues of unsymmetric system
- `--enable-gprof` optional
- `--disable-test` optional
- `--enable-debug`

In easifem we have used the following configuration

```bash
./configure \
--prefix=$EASIFEM_EXTPKGS \
--enable-omp \
--enable-f90 \
--enable-shared \
--enable-saamg \
FC=gfortran-12 \
CC=gcc-12
```

Which prints following output

```bash
 Build with OpenMP library                  = yes
  Build with MPI library                     = no
  Enable FORTRAN 77 compatible interface     = yes
  Enable Fortran 90 compatible interface     = yes
  Enable SA-AMG preconditioner               = yes
  Enable double-double precision support     = no
  Enable long double precision support       = no
  Enable 64bit integer support               = no
  Enable complex scalar support              = yes
  Enable dynamic linking                     = yes
  Enable profiling                           = no

  C compiler        = gcc-12
  C flags           = -O3 -fomit-frame-pointer  -fopenmp -D_COMPLEX -DHAVE_CONFIG_H
  C libraries       = -lm
  F77 compiler      = gfortran-12
  F77 flags         = -O3 -fomit-frame-pointer  -fopenmp -DCOMPLEX
  F77 libraries     =  -L/usr/lib/gcc/x86_64-linux-gnu/12 -L/usr/lib/gcc/x86_64-linux-gnu/12/../../../x86_64-linux-gnu -L/usr/lib/gcc/x86_64-linux-gnu/12/../../../../lib -L/lib/x86_64-linux-gnu -L/lib/../lib -L/usr/lib/x86_64-linux-gnu -L/usr/lib/../lib -L/usr/lib/gcc/x86_64-linux-gnu/12/../../.. -lgfortran -lm -lquadmath
  F90 compiler      = gfortran-12
  F90 flags         = -O3 -fomit-frame-pointer  -Wp,-DZERO_ORIGIN=1 -fopenmp -DCOMPLEX
  F90 libraries     =
```

### Configuration for MPI

- `--prefix=<path to install>`
- `--enable-mpi`
- `--enable-f90`
- `--enable-shared`
- `TARGET=<TARGET>`
- `CC=<c_compiler>`
- `CFLAGS=<additional c flags>`
- `FC=<fortran compiler>`
- `FCFLAGS=<f90 flags>`
- `F77=<f77 compiler>`
- `F77FLAGS=<f77 compiler flags>`
- `LDFLAGS=<ld flags for linker>`
- `--enable-saamg` optional
- `--enable-quad` optional
- `--enable-longdouble` optional
- `--enable-longlong` optional, to support `Int64`
- `--enable-complex` optional
- `--enable-gprof` optional
- `--disable-test` optional

NOTE: Options `--enable-omp` and `--enable-mpi` can be combined.

## Compile

After configuration compile the code by using make command .

```bash
make
make check
```

## Install

After compilation we install the library by using make install command.

```bash
make install
```

which copies the files to the destination directory as follows:

```txt
($INSTALLDIR)
+bin
|
 +lsolve esolve esolver gesolve gesolver hpcg_kernel hpcg_spmvtest spmvtest*
+include
|
 +lis_config.h lis.h lisf.h
+lib
|
 +liblis.a
+share
+doc/lis examples/lis man
```

- `lis_config.h` is the header file required to build the library
- `lis.h` and `lisf.h` are the header files required by the C and Fortran compilers, respectively.
- `liblis.a` is the library.

To ensure that the library has been installed successfully, enter

```bash
make installcheck
```

## Cleaning

To remove the copied files in installed directory, enter

```bash
> make uninstall
```

To remove the generated library and executable files in source directory, enter

```bash
> make clean
```

To remove the configuration files in addition to the other generated files, enter

```bash
> make distclean
```

## Limitations

The current version has the following limitations:

### Matrix storage formats

- The VBR format does not support the multiprocessing environment.
- The SA-AMG preconditioner supports only the CSR format.
- In the multiprocessing environment, the CSR is the only accepted format for user defined
arrays.

### Double-double (quadruple) precision operations

- The Jacobi, Gauss-Seidel, SOR, IDR(s), COCG, and COCR methods do not support the double-double precision operations.
- The eigensolvers do not support the double-double precision operations.
- The Jacobi, Gauss-Seidel and SOR methods in the hybrid preconditioner do not support the double-double precision operations.
- The I+S and SA-AMG preconditioners do not support the double-double precision operations.
- The double-double precision operations does not support complex arithmetic.
- The double-double precision operations cannot be combined with the long-double precision operations.

### Preconditioners

- The algorithm of the ILU(k) preconditioner is based on the localized ILU preconditioning[38], which factorizes the block diagonal elements in parallel. Note that the convergence behavior approaches to that of the Jacobi preconditioner as the number of threads or processes increases.
- If a preconditioner other than the Jacobi or SSOR is selected and matrix A is not in the CSR
format, a new matrix is created in the CSR format for preconditioning.
- The SA-AMG preconditioner does not support the BiCG method for unsymmetric matrices.
- The SA-AMG preconditioner does not support multithreading.
- The SA-AMG preconditioner does not support complex arithmetic.
- The assembly of the matrices in the SAINV preconditioner is not parallelized.
- The user defined preconditioner cannot be used.

### Eigensolvers

- To compute complex eigenvalues, complex arithmetic must be enabled.
- Therefore, when computing eigenvalues of unsymmetric matrices, complex arithmetic must always be enabled.

## Basic steps

We need following steps:

- Initialization
- Matrix creation
- Vector creation
- Solver creation
- Value assignment for matrices and vectors
- Solver assignment
- Solver execution
- Finalization

We also need to include

```
#include "lisf.h"
```

which is located in include directory of install path.

## Vector

```fortran
PROGRAM main
! USE easifemBase
#include "lisf.h"

INTEGER :: ierr
LIS_INTEGER :: i, n
LIS_VECTOR :: v

n = 4
CALL lis_initialize(ierr)

CALL lis_vector_create(0, v, ierr)
CALL lis_vector_set_size(v, 0, n, ierr)

DO i = 1, n
  CALL lis_vector_set_value(LIS_INS_VALUE, i, DBLE(i), v, ierr)
END DO

CALL lis_vector_destroy(v, ierr)

CALL lis_finalize(ierr)
END PROGRAM main
```

## Matrix

```fortran
PROGRAM main
USE easifemBase
#include "lisf.h"

INTEGER :: ierr
LIS_INTEGER :: i, n
LIS_MATRIX :: A

n = 4
CALL lis_initialize(ierr)

CALL lis_matrix_create(0, A, ierr)
CALL lis_matrix_set_size(A, 0, n, ierr)

DO i = 1, n
  IF (i .GT. 1) THEN
    CALL lis_matrix_set_value(LIS_INS_VALUE, i, i - 1, 1.0_DFP, A, ierr)
  END IF

  IF (i .LT. n) THEN
    CALL lis_matrix_set_value(LIS_INS_VALUE, i, i + 1, 1.0_DFP, A, ierr)
  END IF

  CALL lis_matrix_set_value(LIS_INS_VALUE, i, i, 2.0_DFP, A, ierr)
END DO

CALL lis_matrix_set_type(A, LIS_MATRIX_CSR, ierr)
CALL lis_matrix_assemble(A, ierr)

CALL lis_matrix_destroy(A, ierr)

CALL lis_finalize(ierr)
END PROGRAM main
```

## Setting CSR matrix

Note that index of `IA` and `JA` should start from 0.

```fortran
PROGRAM main
USE easifemBase
#include "lisf.h"

CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/matrixMarket/e40r0000.mtx"
CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/matrixMarket/e40r0000_rhs1.mtx"
INTEGER :: ierr
LIS_MATRIX :: A
TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: rhs(:)
REAL(DFP), ALLOCATABLE :: sol(:)
INTEGER(I4B), ALLOCATABLE :: ia(:)
INTEGER(I4B), ALLOCATABLE :: ja(:)
INTEGER(I4B) :: n
INTEGER(I4B) :: m
INTEGER(I4B) :: nnz
INTEGER(I4B) :: ii
INTEGER(I4B) :: unitno
CHARACTER(1024) :: astr

OPEN (NEWUNIT=unitno, file=rhs_name, action="READ", status="OLD")
READ (unitno, *) astr
READ (unitno, *) n, m
CALL Reallocate(rhs, n)
DO ii = 1, n
  READ (unitno, *) rhs(ii)
END DO
CLOSE (unitno)

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)

n = SIZE(csrmat, 1)
m = SIZE(csrmat, 2)
nnz = GetNNZ(csrmat)
CALL Display(n, "nrow = ")
CALL Display(m, "ncol = ")
CALL Display(nnz, "nnz = ")

CALL Reallocate(sol, n)

! lis

CALL lis_initialize(ierr)

ia = csrmat%csr%ia - 1
ja = csrmat%csr%ja - 1

CALL lis_matrix_create(0, A, ierr)
CALL lis_matrix_set_size(A, 0, n, ierr)
CALL lis_matrix_set_csr(nnz, ia, ja, csrmat%a, A, ierr)
CALL lis_matrix_assemble(A, ierr)

CALL lis_matrix_destroy(A, ierr)
CALL lis_finalize(ierr)
END PROGRAM main
```

## Solving equations

Following steps should be followed to solve a system of linear equations:

- Create a solver

```fortran
CALL lis_solver_create(solver, ierr)
```

- Set options of the solver

```fortran
str = "-i bicg -p none -tol 1.0e-12 -maxiter 1000"
CALL lis_solver_set_option(str, solver, ierr)
```

- After setting the option, we can solve $Ax=b$ by using

```fortran
CALL lis_solve(A, b, x, solver, ierr)
```

Example

```fortran
PROGRAM main
USE easifemBase
#include "lisf.h"

CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/matrixMarket/small5.mtx"
CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/matrixMarket/small5_rhs.mtx"

! CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/matrixMarket/e40r0000.mtx"
! CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/matrixMarket/e40r0000_rhs1.mtx"
INTEGER :: ierr
LIS_MATRIX :: A_
LIS_VECTOR :: rhs_, sol_
LIS_SOLVER :: solver
TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: rhs(:)
REAL(DFP), ALLOCATABLE :: sol(:)
INTEGER(I4B), ALLOCATABLE :: ia(:)
INTEGER(I4B), ALLOCATABLE :: ja(:)
REAL(DFP), ALLOCATABLE :: a(:)
INTEGER(I4B) :: n
INTEGER(I4B) :: m
INTEGER(I4B) :: nnz
INTEGER(I4B) :: ii
INTEGER(I4B) :: unitno
CHARACTER(1024) :: astr

OPEN (NEWUNIT=unitno, file=rhs_name, action="READ", status="OLD")
READ (unitno, *) astr
READ (unitno, *) n, m
CALL Display(n, "n = ")
CALL Reallocate(rhs, n)
DO ii = 1, n
  READ (unitno, *) rhs(ii)
END DO
CLOSE (unitno)

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)

n = SIZE(csrmat, 1)
m = SIZE(csrmat, 2)
nnz = GetNNZ(csrmat)
CALL Display(n, "nrow = ")
CALL Display(m, "ncol = ")
CALL Display(nnz, "nnz = ")

CALL Reallocate(sol, n)

! lis

CALL lis_initialize(ierr)

ia = csrmat%csr%ia - 1
ja = csrmat%csr%ja - 1

CALL lis_matrix_create(0, A_, ierr)
CALL lis_matrix_set_size(A_, 0, n, ierr)
CALL lis_matrix_set_csr(nnz, ia, ja, csrmat%a, A_, ierr)
CALL lis_matrix_assemble(A_, ierr)
CALL lis_matrix_set()
CALL chkerr(ierr)
CALL display("flag 1")

CALL lis_vector_create(0, sol_, ierr)
CALL lis_vector_set_size(sol_, 0, n, ierr)
CALL lis_vector_scatter(sol, sol_, ierr)

CALL lis_vector_create(0, rhs_, ierr)
CALL lis_vector_set_size(rhs_, 0, n, ierr)
CALL lis_vector_scatter(rhs, rhs_, ierr)
CALL chkerr(ierr)

CALL display("flag 2")

CALL lis_solver_create(solver, ierr)
astr = "-i gmres -p none"
CALL lis_solver_set_option(TRIM(astr), solver, ierr)
astr = "-tol 1.0e-15 -maxiter "//tostring(n)
CALL lis_solver_set_option(TRIM(astr), solver, ierr)
CALL chkerr(ierr)

CALL display("flag 3")

CALL lis_solve(A_, rhs_, sol_, solver, ierr)
CALL chkerr(ierr)

CALL display("flag 4")

CALL lis_vector_gather(sol_, sol, ierr)
CALL Display(sol(1:5), "solution = ")
CALL chkerr(ierr)

CALL display("flag 5")

CALL lis_solver_destroy(solver, ierr)
CALL lis_matrix_destroy(A_, ierr)
CALL lis_vector_destroy(rhs_, ierr)
CALL lis_vector_destroy(sol_, ierr)
CALL lis_finalize(ierr)
END PROGRAM main
```

## Precondition Solver Decoupled Manner

We have mentioned how to solve linear equation above. However, in this method, every time we solve the system, preconditioner is updated. This is helpful when we are solving the nonlinear problem, as the global tangent matrix changes.

## Solving eigenvalue problem
