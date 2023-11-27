# SetAbstractKernelParam

Set kernel parameters

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setAbstractKernelParam( &
    & prefix, &
    & param, &
    & name, &
    & engine, &
    & coordinateSystem, &
    & timeDependency, &
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
    & baseInterpolationForTime, &
    & baseContinuityForTime, &
    & quadratureTypeForTime, &
    & postProcessOpt)
    CHARACTER(LEN=*), INTENT(IN) :: prefix
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: name
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeDependency
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tdof
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: currentTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: currentTimeStep
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: totalTimeStep
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for velocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for velocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for velocity field
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    !! Type of interpolation function used for Time
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    !! Type of continuity of basis function for Time
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    !! Type of quadrature for time
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !! Postprocessing option for writeData
  END SUBROUTINE setAbstractKernelParam
END INTERFACE
```
