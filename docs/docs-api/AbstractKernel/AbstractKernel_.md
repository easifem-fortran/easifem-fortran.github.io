---
title: Structure
sidebar_position: 2
id: "AbstractKernel_"
aliases:
  - "AbstractKernel"
tags:
  - "Kernel"
  - "easifemKernels"
---

`AbstractKernel_` class is an abstract class for physics kernel.

## Workflow

![Kernel-Workflow](figures/Kernel-Workflow.svg)

## Structure

```fortran

TYPE, ABSTRACT :: AbstractKernel_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! This variable is set to true when we initiate the kernel
  LOGICAL(LGT) :: isCommonDomain = .TRUE.
  !! This variable is True when the domain is common 
  !! It is useful in the case of multi-physics simulations.
  !! In multi-physics applications different fields can have different 
  !! type and order of shape functions. To construct such shape functions 
  !! we may have to use different finite element meshes (hence, domains).
  !! For example, in the fluid mechanics, we often use Taylor-Hood element 
  !! Which employs different order of interpolation for pressure and velocity.
  !! NOTE: In most of the application isCommonDomain is TRUE.
  TYPE(String) :: name
  !! This is the name of the kernel. It can be anything you want.
  TYPE(String) :: engine
  !! Which type of linear solver library (engine) we use to 
  !! solve system of linear equations. We can specify following 
  !! values.
  !! `NATIVE_SERIAL`
  !! `NATIVE_OMP`
  !! `NATIVE_MPI`
  !! `LIS_SERIAL`
  !! `LIS_OMP`
  !! `LIS_MPI`
  !! `PETSC`
  INTEGER(I4B) :: coordinateSystem = DEFAULT_coordinateSystem
  !! Spatial coordinate system type. It can take following values
  !! `KERNEL_CARTESIAN` for Cartesian coordinates
  !! `KERNEL_CYLINDRICAL` for Cylinderical coordinates
  !! `KERNEL_SPHERICAL` for Sperical coordinates
  !! NOTE: These parameters are defined in the AbstractKernelParam module.
  INTEGER(I4B) :: maxIter = DEFAULT_maxIter
  !! Maximum  number of iteration iterations
  !! This is useful when when we use iterative solvers like 
  !! Newton method, Modified Newton method, or Iterative-predictor solvers.
  !! NOTE: DEFAULT_maxIter is defined in AbstractKernelParam
  INTEGER(I4B) :: timeDependency = 0
  !! This variable indicates if the problem is time dependent or not.
  !! It can take following values: 
  !! KERNEL_STEADY  or KERNEL_STATIC 
  !! KERNEL_PSEUDOSTATIC 
  !! KERNEL_TRANSIENT or KERNEL_DYNAMIC 
  !! NOTE: These variables are defined in AbstractKernelParam
  INTEGER(I4B) :: nsd = 0
  !! Spatial dimension of the problem,
  INTEGER(I4B) :: nnt = 1
  !! Number of nodes in time element 
  !! NOTE: This variables is used only in space-time finite element methods 
  INTEGER(I4B) :: tdof = 0
  !! Total number of degree of freedom per node
  !! NOTE: This variable is set internally by each kernel while 
  !! setting the kernel.
  REAL(DFP) :: normRHS = 0.0_DFP
  !! norm of the right-hand-side vector in the system of linear equations
  !! NOTE: This variable is used internally
  REAL(DFP) :: dt = 0.0_DFP
  !! Time step size used in the pseudostatic and dynamic problems
  !! Needed in transient case
  REAL(DFP) :: startTime = 0.0
  !! Starting time of simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation only.
  REAL(DFP) :: endTime = 0.0
  !! Final time of the simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation only.
  REAL(DFP) :: currentTime = 0.0
  !! The current time of the simulation
  !! NOTE: This varible is needed in the transient simulation only.
  INTEGER(I4B) :: currentTimeStep = 1
  !! Current time step number of the simulation.
  !! NOTE: This varible is needed in the transient simulation only.
  INTEGER(I4B) :: totalTimeStep = 0
  !! Total number of time step number in the simulation.
  !! NOTE: This varible is needed in the transient simulation only.
  REAL(DFP) :: lengthScale = 1.0_DFP
  !! This variable denotes the length scale of the problem. 
  !! NOTE: This variable is for internal use only.
  !! INTERNAL:
  INTEGER(I4B) :: postProcessOpt = 0
  !! Postprocessing options
  !! INFO: The actual action depends upon the specific kernels
  REAL(DFP) :: gravity(3) = 0.0_DFP
  !! Acceleration vector due to gravity
  TYPE(IterationData_) :: iterData
  !! Iteration data
  !! INFO: The actual action depends upon the specific kernels
  INTEGER(I4B), ALLOCATABLE :: elemToMatId(:, :)
  !! This variable denotes the Element number to material mapping.
  !! For example, `elemToMatID( iel, POROUS_MATERIAL_ID )` denotes the
  !! porous material type assigned to element number `iel`
  !! Similarly, `elemToMatID( iel, FLUID_MATERIAL_ID )` denotes
  !! the fluid material type assigned to element number `iel`.
  INTEGER(I4B), ALLOCATABLE :: dbcIndx(:)
  !! Indices where Dirichlet boundary conditions is prescribed
  !! INFO: This variable is for internal use only. 
  !! It is formed from the Dirichlet boundary conditions.
  !! INTERNAL:
  CLASS(AbstractLinSolver_), POINTER :: linsol => NULL()
  !! A pointer to a Linear iterative solver
  CLASS(AbstractMatrixField_), POINTER :: tanmat => NULL()
  !! Global tangent matrix
  !! nodal coordinates
  TYPE(ReferenceLine_) :: refTimeElem
  !! reference element for time domain
  TYPE(ReferenceLine_) :: refLinTimeElem
  !! reference element for time domain
  TYPE(String) :: baseContinuityForSpace
  !! Continuity of basis function for pressure and velocity field
  TYPE(String) :: baseInterpolationForSpace
  !! Interpolation of shape function for pressure and velocity field
  TYPE(String) :: quadratureTypeForSpace
  !! Quadrature type for pressure field
  TYPE(String) :: baseContinuityForTime
  !! Continuity of basis function for pressure field
  !! in time domain
  TYPE(String) :: baseInterpolationForTime
  !! Interpolation of basis function for pressure field
  !! in time domain
  TYPE(String) :: quadratureTypeForTime
  !! Quadrature type for pressure field in time domain
  TYPE(String) :: domainFile
  !! Domain file name
END TYPE
```

