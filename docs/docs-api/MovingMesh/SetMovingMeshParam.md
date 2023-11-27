# SetMovingMeshParam

Set MovingMesh parameter.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE setMovingMeshParam( &
    & param, &
    & engine, &
    & coordinateSystem, &
    & nsd, &
    & nnt, &
    & dt, &
    & startTime, &
    & endTime, &
    & currentTime, &
    & currentTimeStep, &
    & totalTimeStep, &
    & gravity, &
    & domainFile, &
    & materialInterfaces, &
    & maxIter, &
    & tMaterials, &
    & tDirichletBC, &
    & tNeumannBC, &
    & baseInterpolationForSpace, &
    & baseContinuityForSpace, &
    & quadratureTypeForSpace, &
    & postProcessOpt)
    !!
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! param stores the parameters
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! name of engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    !! Coordinate system
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    !! Acceleration due to gravity, default is zero
    !! If gravity is zero then we use piezometric pressure
    !! If gravity is nonzero then we use thermodynamic pressure
    !! If true then we consider the subscale pressure in stabilization
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domainFile
    !! Mesh/domain file for velocity and pressure
    !! Use when pressure and velocity have common domain
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    !! Mesh id for material interfaces
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nsd
    !! Number of spatial dimension
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    !! Number of nodes in time, default 1, has not effect, so ignore
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    !! Initial time step size, useful incase of nonlinear stokes flow
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    !! Starting time t0 of simulation, default=0.0
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    !! Final time of simulation, default is 0.0_DFP
    REAL(DFP), OPTIONAL, INTENT(IN) :: currentTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: currentTimeStep
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: totalTimeStep
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    !! maximum iteration for Newton-method
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tMaterials
    !! Total number of fluid materials; default=1
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBC
    !! Total number of Dirichlet domain for displacement, default=0
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tNeumannBC
    !! Total number of Neumann domain for displacement
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    !! Type of interpolation function used for basis function
    CHARACTER(*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    !! Type of continuity of basis function for pressure
    CHARACTER(*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    !! Type of quadrature for pressure field
    !! Type of interpolation function used for velocity
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    !!
  END SUBROUTINE setMovingMeshParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_SetMovingMeshParam_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
