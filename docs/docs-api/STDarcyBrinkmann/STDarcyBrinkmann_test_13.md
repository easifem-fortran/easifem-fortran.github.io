---
authors: Vikas Sharma, Ph. D.
date: 29 Sept 2021
update: 21 Oct 2021
  - 23 Oct 2021
  - 05 Nov 2021
  - 14 Nov 2021
title: STDarcyBrinkmann example 13
tags:
  - ParameterList/Initiate
  - SetSTDarcyBrinkmannParam
  - SetLinSolverParam
  - HDF5File/Initiate
  - HDF5File/Open
  - Domain/Initiate
  - STDarcyBrinkmann/Initiate
  - STDarcyBrinkmann/AddPorousMaterial
  - MeshSelection/Initiate
  - MeshSelection/Add
  - SetPorousMaterialParam
  - SetFluidMaterialParam
  - SetLinearPoroElasticModelParam
  - SetNewtonianFluidModelParam
  - SetDirichletBCParam
  - STDarcyBrinkmann/AddVelocityBC
  - STDarcyBrinkmann/GetVelocityBCPointer
  - STDarcyBrinkmann/AddPressureBC
  - STDarcyBrinkmann/GetPressureBCPointer
  - STDarcyBrinkmann/Set
---

# STDarcyBrinkmann example 13

!!! note ""
    This example tests and demonstrates the usage of `Set()` method.

## Modules & Classes

- [[STDarcyBrinkmann_]]
- [[ParameterList_]]
- [[HDF5File_]]
- [[Domain_]]
- [[DomainPointer_]]
- [[MeshSelection_]]
- [[NeumannBC_]]

## Usages

!!! note ""
    IMPORT the modules.

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE easifemKernels
  USE STDarcyBrinkmann_Class
  IMPLICIT NONE
```

!!! note ""
    Define the variables.

```fortran
  TYPE(STDarcyBrinkmann_) :: obj
  TYPE(ParameterList_) :: param
  TYPE(HDF5File_) :: domainFileForPressure
  TYPE(HDF5File_) :: domainFileForVelocity
  TYPE(MeshSelection_) :: region
  TYPE(Domain_), TARGET :: domainForPressure
  TYPE(Domain_), TARGET :: domainForVelocity
  TYPE(DomainPointer_) :: domains(2)
  CLASS(DirichletBC_), POINTER :: dbc => NULL()
  CHARACTER(LEN=*), PARAMETER :: &
    & domainFileNameForPressure = "./mesh_tri3.h5"
  CHARACTER(LEN=*), PARAMETER :: &
    & domainFileNameForVelocity = "./mesh_tri6.h5"
```

!!! note ""
    Initiate an instance of [[ParameterList_]], param, this will be used to initiate several objects.

```fortran
  CALL FPL_INIT(); CALL param%Initiate()
```

!!! note ""
    Setting parameters for an instance of [[STDarcyBrinkmann_]].

```fortran
  CALL SetSTDarcyBrinkmannParam( &
    & param=param, &
    & engine="NATIVE_SERIAL", &
    & nnt=2, &
    & startTime=0.0_DFP, &
    & endTime=10.0_DFP, &
    & dt=0.001_DFP, &
    & CoordinateSystem=KERNEL_2D, &
    & tPorousMaterials=2, &
    & tFluidMaterials=1, &
    & tDirichletBCForPressure=1, &
    & tDirichletBCForVelocity=3, &
    & domainFileForPressure=domainFileNameForPressure, &
    & domainFileForVelocity=domainFileNameForVelocity)
```

!!! note ""
    Setting [[LinSolver_]] parameters.


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
    & rtol=1.0D-10, &
    & atol=1.0D-10 )
```

!!! note ""
    Initiate an [[HDF5File_]] for making [[Mesh_]] and/or [[Domain_]] for pressure variable.

```fortran
  CALL domainFileForPressure%Initiate(filename=domainFileNameForPressure, &
    & MODE="READ")
  CALL domainFileForPressure%Open()
  CALL domainForPressure%Initiate(domainFileForPressure, "")
```

!!! note ""
    Initiate an [[HDF5File_]] for making [[Mesh_]] and/or [[Domain_]] for velocity variable.

```fortran
  CALL domainFileForVelocity%Initiate(filename=domainFileNameForVelocity, &
  & MODE="READ")
  CALL domainFileForVelocity%Open()
  CALL domainForVelocity%Initiate(domainFileForVelocity, "")
```

!!! note ""
    Packing domains in a vector of [[DomainPointer_]]

```fortran
  domains(1)%ptr => domainForVelocity
  domains(2)%ptr => domainForPressure
```

!!! note ""
    DEALLOCATE domain files

```fortran
  CALL domainFileForPressure%Deallocate()
  CALL domainFileForVelocity%Deallocate()
```

!!! note ""
    Initiate an instance of [[STDarcyBrinkmann_]]

```fortran
  CALL obj%Initiate(param=param, domains=domains)
```

!!! note "porousMaterial 1"
    Adding a porous material.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=domainForPressure%GetNSD(), meshID=[1])
  CALL SetPorousMaterialParam(param=param, name="porousMaterial", &
    & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel")
```

Adding material parameters.

```fortran
  CALL SetLinearPoroElasticModelParam( &
    & param=param,  &
    & ElasticityType=IsoLinearElasticModel, &
    & isPlaneStress=.FALSE., &
    & isPlaneStrain=.TRUE., &
    & PoissonRatio=0.3_DFP, &
    & YoungsModulus=1.0D+6)
```


```fortran
  CALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &
    & param=param, region=region)
  CALL region%Deallocate()
