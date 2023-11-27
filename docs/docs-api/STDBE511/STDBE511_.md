# Introduction

- 5: VMS based stabilized STFEM with equal order interpolation
- 1: pressure-velocity are solved in coupled manner, block structure of linear solver
- 1: Meshwise constant material properties

## Stabilization parameters

### ComputeStabParam1

$$
\frac{1}{\tau_{SUPS}^{2}}=\frac{1}{\tau_{SUGN12}^{2}}+\frac{1}{\tau_{SUGN3}^{2}}+\frac{1}{\tau_{Darcy}^{2}}
$$

$$
\frac{1}{\tau_{SUGN12}}=\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\frac{\partial N^{I}T_{a}}{\partial t}+\bar{\mathbf{v}}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\tau_{SUGN3}=\frac{\rho h_{RGN}^{2}}{4\mu},\quad\tau_{Darcy}=\frac{\rho K_{0}}{2\mu}
$$

$$
\frac{1}{h_{RGN}}=\frac{1}{2}\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\boldsymbol{r}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\boldsymbol{r}=\frac{\nabla\left\Vert \mathbf{\bar{v}}\right\Vert }{\left\Vert \nabla\left\Vert \mathbf{\bar{v}}\right\Vert \right\Vert },\quad\nu_{LSIC}=\tau_{SUPS}\Vert\bar{\boldsymbol{v}}\Vert^{2}
$$

### ComputeStabParam2

$$
\frac{1}{\tau_{SUPS}^{2}}=\frac{1}{\tau_{SUGN12}^{2}}+\frac{1}{\tau_{SUGN3}^{2}}+\frac{1}{\tau_{Darcy}^{2}}
$$

$$
\frac{1}{\tau_{SUGN12}}=\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\frac{\partial N^{I}T_{a}}{\partial t}+\bar{\mathbf{v}}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\tau_{SUGN3}=\frac{\rho h_{RGN}^{2}}{4\mu},\quad\tau_{Darcy}=\frac{\rho K_{0}}{2\mu}
$$

$$
\frac{1}{h_{RGN}}=\frac{1}{2}\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\boldsymbol{r}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\boldsymbol{r}=\frac{\nabla\left\Vert \mathbf{\bar{v}}\right\Vert }{\left\Vert \nabla\left\Vert \mathbf{\bar{v}}\right\Vert \right\Vert },\quad\nu_{LSIC}=\frac{h_{RGN}^{2}}{\tau_{SUPS}}
$$

### ComputeStabParam3

- For the fluid, we use definition 1
- For porous medium we use definition 2

### ComputeStabParam4

- For the fluid, we use definition 1
- For porous medium we use definition following definition of $\nu_{LSIC}$.

$$
\nu_{LSIC}=\frac{h_{RGN}^{2}}{\tau_{SUPS}}
$$

### ComputeStabParam5

- Fluid: Definition 1
- Porous medium we use following definition:

$$
\nu_{LSIC}=\frac{h_{RGN}^{2}}{\tau_{SUPS}}
$$

$$
\frac{1}{\tau_{SUPS}^{2}}=\frac{1}{\tau_{SUGN12}^{2}}+\frac{1}{\tau_{SUGN3}^{2}}
$$

### Some element lengths

$$
\frac{1}{h_{RGN}}=\frac{1}{2}\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\boldsymbol{r}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

$$
\boldsymbol{r}=\frac{\nabla\left\Vert \mathbf{\bar{v}}\right\Vert }{\left\Vert \nabla\left\Vert \mathbf{\bar{v}}\right\Vert \right\Vert },
$$

$$
\boldsymbol{r}_{p}=\frac{\nabla\bar{p}}{\left\Vert \nabla\bar{p}\right\Vert }
$$

$$
\frac{1}{h_{RPGN}}=\frac{1}{2}\sum_{a=1}^{n_{nt}}\sum_{I=1}^{n_{ns}}\left|\boldsymbol{r}_{p}\cdot\nabla\left(N^{I}T_{a}\right)\right|
$$

## Getting-Started

## Structure

```fortran
TYPE, EXTENDS(AbstractSTDBE_) :: STDBE511_
```

## Methods

Following methods have been implemented:

- `AddSurrogate`, Add surrogate to the exception handler of the module
- `CheckEssentialParam` check essential parameters
- `Initiate`, Initiate the kernels
- `InitiateFields`
- `Set`
- `ApplyDirichletBC`
- `Assemble`
- `AssembleRHS`
- `AssembleTanmat`
- `Solve`
- `Update`
- `UpdateIteration`
- `isConverged`
- `isSteadyState`
- `ComputeStabParam`

## Submodules

Methods are implemented in following submodules.

