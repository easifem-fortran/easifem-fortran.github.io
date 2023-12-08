# SetAbstractKernelParam

Set kernel parameters

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetAbstractKernelParam( &
    & prefix, &
    & param, &
    & name, &
    & engine, &
    & coordinateSystem, &
    & domainFile, &
    & isCommonDomain, &
    & gravity, &
    & timeDependency, &
    & maxIter, &
    & nsd, &
    & nnt, &
    & tdof, &
    & dt, &
    & startTime, &
    & endTime, &
    & currentTime, &
    & currentTimeStep, &
    & totalTimeStep, &
    & baseInterpolationForSpace, &
    & baseContinuityForSpace, &
    & quadratureTypeForSpace, &
    & ipTypeForSpace, &
    & basisTypeForSpace, &
    & alphaForSpace, &
    & betaForSpace, &
    & lambdaForSpace, &
    & baseInterpolationForTime, &
    & baseContinuityForTime, &
    & quadratureTypeForTime, &
    & ipTypeForTime, &
    & basisTypeForTime, &
    & alphaForTime, &
    & betaForTime, &
    & lambdaForTime, &
    & postProcessOpt)
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for Space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    !! Type of continuity of basis function for Time
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for Space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    !! Type of interpolation function used for Time
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domainFile
    !! Name of domain file
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! Engine of the kernel
    CHARACTER(*), OPTIONAL, INTENT(IN) :: name
    !! name of the kernel
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for space
    !! NOTE: Default value is given in AbstractKernelParam
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    !! Type of quadrature for time
    !! NOTE: Default value is given in AbstractKernelParam
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    !! Coordinate system of the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: currentTimeStep
    !! Current time step
    !! INFO: Default value is 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! maximum number of iterations, required for iterData
    !! NOTE: Default value is given in AbstractKernelParam
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    !! Number of nodes in time element.
    !! NOTE: This variable is needed only in the case of
    !! space-time finite element method.
    !! The default value is 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd
    !! Spatial dimension of the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !! Postprocessing option for writeData
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tdof
    !! Total degree of freedom per nodes in the problem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeDependency
    !! time dependency of the problem
    !! INFO: Default value is KERNEL_STEADY
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: totalTimeStep
    !!Total number of time steps
    !! INFO: Default value is 1
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isCommonDomain
    !! Is domain comman or different domain for multi-physics
    REAL(DFP), OPTIONAL, INTENT(IN) :: currentTime
    !! Current time step of the simulation
    !! INFO: Default value if 0.0_DFP
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! Time step size
    !! INFO: Default value is 0.0
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    !! Last time of simulation
    !! INFO: Default value is 0.0_DFP
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    !! Acceleration due to gravity
    !! INFO: Default value if [0,0,0]
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    !! Start time of the simulation
    !! INFO: Default value is 0.0
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Put parameters here
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipTypeForSpace
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipTypeForTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisTypeForSpace
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisTypeForTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: alphaForSpace
    REAL(DFP), OPTIONAL, INTENT(IN) :: alphaForTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: betaForSpace
    REAL(DFP), OPTIONAL, INTENT(IN) :: betaForTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambdaForSpace
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambdaForTime
  END SUBROUTINE SetAbstractKernelParam
END INTERFACE
```
