# Sparsekit Manual

This page provides the documentation of `iters.f`. The contents of this module are described below.

|  Routine name | Description  |
|---|---|
|     CG       | Conjugate Gradient Method                            |
|     CGNR     | Conjugate Gradient Method (Normal Residual equation) |
|     BCG      | Bi-Conjugate Gradient Method                         |
|     DBCG     | BCG with partial pivoting                            |
|     BCGSTAB  | BCG stabilized                                       |
|     TFQMR    | Transpose-Free Quasi-Minimum Residual method         |
|     FOM      | Full Orthogonalization Method                        |
|     GMRES    | Generalized Minimum RESidual method                  |
|     FGMRES   | Flexible version of Generalized Minimum              |
|              | RESidual method                                      |
|     DQGMRES  | Direct versions of Quasi Generalize Minimum Residual method |

- They are preconditioned iterative solvers with reverse communication. The preconditioners can be applied from either from left or right or both (specified by ipar(2), see below).

WORK SPACE REQUIREMENT

Work space required by each of the iterative solver routines is as follows:

```fortran
       CG      == 5 * n
       CGNR    == 5 * n
       BCG     == 7 * n
       DBCG    == 11 * n
       BCGSTAB == 8 * n
       TFQMR   == 11 * n
       FOM     == (n+3)*(m+2) + (m+1)*m/2 (m = ipar(5), default m=15)
       GMRES   == (n+3)*(m+2) + (m+1)*m/2 (m = ipar(5), default m=15)
       FGMRES  == 2*n*(m+1) + (m+1)*m/2 + 3*m + 2 (m = ipar(5),
                  default m=15)
       DQGMRES == n + lb * (2*n+4) (lb=ipar(5)+1, default lb = 16)
```

- ALL iterative solvers require a user-supplied DOT-product routine named `DISTDOT`. The prototype of `DISTDOT` is exactly the same as that of `DDOT` from `BLAS-1`. It should have same functionality as DDOT on a single processor machine.
- On a parallel/distributed environment, each processor can perform DDOT on the data it has, then perform a summation on all the partial results.

```fortran
      real*8 function distdot(n,x,ix,y,iy)
      integer n, ix, iy
      real*8 x(1+(n-1)*ix), y(1+(n-1)*iy)
```

- To use this set of routines under SPMD/MIMD program paradigm, several things are to be noted:
  - 'n' should be the number of vector elements of 'rhs' that is present on the local processor.
  - if RHS(i) is on processor j, it is expected that SOL(i) will be on the same processor, i.e. the vectors are distributed to each processor in the same way.
  - the preconditioning and stopping criteria specifications have to be the same on all processor involved, ipar and fpar have to be the same on each processor.
  - DISTDOT should be replaced by a distributed dot-product function.

REVERSE COMMUNICATION PROTOCOLS:

When a reverse-communication routine returns, it could be either that the routine has terminated or it simply requires the caller to perform one matrix-vector multiplication. The possible matrices that involve in the matrix-vector multiplications are:

- A       (the matrix of the linear system),
- A^T     (A transposed),
- Ml^{-1} (inverse of the left preconditioner),
- Ml^{-T} (inverse of the left preconditioner transposed),
- Mr^{-1} (inverse of the right preconditioner),
- Mr^{-T} (inverse of the right preconditioner transposed).

For all the matrix vector multiplication, v = A u. The input and output vectors are supposed to be part of the work space 'w', and
the starting positions of them are stored in ipar(8:9), see below.

## IPAR

The array 'ipar' is used to store the information about the solver. Here is the list of what each element represents:

### IPAR(1) : status of the call/return.

A call to the solver with ipar(1) == 0 will initialize the iterative solver. On return from the iterative solver, `ipar(1)` carries the status flag which indicates the condition of the return. The status information is divided into two categories,

- a positive value indicates the solver requires a matrix-vector multiplication. Here is the current definition:

| IPAR(1)  | MEANING  |
|---|---|
| 0 | normal termination of the solver, satisfied the stopping criteria |
| 1 | request a matvec with A |
| 2 | request a matvec with A^T |
| 3 | request a left preconditioner solve (Ml^{-1}) |
| 4 | request a left preconditioner transposed solve (Ml^{-T}) |
| 5 | request a right preconditioner solve (Mr^{-1}) |
| 6 | request a right preconditioner transposed solve (Mr^{-T}) |
| 10 | request the caller to perform stopping test |

- a non-positive (<=0) value indicates termination of the solver.

| IPAR(1)  | MEANING  |
|---|---|
| -1 | termination because iteration number is greater than the preset limit |
| -2 | return due to insufficient work space |
| -3 | return due to anticipated break-down / divide by zero |
| -4 | the values of `fpar(1)` and `fpar(2)` are both <= 0, the valid ranges are `0 <= fpar(1) < 1`, `0 <= fpar(2)`, and they can not be zero at the same time |
| -9 | while trying to detect a break-down, an abnormal number is detected |
| -10 | return due to some non-numerical reasons, e.g. invalid floating-point numbers etc |

### IPAR(2) : status of the preconditioning

| IPAR(2)  | MEANING  |
|---|---|
| 0 | no preconditioning |
| 1 | left preconditioning only |
| 2 | right preconditioning only |
| 3 | both left and right preconditioning |

### IPAR(3) : stopping criteria

The convergence test type is indicated by `IPAR(3)`. There are four type convergence tests:

- tests based on the residual norm
- tests based on change in approximate solution
- caller does not care, the solver choose one from above two on its own;
- caller will perform the test, the solver should simply continue.

Here is the complete definition:

| IPAR(3)  | Comments |
|---|---|
| -2 | NORM( dx ) <= rtol * NORM( rhs ) + atol |
| -1 | NORM( dx ) <= rtol * NORM( dx0 ) + atol |
|  0 | solver will choose test 1 (next) |
| 1 | NORM(residual) <= rtol * NORM( residual0 ) + atol |
| 2 | NORM( residual ) <= rtol * NORM( rhs ) + atol |

### IPAR(4) : Size of workspace

It denotes number of elements in the array 'w'. If this is less than the desired size, it will be over-written with the minimum requirement. In which case the status flag `ipar(1) = -2`.

### IPAR(5) : Size of workspace

size of the Krylov subspace (used by GMRES and its variants), e.g. GMRES(ipar(5)), FGMRES(ipar(5)), DQGMRES(ipar(5)).

### IPAR(6) : maxIter

Maximum number of matrix-vector multiplies, if not a positive number the iterative solver will run till convergence test is satisfied.

### IPAR(7) : current number of matrix-vector multiplies

It is incremented after each matrix-vector multiplication. If there is preconditioning, the counter is incremented after the preconditioning associated with each matrix-vector multiplication.

### IPAR(8)

pointer to the input vector to the requested matrix-vector multiplication

### IPAR(9)

pointer to the output vector of the requested matrix-vector multiplication

> To perform v = A * u, it is assumed that u is w(ipar(8):ipar(8)+n-1) and v is stored as w(ipar(9):ipar(9)+n-1).

### IPAR(10)

