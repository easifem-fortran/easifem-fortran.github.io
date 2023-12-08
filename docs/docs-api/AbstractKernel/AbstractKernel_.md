---
sidebar_position: 2
---

# Structure

`AbstractKernel_` class is an abstract class for physics kernel.

## Workflow

![Kernel-Workflow](figures/Kernel-Workflow.svg)

<details>
<summary>Click here to see the structure</summary>
<div>

```fortran
TYPE, ABSTRACT :: AbstractKernel_
  LOGICAL(LGT) :: isInitiated = .FALSE.
  !! This variable is Set to true when we initiate the kernel
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
  !! NOTE: This variable is Set internally by each kernel while
  !! Setting the kernel.
  REAL(DFP) :: normRHS = 0.0_DFP
  !! norm of the right-hand-side vector in the system of linear equations
  !! NOTE: This variable is used internally
  REAL(DFP) :: dt = 0.0_DFP
  !! Time step size used in the pseudostatic and dynamic problems
  !! Needed in transient case
  REAL(DFP) :: startTime = 0.0
  !! Starting time of simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation
  !! only.
  REAL(DFP) :: endTime = 0.0
  !! Final time of the simulation
  !! NOTE: This varible is needed in the transient or pseudostatic simulation
  !! only.
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
  !! NOTE: The actual linear solver depends upon the
  !! engine and type of problem. linsol is initiated in
  !! KernelInitiateFromParam routine.
  CLASS(AbstractMatrixField_), POINTER :: tanmat => NULL()
  !! Global tangent matrix
  !! NOTE: The actual form of tangent matrix depends upon the engine
  !! and type of problem.
  CLASS(Domain_), POINTER :: dom => NULL()
  !! Domain of the problem
  TYPE(DomainPointer_), ALLOCATABLE :: domains(:)
  !! Domain of the problem
  TYPE(ReferenceLine_) :: refTimeElem
  !! reference element for time domain
  TYPE(ReferenceLine_) :: refLinTimeElem
  !! reference element for time domain
  TYPE(String) :: baseContinuityForSpace
  !! Continuity of basis function in space
  TYPE(String) :: baseInterpolationForSpace
  !! Interpolation of shape function in space
  TYPE(String) :: quadratureTypeForSpace
  !! Quadrature type in space
  INTEGER(I4B) :: quadTypeForSpace
  !! Quadrature type in space
  INTEGER(I4B) :: ipTypeForSpace = 0
  !! Interpolation grid used for Lagrange polynomials
  INTEGER(I4B) :: basisTypeForSpace = 0
  !! Basis type for space
  REAL(DFP) :: alphaForSpace = 0.0_DFP
  !! Parameter for Jacobi polynomials in space
  REAL(DFP) :: betaForSpace = 0.0_DFP
  !! Parameter for Jacobi polynomials in space
  REAL(DFP) :: lambdaForSpace = 0.0_DFP
  !! Parameter for Ultraspherical polynomials in  space
  TYPE(String) :: baseContinuityForTime
  !! Continuity of basis function in time in time domain
  TYPE(String) :: baseInterpolationForTime
  !! Interpolation of basis function in time
  TYPE(String) :: quadratureTypeForTime
  !! Quadrature type in time
  INTEGER(I4B) :: quadTypeForTime
  !! Quadrature type in time
  INTEGER(I4B) :: ipTypeForTime
  !! Interpolation grid used for Lagrange polynomials
  INTEGER(I4B) :: basisTypeForTime
  !! Basis type for space
  REAL(DFP) :: alphaForTime = 0.0_DFP
  !! Parameter for Jacobi polynomials in space
  REAL(DFP) :: betaForTime = 0.0_DFP
  !! Parameter for Jacobi polynomials in space
  REAL(DFP) :: lambdaForTime = 0.0_DFP
  !! Parameter for Ultraspherical polynomials in space
  TYPE(String) :: domainFile
  !! Domain file name
  TYPE(QuadraturePoint_), ALLOCATABLE :: quadratureForSpace(:)
  !! Quadrature points in space element
  !! The size of quadratureForSpace is same as the total number of
  !! mesh in the domain
  TYPE(QuadraturePoint_) :: quadratureForTime
  !! Quadrature points in time element
  !! INFO: This is used in space-time computation
  TYPE(FiniteElementPointer_), ALLOCATABLE :: cellFE(:)
  !! Cell finite element
  TYPE(FiniteElementPointer_), ALLOCATABLE :: linCellFE(:)
  !! Linear cell finite element
  TYPE(FiniteElementPointer_), ALLOCATABLE :: facetFE(:)
  !! Facet finite element
  TYPE(FiniteElementPointer_), ALLOCATABLE :: linFacetFE(:)
  !! Linear facet finite element
  TYPE(FiniteElementPointer_), ALLOCATABLE :: edgeFE(:)
  !! Edge finite element
  TYPE(FiniteElementPointer_), ALLOCATABLE :: linEdgeFE(:)
  !! Linear edge finite element
  TYPE(FiniteElement_) :: timeFE
  !! Time finite element
  TYPE(FiniteElement_) :: linTimeFE
  !! Linear time finite element
  TYPE(ElemshapeData_) :: linTimeElemSD
    !! Element shape data on linear time element #STFEM
  TYPE(ElemshapeData_) :: timeElemSD
    !! Element shape data on time element #STFEM
  TYPE(ElemshapeData_), ALLOCATABLE :: linSpaceElemSD(:)
    !! Element shape data on linear space (simplex) element
  TYPE(ElemshapeData_), ALLOCATABLE :: spaceElemSD(:)
    !! Element shape data on space element
  TYPE(STElemshapeData_), ALLOCATABLE :: stelemsd(:, :)
    !! Element shape data on space-time element
END TYPE
```

