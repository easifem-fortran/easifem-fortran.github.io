# SetParam

Set the fields of linear solver.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetParam(obj, isInitiated, engine, solverName, &
      & ierr, preconditionOption, iter, maxIter, atol, rtol, tol, normRes, &
      & error0, error, convergenceIn, convergenceType, relativeToRHS, &
      & KrylovSubspaceSize, globalNumRow, globalNumColumn, &
      & localNumRow, localNumColumn, dbcIndx, RES, Amat)
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isInitiated
    !! is object initiated?
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! Name of the engine
    !! NATIVE-SERIAL
    !! NATIVE-OMP
    !! NATIVE-ACC
    !! NATIVE-MPI
    !! PETSC
    !! LIS-OMP
    !! LIS-MPI
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: solverName
    !! Solver name
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ierr
    !! Error code returned by the solver
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: preconditionOption
    !! Name of preconditioner;
    !! NO_PRECONDITION
    !! LEFT_PRECONDITION
    !! RIGHT_PRECONDITION
    !! LEFT_RIGHT_PRECONDITON
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: iter
    !! Current iteration number
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! Maximum iteration number
    REAL(DFP), OPTIONAL, INTENT(IN) :: atol
    !! absolute tolerance
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol
    !! relative tolerance
    REAL(DFP), OPTIONAL, INTENT(IN) :: tol
    !! Tolerance for testing convergence
    REAL(DFP), OPTIONAL, INTENT(IN) :: normRes
    !! norm Residual
    REAL(DFP), OPTIONAL, INTENT(IN) :: error0
    !! initial error res or sol
    REAL(DFP), OPTIONAL, INTENT(IN) :: error
    !! final error in res of sol
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceIn
    !! convergence in residual or solution
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceType
    !! relative/ absolute convergence
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: relativeToRHS
    !! In case of relative convergence
    !! is convergence
    !! is relative to
    !! right hand side
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: KrylovSubspaceSize
    !! Useful for GMRES type algorithm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNumRow, globalNumColumn
    !! Size of the global problem;
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: localNumRow, localNumColumn
    !! Size of the problem on a single process
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcIndx(:)
    !! Indices where Dirichlet boundary conditions is prescribed
    REAL(DFP), OPTIONAL, INTENT(IN) :: RES(:)
    !! Residual in each iteration
    CLASS(AbstractMatrixField_), OPTIONAL, TARGET, INTENT(IN) :: Amat
    !! Pointer to child of [[AbstractMatrixField_]]
  END SUBROUTINE SetParam
END INTERFACE

```