- `STDBE511_Class@ConstructorMethods.F90`
- `STDBE511_Class@GetMethods.F90`
- `STDBE511_Class@InitiateFieldsMethods.F90`
- `STDBE511_Class@SetMethods.F90`
- `STDBE511_Class@IOMethods.F90`
- `STDBE511_Class@AssembleMethods.F90`
- `STDBE511_Class@AssembleTanmatMethods.F90`
- `STDBE511_Class@AssembleRHSMethods.F90`
- `STDBE511_Class@SolveMethods.F90`
- `STDBE511_Class@UpdateMethods.F90`
- `STDBE511_Class@ConvergenceMethods.F90`
- `STDBE511_Class@BCMethods.F90`
- `STDBE511_Class@ApplyDirichletBCMethods.F90`
- `STDBE511_Class@MaterialMethods.F90`
- `STDBE511_Class@StabParamMethods.F90`

## ConstructorMethods

### SetSTDBE511Param@ConstructorMethods

This subroutine sets the essential parameter in the kernel

```fortran
INTERFACE
  MODULE SUBROUTINE SetSTDBE511Param( &
    & param, &
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
    & tPorousMaterials, &
    & tFluidMaterials, &
    & tDirichletBCForPressure, &
    & tDirichletBCForVelocity, &
    & baseInterpolationForSpace, &
    & baseContinuityForSpace, &
    & quadratureTypeForSpace, &
    & baseContinuityForTime,&
    & baseInterpolationForTime, &
    & quadratureTypeForTime)
    !!
    TYPE(ParameterList_), INTENT(INOUT) :: param
    INTEGER(I4B), INTENT(IN) :: stabParamOption
    CHARACTER(LEN=*), INTENT(IN) :: domainFile
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    CHARACTER(LEN=*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: coordinateSystem
    INTEGER(I4B), INTENT(IN) :: nnt
    REAL(DFP), INTENT(IN) :: dt
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    REAL(DFP), INTENT(IN) :: endTime
    INTEGER(I4B), INTENT(IN) :: maxIter
    REAL(DFP), INTENT(IN) :: rtoleranceForPressure
    REAL(DFP), INTENT(IN) :: rtoleranceForVelocity
    REAL(DFP), INTENT(IN) :: atoleranceForPressure
    REAL(DFP), INTENT(IN) :: atoleranceForVelocity
    REAL(DFP), INTENT(IN) :: toleranceForSteadyState
    INTEGER(I4B), INTENT(IN) :: tPorousMaterials
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tFluidMaterials
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForPressure
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForVelocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
  END SUBROUTINE SetSTDBE511Param
END INTERFACE
```

The meaning of each parameter is given below:

