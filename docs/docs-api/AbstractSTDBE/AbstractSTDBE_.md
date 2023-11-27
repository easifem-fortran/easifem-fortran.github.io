# Structure

`AbstractSTDBE_` class is an abstract class, which is designed for solving the transient Darcy-Brinkman Equation by using the space-time finite element method.

`AbstractSTDBE_` is a child of [AbstractKernel\_](../AbstractKernel/AbstractKernel_.md).

The concrete class of `AbstractSTDBE_` has the name of `STDBEXYZ_` where `X,Y,Z` are a numbers.

`X` denotes the finite element technique used by the kernel.

- Equal order interpolation for pressure and velocity with VMS stabilization
- Equal order interpolation for pressure and velocity with partial VMS terms
- Equal order interpolation for pressure and velocity with SUPG stabilization
- Mixed FEM type 1
- Mixed FEM type 2
- etc.

`Y` denotes how we solve the system of linear equations

- Y=1, for coupled solution of system of linear equations
- Y=2, for uncoupled (iterative methods) of system of linear equations

`Z` denotes the material properties

- Z=1 material properties remains constant in the mesh
- Z=2, material properties can change with both space and time in the mesh
- Z=3, material properties can only change with time
- Z=4, material properties can only change with space
- Z=5, material porperties are given by Random field variable

## Getting Started

- [ ] TODO Add getting started guide for [AbstractSTDBE\_](AbstractSTDBE_.md) kernel.