the return address (used to determine where to go to inside the iterative solvers after the caller has performed the requested services.

### IPAR(11)

the result of the external convergence test. On final return from the iterative solvers, this value will be reflected by ipar(1) = 0 (details discussed later)

### IPAR(12)

  error code of MGSRO, it is:

- 1 if the input vector to MGSRO is linear combination of others,
- 0 if MGSRO was successful,
- -1 if the input vector to MGSRO is zero,
- -2 if the input vector contains invalid number.

> in the case where Arnoldi procedure is used, additional error code can be found in ipar(12), where ipar(12) is the error code of orthogonalization procedure MGSRO: -1: zero input vector, -2: input vector contains abnormal numbers, -3: input vector is a linear combination of others, -4: trianguler system in GMRES/FOM/etc. has nul rank

### ipar(13)

number of initializations. During each initilization residual norm is computed directly from `M_l(b - A x)`

### ipar(14) to ipar(16)

These are NOT defined, they are NOT USED by any iterative solver at this time.

## FPAR

Information about the error and tolerance are stored in the array `FPAR`. So are some internal variables that need to be saved from
one iteration to the next one. Since the internal variables are not the same for each routine, we only define the common ones.

### FPAR( 1 )

The relative tolerance

### FPAR( 2 )

The absolute tolerance (details discussed later)

### FPAR( 3 )

initial residual/error norm

### FPAR( 4 )

target residual/error norm

### FPAR( 5 )

current residual norm (if available)

### FPAR( 6 )

current residual/error norm

### FPAR( 7 )

convergence rate

### FPAR( 8:10 )

fpar(8:10) are used by some of the iterative solvers to save some internal information.

### FPAR(11)

Number of floating-point operations. The iterative solvers will add the number of FLOPS they used to this variable, but they do NOT initialize it, nor add the number of FLOPS due to matrix-vector multiplications (since matvec is outside of the iterative solvers). To insure the correct FLOPS count, the caller should set fpar(11) = 0 before invoking the iterative solvers and account for the number of FLOPS from matrix-vector multiplications and preconditioners.

### FPAR(12:16)

These are not used in current implementation.

> Whether the content of fpar(3), fpar(4) and fpar(6) are residual norms or error norms depends on ipar(3). If the requested convergence test is based on the residual norm, they will be residual norms. If the caller want to test convergence based the error norms (estimated by the norm of the modifications applied to the approximate solution), they will be error norms. Convergence rate is defined by (Fortran 77 statement) fpar(7) = log10(fpar(3) / fpar(6)) / (ipar(7)-ipar(13)). If fpar(7) = 0.5, it means that approximately every 2 (= 1/0.5) steps the residual/error norm decrease by a factor of 10.

## Stopping criteria

An iterative solver may be terminated due to:

- satisfying convergence test
- exceeding iteration limit
- insufficient work space
- break-down.

Checking of the work space is only done in the initialization stage, i.e. when it is called with ipar(1) == 0. A complete convergence test is done after each update of the solutions. Other conditions are monitored continuously.

With regard to the number of iteration, when ipar(6) is positive, the current iteration number will be checked against it. If current iteration number is greater the ipar(6) than the solver will return with status -1. If ipar(6) is not positive, then iteration will continue until convergence test is satisfied.

Two things may be used in the convergence tests, one is the residual 2-norm, the other one is 2-norm of the change in the approximate solution. The residual and the change in approximate solution are from the preconditioned system (if preconditioning is applied). The `DQGMRES` and `TFQMR` use two estimates for the residual norms. The estimates are not accurate, but they are acceptable in most of the cases. Generally speaking, the error of the `TFQMR`'s estimate is less accurate.

The convergence test type is indicated by `ipar(3)`. There are four type convergence tests:

- tests based on the residual norm
- tests based on change in approximate solution
- caller does not care, the solver choose one from above two on its own;
- caller will perform the test, the solver should simply continue.

Here is the complete definition:

| IPAR(3)  | Comments |
|---|---|
| -2 | NORM( dx ) <= rtol * NORM( rhs ) + atol |
| -1 | NORM( dx ) <= rtol * NORM( dx0 ) + atol |
|  0 | solver will choose test 1 (next) |
| 1 | NORM(residual) <= rtol * NORM( residual0 ) + atol |
| 2 | NORM( residual ) <= rtol * NORM( rhs ) + atol |

Where, rtol = fpar(1) and atol = fpar(2).

If the caller is to perform the convergence test, the outcome should be stored in `ipar(11)`.

- `ipar(11) = 0`, failed the convergence test, iterative solver should continue
- `ipar(11) = 1` satisfied convergence test, iterative solver should perform the clean up job and stop.

Upon return with ipar(1) = 10,

- `ipar(8)`  points to the starting position of the change in solution Sx, where the actual solution of the step is `x_j = x_0 + M_r^{-1} Sx`.
- Exception: `ipar(8)` < 0, Sx = 0. It is mostly used by GMRES and variants to indicate (1) Sx was not necessary, (2) intermediate result of Sx is not computed.
- ipar(9)  points to the starting position of a work vector that can be used by the caller.

> The caller should allow the iterative solver to perform clean up job after the external convergence test is satisfied, since some of the iterative solvers do not directly update the 'sol' array. A typical clean-up stage includes performing the final update of the approximate solution and computing the convergence information (e.g. values of fpar(3:7)).
> `fpar(4)` and `fpar(6)` are not set by the accelerators (the routines implemented here) if `ipar(3) = 999`.

## Usage

To start solving a linear system, the user needs to specify first 6 elements of the ipar, and first 2 elements of fpar. The user may optionally set fpar(11) = 0 if one wants to count the number of floating-point operations. (Note: the iterative solvers will only add the floating-point operations inside themselves, the caller will have to add the FLOPS from the matrix-vector multiplication routines and the preconditioning routines in order to account for all the arithmetic operations.)

Here is an example:

- ipar(1) = 0	! always 0 to start an iterative solver
- ipar(2) = 2	! right preconditioning
- ipar(3) = 1	! use convergence test scheme 1
- ipar(4) = 10000	! the 'w' has 10,000 elements
- ipar(5) = 10	! use *GMRES(10) (e.g. FGMRES(10))
- ipar(6) = 100	! use at most 100 matvec's
- fpar(1) = 1.0E-6	! relative tolerance 1.0E-6
- fpar(2) = 1.0E-10 ! absolute tolerance 1.0E-10
- fpar(11) = 0.0	! clearing the FLOPS counter

After the above specifications, one can start to call an iterative solver, say BCG. Here is a piece of pseudo-code showing how it can be done

```fortran
10   call bcg(n,rhs,sol,ipar,fpar,w)
     if (ipar(1).eq.1) then
        call amux(n,w(ipar(8)),w(ipar(9)),a,ja,ia)
        goto 10
     else if (ipar(1).eq.2) then
        call atmux(n,w(ipar(8)),w(ipar(9)),a,ja,ia)
        goto 10
     else if (ipar(1).eq.3) then
        left preconditioner solver
        goto 10
     else if (ipar(1).eq.4) then
        left preconditioner transposed solve
        goto 10
     else if (ipar(1).eq.5) then
        right preconditioner solve
        goto 10
     else if (ipar(1).eq.6) then
        right preconditioner transposed solve
        goto 10
     else if (ipar(1).eq.10) then
        call my own stopping test routine
        goto 10
     else if (ipar(1).gt.0) then
        ipar(1) is an unspecified code
     else
        the iterative solver terminated with code = ipar(1)
     endif
```

This segment of pseudo-code assumes the matrix is in CSR format, `AMUX` and `ATMUX` are two routines from the SPARSKIT `MATVEC` module. They perform matrix-vector multiplications for CSR matrices, where `w(ipar(8))` is the first element of the input vectors to the two routines, and `w(ipar(9))` is the first element of the output vectors from them. For simplicity, we did not show the name of the routine that performs the preconditioning operations or the convergence tests.

## CG

```fortran
   subroutine cg(n, rhs, sol, ipar, fpar, w)
   implicit none
   integer n, ipar(16)
   real*8 rhs(n), sol(n), fpar(16), w(n,*)
```

- This is a implementation of the Conjugate Gradient (CG) method for solving linear system.

This is not the PCG algorithm. It is a regular CG algorithm. To be consistent with the other solvers, the preconditioners are applied by performing Ml^{-1} A Mr^{-1} P in place of A P in the CG algorithm.  PCG uses the preconditioner differently.

- fpar(7) is used here internally to store <r, r>.
- w(:,1) -- residual vector
- w(:,2) -- P, the conjugate direction
- w(:,3) -- A P, matrix multiply the conjugate direction
- w(:,4) -- temporary storage for results of preconditioning
- w(:,5) -- change in the solution (sol) is stored here until termination of this solver
