This example shows how to set the parameters for steady stokes flow kernel.
Then we initiate the kernel and display its content on the screen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={null}>

<TabItem value="1" label="܀ Mesh for velocity">

![](figures/mesh_tri6.png)

</TabItem>

<TabItem value="2" label="܀ Mesh for pressure ">

![](figures/mesh_tri3.png)

</TabItem>

<TabItem value="3" label="↢ ">

</TabItem>

</Tabs>

Use modules

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE SteadyStokes221_Class
  IMPLICIT NONE
```

Declare variables

```fortran
  TYPE( SteadyStokes221_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( DomainPointer_ ) :: domains(2)
  CHARACTER( LEN = * ), PARAMETER :: domainFileNamePressure="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: domainFileNameVelocity="./mesh_tri6.h5"
  TYPE(String) :: filename(2)
```

Set parameters

:::note Set parameters for kernel.
:::

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

```fortran
  CALL SetSteadyStokes221Param( &
    & param=param, &
    & isConservativeForm=.TRUE., &
    & gravity = [0.0_DFP, -9.8_DFP, 0.0_DFP], &
    & domainFileForPressure = domainFileNamePressure, &
    & domainFileForVelocity = domainFileNameVelocity, &
    & engine="NATIVE_SERIAL", &
    & CoordinateSystem=KERNEL_CARTESIAN, &
    & maxIter = 100, &
    & rtoleranceForPressure = REAL( 1.0E-6, DFP ), &
    & rtoleranceForVelocity = REAL( 1.0E-6, DFP ), &
    & atoleranceForPressure = REAL( 1.0E-6, DFP ), &
    & atoleranceForVelocity = REAL( 1.0E-6, DFP ), &
    & toleranceForSteadyState = REAL( 1.0E-6, DFP ), &
    & tFluidMaterials=1, &
    & tDirichletBCForPressure=0, &
    & tDirichletBCForVelocity=3, &
    & baseInterpolationForSpace="LagrangeInterpolation", &
    & baseContinuityForSpace="H1", &
    & quadratureTypeForSpace="GaussLegendre", &
    & postProcessOpt=1)
```

:::note Set parameters for linear solver.
:::

```fortran
  CALL SetLinSolverParam( &
    & param=param, &
    & solverName=LIS_GMRES,&
    & preconditionOption=LEFT_PRECONDITION, &
    & convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, &
    & maxIter=100, &
    & relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20, &
    & rtol=REAL( 1.0E-10, DFP ), &
    & atol=REAL( 1.0D-10, DFP ) )
```

Initiate domain

Initiate the domain.

```fortran
  filename = [String(domainFileNamePressure), &
    & String(domainFileNameVelocity)]
  CALL e%setQuietMode(.TRUE.)
  CALL Initiate(domains=domains, filename=filename)
```

Initiate kernel

```fortran
  CALL e%setQuietMode(.FALSE.)
  CALL obj%Initiate(param=param, domains=domains )
  CALL obj%Display("")
```

```fortran
  CALL obj%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