## Structure

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractKernel_) :: AbstractSTDBE_
  LOGICAL(LGT) :: isCommonDomain = .TRUE.
  INTEGER(I4B) :: stabParamOption = 1
  REAL(DFP) :: rtoleranceForPressure = 1.0D-6
  REAL(DFP) :: rtoleranceForVelocity = 1.0D-6
  REAL(DFP) :: atoleranceForPressure = 1.0D-6
  REAL(DFP) :: atoleranceForVelocity = 1.0D-6
  REAL(DFP) :: toleranceForSteadyState = 1.0E-8
  REAL(DFP) :: pressureError0 = 0.0_DFP
  REAL(DFP) :: velocityError0 = 0.0_DFP
  REAL(DFP) :: pressureError = 0.0_DFP
  REAL(DFP) :: velocityError = 0.0_DFP
  LOGICAL(LGT) :: ismaterialInterfaces = .FALSE.
  INTEGER(I4B), ALLOCATABLE :: materialInterfaces(:)
  TYPE(DomainConnectivity_), ALLOCATABLE :: matIfaceConnectData(:)
  TYPE(String) :: domainFileForPressure
  TYPE(String) :: domainFileForVelocity
  INTEGER(I4B) :: tPorousMaterials = 0
  INTEGER(I4B) :: tFluidMaterials = 0
  TYPE(PorousMaterialPointer_), ALLOCATABLE :: porousMaterial(:)
  TYPE(FluidMaterialPointer_), ALLOCATABLE :: fluidMaterial(:)
  TYPE(MeshSelection_), ALLOCATABLE :: PorousMaterialToMesh(:)
  TYPE(MeshSelection_), ALLOCATABLE :: FluidMaterialToMesh(:)
  TYPE(String) :: baseContinuityForPressure
  TYPE(String) :: baseInterpolationForPressure
  TYPE(String) :: quadratureTypeForPressure
  TYPE(String) :: baseContinuityForVelocity
  TYPE(String) :: baseInterpolationForVelocity
  TYPE(String) :: quadratureTypeForVelocity
  TYPE(DirichletBCPointer_), ALLOCATABLE :: DBCForPressure(:)
  TYPE(DirichletBCPointer_), ALLOCATABLE :: DBCForVelocity(:)
  TYPE(NeumannBCPointer_), ALLOCATABLE :: NBCForPressure(:)
  TYPE(NeumannBCPointer_), ALLOCATABLE :: NBCForVelocity(:)
  CLASS(Domain_), POINTER :: DomForPressure => NULL()
  CLASS(Domain_), POINTER :: DomForVelocity => NULL()
  CLASS(DomainConnectivity_), POINTER :: domConnect => NULL()
  TYPE(STScalarMeshField_), ALLOCATABLE :: tausups_cell(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: nulsic_cell(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: hrgn_cell(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: hrpgn_cell(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: porosity(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: dynamicViscosity(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: permeability(:)
  TYPE(STScalarMeshField_), ALLOCATABLE :: massDensity(:)
  CLASS(BlockNodeField_), POINTER :: rhs => NULL()
  CLASS(BlockNodeField_), POINTER :: sol => NULL()
  CLASS(VectorField_), POINTER :: nodeCoord => NULL()
  CLASS(STVectorField_), POINTER :: stNodeCoord => NULL()
  CLASS(VectorField_), POINTER :: nodeCoordForPressure => NULL()
  CLASS(STVectorField_), POINTER :: stNodeCoordForPressure => NULL()
  CLASS(VectorField_), POINTER :: nodeCoordForVelocity => NULL()
  CLASS(STVectorField_), POINTER :: stNodeCoordForVelocity => NULL()
  CLASS(STScalarField_), POINTER :: pressure => NULL()
  CLASS(STVectorField_), POINTER :: velocity => NULL()
  CLASS(ScalarField_), POINTER :: pressure0 => NULL()
  CLASS(VectorField_), POINTER :: velocity0 => NULL()
  PROCEDURE(STDBE_ComputeStabParam), POINTER, PASS(obj) :: &
    & ComputeStabParam => NULL()
```

!!! note "Inheritence"
For data inherited from the see [[../AbstractKernel/AbstractKernel_]].

The meaning of the fields of `AbstractSTDBE_` is given below.

- `isCommonDomain`, True if the domain is common for pressure and velocity
- `stabParamOption`, Stabilization parameter option
- `rtoleranceForPressure`, tolerance for pressure
- `rtoleranceForVelocity`, tolerance for velocity
- `atoleranceForPressure`, tolerance for pressure
- `atoleranceForVelocity`, tolerance for velocity
- `toleranceForSteadyState`, toleranceForSteadyState
- `pressureError0`, initial error for checking convergence in pressure field
- `velocityError0`, initial error for checking convergence in velocity field
- `ressureError`, current error for checking convergence in pressure field
- `velocityError`, current error for checking convergence in velocity field
- `ismaterialInterfaces`, True if `materialInterfaces` is allocated
- `materialInterfaces`, MeshID of PorousFluidInterace
- `matIfaceConnectData`, FacetToCellData for each materialInterface mesh The size of `matIfaceConnectData` is same as the size of `materialInterfaces`
- `domainFileForPressure`, domain file name for pressure
- `domainFileForVelocity`, domain file name for velocity
- `tPorousMaterials`, Total number of porous materials
- `tFluidMaterials`, Total number of fluid materials
- `porousMaterial`, Pointer to porous materials, the size is
- `fluidMaterial`, Pointer to the fluid materials
- `porousMaterialToMesh`, Map porous media to the mesh subregion. The size of PorousMaterialToMesh is equal to
- `fluidMaterialToMesh`, Map porous media to the mesh subregion. The size of FluidMaterialToMesh is equal to tFluidMaterials
- `baseContinuityForPressure`, Continuity of basis function for pressure field
- `baseInterpolationForPressure`, Interpolation of shape function for pressure field
- `quadratureTypeForPressure`, Quadrature type for pressure field
- `baseContinuityForVelocity`, Continuity of basis function for velocity field
- `baseInterpolationForVelocity`, Interpolation of shape function for velocity field
- `quadratureTypeForVelocity`, Quadrature type for velocity field
- `dbcForPressure`, Dirichlet boundary condition for pressure
- `dbcForVelocity`, Dirichlet boundary condition for velocity Quadrature type for pressure field in time domain
- `nbcForPressure`, Neumann boundary condition for pressure
- `nbcForVelocity`, Dirichlet boundary condition for velocity
- `domForPressure`, Domain for pressure field
- `domForVelocity`, Domain for velocity field
- `domConnect`, Domain connectivity
- `tausups_cell`, tausups for cell
- `nulsic_cell`, nulsic for cell
- `hrgn_cell`, hrgn for cell
- `hrpgn_cell`, hrpgn for cell
- `porosity`, Porosity field
- `dynamicViscosity`, Dynamic viscosity
- `permeability`, Permeability
- `massDensity`, mass density
- `rhs`, Block vector field for space-time vectors and multi-physics apps
- `sol`, Block vector field for space-time vectors and multi-physics apps
- `nodeCoord`, Vector field for nodal coordinates for pressure field
- `stNodeCoord`, Vector field for space-time nodal coordinates for pressure field
- `nodeCoordForPressure`, Vector field for nodal coordinates for pressure field
- `stNodeCoordForPressure`, Vector field for space-time nodal coordinates for pressure field
- `nodeCoordForVelocity`, Vector field for nodal coordinates for velocity
- `stNodeCoordForVelocity`, Vector field for space-time nodal coordinates for velocity
- `pressure`, Space time nodal values of pressure field
- `velocity`, Space time nodal values of velocity field
- `pressure0`, nodal values of pressure at the starting time
- `velocity0`, nodal values of velocity at starting time
- `ComputeStabParam`, This procedure pointer solves the problem

## Methods

### Deferred Methods

- [ ] isSteadyState, Returns true if the steady state
- [ ] ApplyDirichletBC, Apply dirichlet boundary condition

### Implemented Methods

- [ ] AddSurrogate, Add surrogate to the module error handler
- [ ] DEALLOCATE Deallocate memory occupied by `AbstractSTDBE_`
- [ ] Import, Import the kernel
- [ ] Export, export the kernel
- [ ] Display, display the kernel
- [ ] WriteData_hdf5, Write data in hdf5 format
- [ ] WriteData_vtk, Write data in vtk format
- [ ] AddPorousMaterial
- [ ] AddFluidMaterial
- [ ] AddPressureDirichletBC
- [ ] AddVelocityDirichletBC
- [ ] GetPressureDirichletBCPointer
- [ ] GetVelocityDirichletBCPointer
- [ ] AddPressureNeumannBC
- [ ] AddVelocityNeumannBC
- [ ] GetPressureNeumannBCPointer
- [ ] GetVelocityNeumannBCPointer
- [ ] Set

## Submodules

- `AbstractSTDBE_Class@ConstructorMethods.F90`
- `AbstractSTDBE_Class@GetMethods.F90`
- `AbstractSTDBE_Class@InitiateFieldsMethods.F90`
- `AbstractSTDBE_Class@SetMethods.F90`
- `AbstractSTDBE_Class@IOMethods.F90`
- `AbstractSTDBE_Class@AssembleMethods.F90`
- `AbstractSTDBE_Class@AssembleTanmatMethods.F90`
- `AbstractSTDBE_Class@AssembleRHSMethods.F90`
- `AbstractSTDBE_Class@SolveMethods.F90`
- `AbstractSTDBE_Class@UpdateMethods.F90`
- `AbstractSTDBE_Class@ConvergenceMethods.F90`
- `AbstractSTDBE_Class@BCMethods.F90`
- `AbstractSTDBE_Class@ApplyDirichletBCMethods.F90`
- `AbstractSTDBE_Class@MaterialMethods.F90`
