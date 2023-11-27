# AbstractLinSolver

`AbstractLinSolver_` is an abstract class for solving system of linear equation.

:::note
It is important to note that `AbstractLinSolver_` is created to build an
interface between `EASIFEM` library and other existing open-source
and powerful linear solver libraries.
:::

## Structure

```fortran
TYPE, ABSTRACT :: AbstractLinSolver_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! is object initiated?
  TYPE(String) :: engine
  !! Name of the engine
  !! NATIVE-SERIAL
  !! NATIVE-OMP
  !! NATIVE-ACC
  !! NATIVE-MPI
  !! PETSC
  !! LIS-OMP
  !! LIS-MPI
  INTEGER(I4B) :: solverName = 0
  !! Solver name
  INTEGER(I4B) :: ierr = 0
  !! Error code returned by the solver
  INTEGER(I4B) :: preconditionOption = 0
  !! Name of preconditioner;
  !! NO_PRECONDITION
  !! LEFT_PRECONDITION
  !! RIGHT_PRECONDITION
  !! LEFT_RIGHT_PRECONDITON
  INTEGER(I4B) :: iter = 0
  !! Current iteration number
  INTEGER(I4B) :: maxIter = 0
  !! Maximum iteration number
  REAL(DFP) :: atol = 0.0_DFP
  !! absolute tolerance
  REAL(DFP) :: rtol = 1.0E-8
  !! relative tolerance
  REAL(DFP) :: tol = 0.0_DFP
  !! Tolerance for testing convergence
  REAL(DFP) :: normRes = 0.0_DFP
  !! norm Residual
  REAL(DFP) :: error0 = 0.0_DFP
  !! initial error res or sol
  REAL(DFP) :: error = 0.0_DFP
  !! final error in res of sol
  INTEGER(I4B) :: convergenceIn = convergenceInRes
  !! convergence in residual or solution
  INTEGER(I4B) :: convergenceType = relativeConvergence
  !! relative/ absolute convergence
  LOGICAL(LGT) :: relativeToRHS = .FALSE.
  !! In case of relative convergence
  !! is convergence
  !! is relative to
  !! right hand side
  INTEGER(I4B) :: KrylovSubspaceSize = 15
  !! Useful for GMRES type algorithm
  INTEGER(I4B) :: globalNumRow = 0, globalNumColumn = 0
  !! Size of the global problem;
  INTEGER(I4B) :: localNumRow = 0, localNumColumn = 0
  !! Size of the problem on a single process
  REAL(DFP), ALLOCATABLE :: RES(:)
  !! Residual in each iteration
  CLASS(AbstractMatrixField_), POINTER :: Amat => NULL()
  !! Pointer to child of [[AbstractMatrixField_]]
```

- `isInitiated = .FALSE.` is object initiated
- `engine` is the name of the engine, following options are possible:
  - NATIVE-SERIAL
  - NATIVE-OMP
  - NATIVE-ACC
  - NATIVE-MPI
  - PETSC
  - LIS-OMP
  - LIS-MPI
- `solverName=0` is the name of solver
- `ierr = 0` denotes the error code returned by the solver
- `preconditionOption = 0` is the name of preconditioner, following options are possible:
  - NO_PRECONDITION
  - LEFT_PRECONDITION
  - RIGHT_PRECONDITION
  - LEFT_RIGHT_PRECONDITON
- `iter = 0` denotes the current iteration number, and total numbe of iterations taken by the solver
- `maxIter = 0`, is the maximum iteration number allowed for the solver.
- `atol = 0.0_DFP` denotes the absolute tolerance.
- `rtol = 1.0E-8` denotes the relative tolerance.
- `tol = 0.0_DFP` is the tolerance for testing convergence.
- `normRes = 0.0_DFP` is the norm of Residual.
- `error0 = 0.0_DFP`, initial error in residual or solution.
- `error = 0.0_DFP`, final error in residual or solution.
- `convergenceIn = convergenceInRes`, convergence in residual or solution
- `convergenceType = relativeConvergence`, relative or absolute convergence
- `relativeToRHS = .FALSE.`, in case of relative convergence, if relativeToRHS is true, then convergence is relative to right-hand side.
- `KrylovSubspaceSize = 15`, useful for GMRES type algorithm
- `globalNumRow = 0`, `globalNumColumn = 0`, size of the global problem;
- `localNumRow = 0`, `localNumColumn = 0`, size of the problem on a single process
- `dbcIndx(:)`, Indices where Dirichlet boundary conditions is prescribed
- `RES(:)`, Residual in each iteration
- `Amat => NULL()`, Pointer to child of [AbstractMatrixField\_](../AbstractMatrixField/AbstractMatrixField_.md)

![](./figures/AbstractLinSolver1.svg)

## Convergence criteria

### If `convergenceIn` is equal to `convergenceInSol`

For `convergenceType` equals to `relativeConvergence`, and `relativeToRHS=.FALSE.`, we use following convergence criteria:

$$
\Vert x\Vert\le\varepsilon_{r}\Vert x\Vert_{0}+\varepsilon_{a}
$$

For `convergenceType` equals to `relativeConvergence`, and `relativeToRHS=.TRUE.`, we use following convergence criteria:

$$
\Vert x\Vert\le\varepsilon_{r}\Vert rhs\Vert_{0}+\varepsilon_{a}
$$

Note that for `convergenceType` equals to `absoluteConvergence`, we have `rtol=0.0`, therefore, `relativeToRHS` options is not used, and the resultant criteria becomes:

$$
\Vert x\Vert\le\varepsilon_{a}
$$

### If `convergenceIn` is equal to `convergenceInRes`

For `convergenceType` equals to `relativeConvergence`, and `relativeToRHS=.FALSE.`, we use following convergence criteria:

$$
\Vert res\Vert\le\varepsilon_{r}\Vert res\Vert_{0}+\varepsilon_{a}
$$

For `convergenceType` equals to `relativeConvergence`, and `relativeToRHS=.TRUE.`, we use following convergence criteria:

$$
\Vert res\Vert\le\varepsilon_{r}\Vert rhs\Vert_{0}+\varepsilon_{a}
$$

Note that for `convergenceType` equals to `absoluteConvergence`, we have `rtol=0.0`, therefore, `relativeToRHS` options is not used, and the resultant criteria becomes:

$$
\Vert res\Vert\le\varepsilon_{a}
$$

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
