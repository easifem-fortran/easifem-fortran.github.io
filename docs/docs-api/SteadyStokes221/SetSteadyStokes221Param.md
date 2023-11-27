# SteadyStokes221Param

Set SteadyStokes221 parameter.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE setSteadyStokes221Param( &
    & param, &
    & isConservativeForm, &
    & gravity, &
    & domainFileForPressure,&
    & domainFileForVelocity,&
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
    CHARACTER(LEN=*), INTENT(IN) :: domainFileForPressure
    !! Mesh/domain file for pressure
    CHARACTER(LEN=*), INTENT(IN) :: domainFileForVelocity
    !! Mesh/domain file for Velocity
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isConservativeForm
    !! True if we are using conservative form
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    !! Acceleration due to gravity, default is zero
    !! If gravity is zero then we use piezometric pressure
    !! If gravity is nonzero then we use thermodynamic pressure
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    !! porous-fluid-interface
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: engine
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
    !! tolerance for steady state
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tFluidMaterials
    !! Total number of fluid materials; default=1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForPressure
    !! Total number of Dirichlet domain for pressure, default=0
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForVelocity
    !! Total number of Dirichlet domain for velocity, default=0
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for basis function
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for pressure
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for pressure field
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    !! Type of interpolation function used for Time
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    !! Type of continuity of basis function for Time
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    !! Type of quadrature for time
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !! postProcessing option
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: refPressureNode
    !! reference pressure node
    REAL(DFP), OPTIONAL, INTENT(IN) :: refPressure
    !! reference pressure value
  END SUBROUTINE setSteadyStokes221Param
END INTERFACE
```

</TabItem>

<TabItem value="2" label="️܀ Example">

import EXAMPLE7 from "./_SetSteadyStokes221Param_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