</div>
</details>

### `isInitiated`

This is set to true when the kernel is initiated.

### `isCommonDomain`

This is set to true when single domain is used for several physical variables. This is applicable to multi-physics problems, only.

### `name`

It is the name of the kernel

### `engine`

Linear solver engine name, following engines are possible:

- `NATIVE_SERIAL`
- `NATIVE_OMP`
- `NATIVE_MPI`
- `LIS_SERIAL`
- `LIS_OMP`
- `LIS_MPI`
- `PETSC`

:::info
Default engine is `NATIVE_SERIAL`
:::

### `coordinateSystem`

Spatial coordinate type and spatial dimension of partial differential equations.

Possible options are given below.

- `KERNEL_1D_H`
- `KERNEL_1D_V`,
- `KERNEL_2D`,
- `KERNEL_2D_AXISYM`,
- `KERNEL_3D`,
- `KERNEL_2D_PLANE_STRESS`,
- `KERNEL_2D_PLANE_STRAIN`

### `timeDependency`

It represents the time dependency of partial differential equations.

- `KERNEL_STATIC`,
- `KERNEL_PSEUDOSTATIC`,
- `KERNEL_TRANSIENT`

### `nsd`

Spatial dimension of the problem, it will be determined from `coordinateSystem`

### `nnt`

Number of nodes in time domain, required for space-time finite element computation.

### `tdof`

Total number of degree of freedom per node. <span class="badge badge--success"> Internal use only </span>

### `normRHS`

Norm of right-hand side vector. <span class="badge badge--success"> Internal use only </span>

### `dt`

Time step size used in the kernel. This is needed in transient case only.

### `startTime`

present time of simulation needed in transient case

### `endTime`

Final time of simulation, needed in transient case

### `currentTime`

Current time, needed in transient case

### `lengthScale`

Length scale of the problem

### `currentTimeStep`

present time step number, needed in transient case

### `totalTimeStep`

total number of time steps, needed in transient case

### `postProcessOpt`

post-processing options

### `gravity`

Acceleration vector due to gravity

### `iterData`

contains information about the iteration ; such maximum number of iteration, `ConvergenceType`, `toleranceIn`, and many others, see [IterationData](/docs-api/IterationData/IterationData_)

### `elemToMatId`

element number to material mapping, `elemToMatID( iel, POROUS_MATERIAL_ID )` denotes the porous material type assigned to `iel`. Similarly, `elemToMatID( iel, FLUID_MATERIAL_ID )` denotes the fluid material type assigned to `iel`

### `linsol`

Linear iterative solver

### `tanmat`

Global tangent matrix

### `refTimeElem`

reference element for time domain

### `refLinTimeElem`

reference element for time domain

### `baseContinuityForSpace`

Continuity of basis function for pressure and velocity field

### `baseInterpolationForSpace`

Interpolation of shape function for pressure and velocity field

### `quadratureTypeForSpace`

Quadrature type for pressure field

### `baseContinuityForTime`

Continuity of basis function for pressure field in time domain

### `baseInterpolationForTime`

Interpolation of basis function for pressure field in time domain

### `quadratureTypeForTime`

Quadrature type for pressure field in time domain
