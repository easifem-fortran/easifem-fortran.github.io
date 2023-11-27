This example shows how to set the parameters for steady stokes flow kernel [SteadyStokes221](SteadyStokes221_.md).

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
  CHARACTER( LEN = * ), PARAMETER :: domainFileForPressure="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: domainFileForVelocity="./mesh_tri6.h5"
```

Set parameters

:::note Set parameters for kernel.
Initiate the parameter list to store the parameters of the kernel
:::

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

We set the parameters for [SteadyStokes221_](./SteadyStokes221_.md) kernel.

```fortran
  CALL SetSteadyStokes221Param( &
    & param=param, &
    & isConservativeForm=.TRUE., &
    & gravity = [0.0_DFP, -9.8_DFP, 0.0_DFP], &
    & domainFileForPressure = domainFileForPressure, &
    & domainFileForVelocity = domainFileForVelocity, &
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

Let us print the parameter list.

```fortran
    CALL param%Print()
```

Let us check the essential parameter.

```fortran
  CALL obj%CheckEssentialParam( param )
```

```fortran
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