- `isInitiated`, This is set to true if the kernel is initiated
- `name`, name of the kernel
- `engine`, Linear solver engine: `NATIVE_SERIAL`, `NATIVE_OMP`, `NATIVE_MPI`, `LIS_SERIAL`, `LIS_OMP` `LIS_MPI`, `PETSC`
- `coordinateSystem`, Spatial coordinate type, Spatial dimension of PDE ; Possible options are `KERNEL_1D_H`, `KERNEL_1D_V`, `KERNEL_2D`, `KERNEL_2D_AXISYM`, `KERNEL_3D`, `KERNEL_2D_PLANE_STRESS`, `KERNEL_2D_PLANE_STRAIN`
- `timeDependency`, It represents the time dependency of PDE: `KERNEL_STATIC`,`KERNEL_PSEUDOSTATIC`,`KERNEL_TRANSIENT`
- `nsd`, Spatial dimension of problem, it will be determined from `CoordinateSystem`
- `nnt`, Number of nodes in time domain, required for space-time finite element computation
- `tdof`, total number of degree of freedom per node
- `normRHS`, norm of right-hand side vector
- `dt`, time step size used in the kernel, needed in transient case
- `startTime`, present time of simulation needed in transient case
- `endTime`, Final time of simulation, needed in transient case
- `currentTime`, Current time, needed in transient case
- `lengthScale`, Length scale of the problem
- `currentTimeStep`, present time step number, needed in transient case
- `totalTimeStep`, total number of time steps, needed in transient case
- `postProcessOpt`, post-processing options
- `gravity`, Acceleration vector due to gravity
- `iterData`, contains information about the iteration ; such maximum number of iteration, `ConvergenceType`, `toleranceIn`, and many others, see [IterationData\_](../IterationData/IterationData_.md)
- `elemToMatId`, element number to material mapping, `elemToMatID( iel, POROUS_MATERIAL_ID )` denotes the porous material type assigned to `iel`. Similarly, `elemToMatID( iel, FLUID_MATERIAL_ID )` denotes the fluid material type assigned to `iel`
- `linsol`, Linear iterative solver
- `tanmat`, Global tangent matrix
- `refTimeElem`, reference element for time domain
- `refLinTimeElem`, reference element for time domain
- `baseContinuityForSpace`, Continuity of basis function for pressure and velocity field
- `baseInterpolationForSpace`, Interpolation of shape function for pressure and velocity field
- `quadratureTypeForSpace`, Quadrature type for pressure field
- `baseContinuityForTime`, Continuity of basis function for pressure field in time domain
- `baseInterpolationForTime`, Interpolation of basis function for pressure field in time domain
- `quadratureTypeForTime`, Quadrature type for pressure field in time domain

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