```

!!! note "porousMaterial 2"
    Adding a porous material.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=domainForPressure%GetNSD(), meshID=[2])
  CALL SetPorousMaterialParam(param=param, name="porousMaterial", &
    & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel")
```

```fortran
  CALL SetLinearPoroElasticModelParam( &
    & param=param,  &
    & ElasticityType=IsoLinearElasticModel, &
    & isPlaneStress=.FALSE., &
    & isPlaneStrain=.TRUE., &
    & PoissonRatio=0.3_DFP, &
    & YoungsModulus=1.0D+6)
```


```fortran
  CALL obj%AddPorousMaterial(materialNo=2, &
    & materialName="porousMaterial", &
    & param=param, region=region)
  CALL region%Deallocate()
```

!!! note "fluidMaterial 1"
    Adding a fluid material.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=domainForVelocity%GetNSD(), meshID=[1, 2])
```

!!! note "SetFluidMaterialParam"
    Setting PARAMETER for [[FluidMaterial_]]

```fortran
  CALL SetFluidMaterialParam(param=param, name="fluidMaterial", &
    & massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel")
```

!!! note "SetNewtonianFluidModelParam"
    Setting parameters for [[NewtonianFluidModel_]] which is a material model

```fortran
  CALL SetNewtonianFluidModelParam(param=param, Viscosity=0.001_DFP)
```

Adding fluid material.

```fortran
  CALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &
    & param=param, region=region)
  CALL region%Deallocate()
```

!!! note "Dirichlet boundary"
    Let us set [[NeumannBC_]] for velocity. We are prescribing x component of the velocity.

First we set the necessary parameters.

```fortran
  CALL SetDirichletBCParam(param=param, name="ZeroV1", &
    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)
```

Now we SELECT the region, which is top and bottom boundary.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=1, meshID=[1, 2, 4, 5])
  CALL region%Set()
```

Now we CALL `AddVelocityBC` method of [[STDarcyBrinkmann_]]. THEN we get the POINTER to the [[NeumannBC_]] which is created by the `AddVelocityBC` method. THEN we CALL Set method on this POINTER.

```fortran
  CALL obj%AddVelocityBC(dbcNo=1, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=0.0_DFP); dbc => NULL()
```

!!! note "Dirichlet boundary"
    Let us set [[NeumannBC_]] for velocity (boundary condition at the inlet). We are prescribing x component of the velocity.

```fortran
  CALL SetDirichletBCParam(param=param, name="UpstreamV1", &
    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)
```

Now we SELECT the inlet region, which is the left-boundary.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=1, meshID=[6])
  CALL region%Set()
```

Now that we have build the inlet region, let us add it to kernel for the velocity Dirichlet boundary condition.

```fortran
  CALL obj%AddVelocityBC(dbcNo=2, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=2)
  CALL dbc%Set(ConstantNodalValue=0.1_DFP); dbc => NULL()
```

!!! note "Dirichlet boundary"
    Let us set [[NeumannBC_]] for velocity. We are prescribing y component of the velocity.

Let us set the parameter for [[NeumannBC_]]

```fortran
  CALL SetDirichletBCParam(param=param, name="ZeroV2", &
    & idof=2, nodalValueType=Constant, useFunction=.FALSE.)
```

Now select the region, which is the entire boundary.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=1, meshID=[1, 2, 4, 5, 6, 3])
  CALL region%Set()
```

Adding region to the kernel for setting boundary condition for velocity field.

```fortran
  CALL obj%AddVelocityBC(dbcNo=3, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetVelocityBCPointer(dbcNo=3)
  CALL dbc%Set(ConstantNodalValue=0.1_DFP); dbc => NULL()
```

!!! note "Dirichlet boundary"
    Let us set [[NeumannBC_]] for pressure. We are prescribing zero pressure condition at the outlet.

Define the parameters for constructing [[NeumannBC_]] instance.

```fortran
  CALL SetDirichletBCParam(param=param, name="ZeroP", &
    & idof=1, nodalValueType=Constant, useFunction=.FALSE.)
```

Construct an outlet region.

```fortran
  CALL region%Initiate(isSelectionByMeshID=.TRUE.)
  CALL region%Add(dim=1, meshID=[3])
  CALL region%Set()
```

Add the boundary condition and outlet region of the kernel by using the method called `AddPressureBC`

```fortran
  CALL obj%AddPressureBC(dbcNo=1, param=param, boundary=region)
  CALL region%Deallocate()
  dbc => obj%GetPressureBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=0.0_DFP); dbc => NULL()
```

!!! success "Set"
    Now that we are done with the setup, we should call `Set` method. Then, the kernel will check the data, configuration, and intiate the appropriate variables.

```fortran
  CALL Display("Setting kernel")
  CALL obj%Set()
  CALL Display("Setting kernel [OK!]")
```

!!! note ""
    Let see the content of the kernel on the terminal screen by using `Display` method.

```fortran
  CALL obj%Display("")
```

!!! settings "Cleanup"

```fortran
  CALL obj%Deallocate()
  CALL domainForPressure%Deallocate()
  CALL domainForVelocity%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
