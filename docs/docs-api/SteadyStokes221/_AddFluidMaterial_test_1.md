In this example we will learn how to add a fluid material in the kernel.

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
  CLASS( Domain_ ), POINTER :: dom => NULL()
  CHARACTER( LEN = * ), PARAMETER :: domainFileNamePressure="./mesh_tri3.h5"
  CHARACTER( LEN = * ), PARAMETER :: domainFileNameVelocity="./mesh_tri6.h5"
  TYPE(String) :: filename(2)
```

New variables in this example:

```fortran
  TYPE( MeshSelection_ ) :: region
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
    & preconditionOption=NO_PRECONDITION, &
    & convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, &
    & maxIter=100, &
    & relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20, &
    & rtol=REAL( 1.0E-10, DFP ), &
    & atol=REAL( 1.0D-10, DFP ) )
```

Initiate domain

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
```

Add fluid material

:::info
Add fluid material to kernel. To do so, we first create an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).
Then we add this instance to the kernel.
:::

```fortran
  CALL e%setQuietMode(.TRUE.)
  CALL region%Initiate( isSelectionByMeshID=.TRUE. )
  dom => domains(1)%ptr
  CALL region%Add( dim=dom%GetNSD(), meshID=[1] )
  CALL SetFluidMaterialParam( &
    & param=param, &
    & name="fluidMaterial", &
    & massDensity=1000.0_DFP, &
    & dynamicViscosity = 0.001_DFP, &
    & stressStrainModel="NewtonianFluidModel" )
  CALL SetNewtonianFluidModelParam( &
    & param = param, &
    & dynamicViscosity = 0.001_DFP )
```

```fortran
  CALL e%setQuietMode(.FALSE.)
  CALL obj%AddFluidMaterial( &
    & materialNo=1, &
    & materialName="fluidMaterial", &
    & param=param, &
    & region=region)
  CALL region%Deallocate()
```

Display kernel

```fortran
  CALL obj%Display("")
```

Cleanup

```fortran
  CALL obj%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