- `param`, [[ParameterList_]] to be constructed
- `stabParamOption`, stabilization parameter see, [[#Stabilization parameters]]
- `domainFile`, Domain file name for pressure and velocity
- `materialInterfaces`, porous-fluid-interface
- `engine`, engine
- `coordinateSystem`, coordinate system
- `nnt`, number of nodes in time
- `dt`, Initial time increment
- `startTime`, Starting time t0 of simulation, default=0.0
- `endTime`, Final time of simulation
- `maxIter`, maximum iteration for Newton-method or inexact Newton methods
- `rtoleranceForPressure`, relative tolerance for convergence in pressure
- `rtoleranceForVelocity`, relative tolerance for convergence in velocity
- `atoleranceForPressure`, absolute tolerance for convergence in pressure
- `atoleranceForVelocity`, absolute tolerance for convergence in velocity
- `toleranceForSteadyState`, tolerance for steady state
- `tPorousMaterials`, total number of porous materials
- `tFluidMaterials`, total number of fluid materials; default=1
- `tDirichletBCForPressure`, total number of Dirichlet domain for pressure, default=0
- `tDirichletBCForVelocity`, total number of Dirichlet domain for velocity, default=0
- `baseInterpolationForSpace`, type of interpolation function used for basis function
- `baseContinuityForSpace`, type of continuity of basis function for pressure
- `quadratureTypeForSpace`, type of quadrature for pressure field
- `baseInterpolationForTime`, type of interpolation function used for Time
- `baseContinuityForTime`, type of continuity of basis function for Time
- `quadratureTypeForTime`, type of quadrature for time

### AddSurrogate

Add surrogate to the module [[ExceptionHandler_]]

```fortran
INTERFACE
  MODULE SUBROUTINE AddSurrogate(obj, UserObj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    TYPE(ExceptionHandler_), INTENT(IN) :: UserObj
  END SUBROUTINE AddSurrogate
END INTERFACE
```

### CheckEssentialParam

Checks the essential parameters in the param of kernels

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param, prefix)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```

### Initiate

- This routine initiates the kernel.
- Here `param` contains all the necessary components for initiating the state of the kernel.
- Here `dom` is an instance of [[Domain_]], and it acts as a target of the kernel's domain pointer `domForPressure` and `domForVelocity`.
- `domains` is a one dimensional array of [[Domain_]] pointer
- The size of `domains` should be 2
- `domains(1)` acts as target for `domForVelocity`.
- `domains(2)` acts as a target for `domForPressure`.

No additional, memory is allocated for it. In this way, several kernels can work on a common domain.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, dom, domains)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE Initiate
END INTERFACE
```

## GetMethods

Currently, there are no methods in these submodules.

## InitiateFieldsMethods

### InitiateFields

Initiate the matrix and vector fields for kernel. These methods are called internally when we call set method [[#Set]].

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFields(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFields
END INTERFACE
```

This routine performs following tasks.

- `tanmat` instance of [[BlockMatrixField_]]
- Set precondition to ILUD (incomplete LU decomposition)
- Pass information of `tanmat` to `linsol`
- `rhs` instance of [[BlockNodeField_]]
- `sol` instance of [[BlockNodeField_]]
- `nodeCoord` instance of [[VectorField_]]
- `stNodeCoord` instance of [[../STVectorField/STVectorField_]]
- `pressure` instance of [[STScalarField_]]
- `velocity` instance of [[../STVectorField/STVectorField_]]
- `pressure0` instance of [[ScalarField_]]
- `velocity0` instance of [[VectorField_]]
- `linssol` set Dirichlet boundary condition indices by calling [[LinSolver_#SetDirichletBCIndices]]

## SetMethods

### Set

This routine is the most important one. This routine should be called before starting the main computation. After initiating the kernel, we have all the information to construct the state of the kernel. This routine checks all the options. This routine, then sets pointer to the appropriate pointers.

Internally this routine calls:

- [[Abstract#Set]]
- [[#InitiateFields]]

This routine also fixes the procedure pointer: `ComputeStabParam`

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE Set
END INTERFACE
```

## IOMethods

Currently, there are no methods in this submodules. Please see, [[../AbstractSTDBE/AbstractSTDBE_#IOMethods]]

## AssembleMethods

### Assemble

This routine should be called after calling [[#AssembleTanmat]] and [[#AssembleRHS]] as it computes the norm of `rhs`, and precondition of tangent matrix.

```fortran
INTERFACE
  MODULE SUBROUTINE Assemble(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE Assemble
END INTERFACE
```

## AssembleTanmatMethods

### AssembleTanmat

Assemble tangent matrix.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleTanMat(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleTanMat
END INTERFACE
```

## AssembleRHSMethods

### AssembleRHS

Assemble `rhs`.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleRHS(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleRHS
END INTERFACE
```

## SolveMethods

### Solve

This subroutine solves the system of linear equation.

```fortran
INTERFACE
  MODULE SUBROUTINE Solve(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE Solve
END INTERFACE
```

## UpdateMethods

### UpdateIteration

This subroutine update the state of the kernel during an iteration.

- It extracts `velocity` from `sol`
- It extracts `pressure` from `sol`

If `reset` is true then it sets `sol` to zero.

```fortran
INTERFACE
  MODULE SUBROUTINE UpdateIteration(obj, reset)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE UpdateIteration
END INTERFACE
```

### Update

This subroutine update the state of the kernel after convergence.

- Update `currentTime`
- Get `velocity0` from `velocity`
- Get `pressure0` from `pressure`

If `reset` is true then reset `velocity`,  `pressure` and `sol` to zero.

```fortran
INTERFACE
  MODULE SUBROUTINE Update(obj, reset)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE Update
END INTERFACE
```

## ConvergenceMethods

### IsConverged

It returns true if the iteration in the kernel is converged

```fortran
INTERFACE
  MODULE FUNCTION IsConverged(obj) RESULT(Ans)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: Ans
  END FUNCTION IsConverged
END INTERFACE
```

### IsSteadyState

Returns true if steady state is achieved

```fortran
INTERFACE
  MODULE FUNCTION IsSteadyState(obj) RESULT(Ans)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION IsSteadyState
END INTERFACE
```

## BCMethods

Currently, there are no methods, see [[../AbstractSTDBE/AbstractSTDBE_#BCMethods]] for implementations.

## ApplyDirichletBCMethods

### ApplyDirichletBC

```fortran
INTERFACE
  MODULE SUBROUTINE ApplyDirichletBC(obj)
    CLASS(STDBE511_), INTENT(INOUT) :: obj
  END SUBROUTINE ApplyDirichletBC
END INTERFACE
```

## MaterialMethods

Currently, there are no methods, see [[../AbstractSTDBE/AbstractSTDBE_#MaterialMethods]] for implementations.

## StabParamMethods
