# Structure

```fortran
TYPE :: IterationData_
  INTEGER(I4B) :: maxIter = 100
    !! Maximum number of iterations allowed
  INTEGER(I4B) :: iterationNumber = 1
    !! Iteration number
  REAL(DFP) :: residualError0 = 0.0
    !! Initial Residual error
  REAL(DFP) :: residualError = 0.0
    !! Current residual error
  REAL(DFP) :: residualTolerance = 1.0E-5
    !! Tolerance for checking convergence in residual
  REAL(DFP) :: solutionError0 = 0.0
    !! Initial solution error
  REAL(DFP) :: solutionError = 0.0
    !! Current solution error
  REAL(DFP) :: solutionTolerance = 1.0E-5
    !! Tolerance for checking convergence in solution
  INTEGER(I4B) :: convergenceType = RelativeConvergence
    !! Type of convergence
  INTEGER(I4B) :: convergenceIn = ConvergenceInRes
    !! Check Convergence in solution and/ or residual
  INTEGER(I4B) :: normType = NormL2
    !! Error norm type
  LOGICAL(LGT) :: converged = .FALSE.
    !! Status of convergence
  REAL(DFP) :: timeAtStart = 0.0
    !! Starting time
  REAL(DFP) :: timeAtEnd = 0.0
    !! Present time
  REAL(DFP), ALLOCATABLE :: convergenceData(:, :)
    !! history of convergence data
    !! each column corresponding to a iteration
  TYPE(String), ALLOCATABLE :: header(:)
    !! header for convergenceData
END TYPE IterationData_
```
