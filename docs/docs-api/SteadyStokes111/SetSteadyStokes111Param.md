# SetSteadyStokes111Param

Set SteadyStokes111 parameter.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setSteadyStokes111Param( &
    & param, &
    & isConservativeForm, &
    & gravity, &
    & isSubscalePressure, &
    & isBoundarySubscale, &
    & stabParamOption, &
    & domainFile,&
    & materialInterfaces, &
    & engine, &
    & coordinateSystem, &
    & nnt, &
    & dt, &
    & startTime, &
    & endTime, &
    & maxIter, &
    & rtoleranceForPressure, &
    & rtoleranceForVelocity, &
    & atoleranceForPressure, &
    & atoleranceForVelocity, &
    & toleranceForSteadyState, &
    & tFluidMaterials, &
    & tDirichletBCForPressure, &
    & tDirichletBCForVelocity, &
    & baseInterpolationForSpace, &
    & baseContinuityForSpace, &
    & quadratureTypeForSpace, &
    & baseInterpolationForTime, &
    & baseContinuityForTime, &
    & quadratureTypeForTime, &
    & postProcessOpt, &
    & refPressureNode, &
    & refPressure)
    !!
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: domainFile
    !! Mesh/domain file for pressure and velocity
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isConservativeForm
    !! True if we are using conservative form
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    !! Acceleration due to gravity, default is zero
    !! If gravity is zero then we use piezometric pressure
    !! If gravity is nonzero then we use thermodynamic pressure
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSubscalePressure
    !! If true then we consider the subscale pressure in stabilization
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isBoundarySubscale
    !! If true then we consider the subscale at interelement boundary
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: stabParamOption
    !! option for stabilization parameter, default is 1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    !! porous-fluid-interface
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! engine, default value is "NATIVE_SERIAL"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    !! coordinate system, default value is KERNEL_CARTESIAN
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    !! number of nodes in time, it has no effect, so ignore it
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! Initial time increment, has no effect
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    !! Starting time t0 of simulation, default=0.0, has no effect
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    !! Final time of simulation, default 0.0, has no effect
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! maximum iteration for Newton-method
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForPressure
    !! toleranceForPressure
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForVelocity
    !! toleranceForVelocity
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForPressure
    !! toleranceForPressure
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForVelocity
    !! toleranceForVelocity
    REAL(DFP), OPTIONAL, INTENT(IN) :: toleranceForSteadyState
    !!
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tFluidMaterials
    !! Total number of fluid materials; default=1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForPressure
    !! Total number of Dirichlet domain for pressure, default=0
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForVelocity
    !! Total number of Dirichlet domain for velocity, default=0
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for basis function
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for pressure
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for pressure field
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    !! Type of interpolation function used for Time
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    !! Type of continuity of basis function for Time
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    !! Type of quadrature for time
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !! postProcessing option
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: refPressureNode
    REAL(DFP), OPTIONAL, INTENT(IN) :: refPressure
  END SUBROUTINE setSteadyStokes111Param
END INTERFACE
```

- `isConservativeForm`: optional, default is .TRUE.
- `gravity`: optional, default is 0
- `isSubscalePressure`, optional, default is `.FALSE.`
- `isBoundarySubscale`, optional, default is `.FALSE.`
- `stabParamOption`, optional, default is 1
- `domainFile`: domainFile for pressure and velocity
- `materialInterfaces`, optional, default is 0
- `engine`, optional, default is NATIVE_SERIAL
- `CoordinateSystem`, optional, default is KERNEL_CARTESIAN
- `nnt`, optional, default 1
- `dt`, optional, default 0
- `startTime`, optional, default is 0
- `endTime`, optional, default is 0
- `maxIter`
- `rtoleranceForPressure`: optional, default is 1.0E-6
- `rtoleranceForVelocity`: optional, default is 1.0E-6
- `atoleranceForPressure`: optional, default is 1.0E-6
- `atoleranceForVelocity`: optional, default is 1.0E-6
- `toleranceForSteadyState`: optional, default is 1.0E-6
- `tFluidMaterials`, optional, default is 1
- `tDirichletBCForPressure`, optional, default is 0
- `tDirichletBCForVelocity`, optional, default is 0
- `baseInterpolationForSpace`, optional
- `baseContinuityForSpace`, optional
- `quadratureTypeForSpace`, optional

## Example

import EXAMPLE136 from "./_SetSteadyStokes111Param_test_1.md";

<EXAMPLE136 />
