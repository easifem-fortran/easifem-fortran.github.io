# GetParam

Get the field parameters of linear solver.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetParam(obj, isInitiated, engine, solverName, &
      & ierr, preconditionOption, iter, maxIter, atol, rtol, tol, normRes, &
      & error0, error, convergenceIn, convergenceType, relativeToRHS, &
      & KrylovSubspaceSize, globalNumRow, globalNumColumn, &
      & localNumRow, localNumColumn, dbcIndx, RES, Amat)
    CLASS(AbstractLinSolver_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isInitiated
    !! is object initiated?
    CHARACTER(*), OPTIONAL, INTENT(INOUT) :: engine
    !! Name of the engine
    !! NATIVE-SERIAL
    !! NATIVE-OMP
    !! NATIVE-ACC
    !! NATIVE-MPI
    !! PETSC
    !! LIS-OMP
    !! LIS-MPI
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: solverName
    !! Solver name
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: ierr
    !! Error code returned by the solver
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: preconditionOption
    !! Name of preconditioner;
    !! NO_PRECONDITION
    !! LEFT_PRECONDITION
    !! RIGHT_PRECONDITION
    !! LEFT_RIGHT_PRECONDITON
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: iter
    !! Current iteration number
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: maxIter
    !! Maximum iteration number
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: atol
    !! absolute tolerance
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: rtol
    !! relative tolerance
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: tol
    !! Tolerance for testing convergence
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: normRes
    !! norm Residual
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error0
    !! initial error res or sol
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error
    !! final error in res of sol
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceIn
    !! convergence in residual or solution
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceType
    !! relative/ absolute convergence
    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: relativeToRHS
    !! In case of relative convergence
    !! is convergence
    !! is relative to
    !! right hand side
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: KrylovSubspaceSize
    !! Useful for GMRES type algorithm
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: globalNumRow, globalNumColumn
    !! Size of the global problem;
    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: localNumRow, localNumColumn
    !! Size of the problem on a single process
    INTEGER(I4B), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: dbcIndx(:)
    !! Indices where Dirichlet boundary conditions is prescribed
    REAL(DFP), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: RES(:)
    !! Residual in each iteration
    CLASS(AbstractMatrixField_), OPTIONAL, POINTER, INTENT(INOUT) :: Amat
    !! Pointer to child of [[AbstractMatrixField_]]
  END SUBROUTINE GetParam
END INTERFACE
```
