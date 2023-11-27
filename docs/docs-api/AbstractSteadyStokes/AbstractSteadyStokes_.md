# Structure

The structure of `AbstractSteadyStokes_` is given below.

```fortran
TYPE, ABSTRACT, EXTENDS(AbstractKernel_) :: AbstractSteadyStokes_
  LOGICAL(LGT) :: isConservativeForm = .TRUE.
  LOGICAL(LGT) :: isCommonDomain = .TRUE.
  LOGICAL(LGT) :: isSubscalePressure = .TRUE.
  LOGICAL(LGT) :: isBoundarySubscale = .FALSE.
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
  INTEGER(I4B) :: refPressureNode = 0
  REAL(DFP) :: refPressure = 0.0_DFP
  INTEGER(I4B), ALLOCATABLE :: materialInterfaces(:)
  TYPE(DomainConnectivity_), ALLOCATABLE :: matIfaceConnectData(:)
  TYPE(String) :: domainFileForPressure
  TYPE(String) :: domainFileForVelocity
  INTEGER(I4B) :: tFluidMaterials = 0
  TYPE(FluidMaterialPointer_), ALLOCATABLE :: fluidMaterial(:)
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
  CLASS(Domain_), POINTER :: domForPressure => NULL()
  CLASS(Domain_), POINTER :: domForVelocity => NULL()
  CLASS(DomainConnectivity_), POINTER :: domConnect => NULL()
  TYPE(ScalarMeshField_), ALLOCATABLE :: tausups_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: nulsic_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: hv_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: hp_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: hmax_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: hmin_cell(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: dynamicViscosity(:)
  TYPE(ScalarMeshField_), ALLOCATABLE :: massDensity(:)
  CLASS(BlockNodeField_), POINTER :: rhs => NULL()
  CLASS(BlockNodeField_), POINTER :: sol => NULL()
  CLASS(VectorField_), POINTER :: nodeCoord => NULL()
  CLASS(VectorField_), POINTER :: nodeCoordForPressure => NULL()
  CLASS(VectorField_), POINTER :: nodeCoordForVelocity => NULL()
  CLASS(ScalarField_), POINTER :: pressure => NULL()
  CLASS(ScalarField_), POINTER :: pressure0 => NULL()
  CLASS(VectorField_), POINTER :: velocity => NULL()
  CLASS(VectorField_), POINTER :: velocity0 => NULL()
  PROCEDURE(ComputeStabParam), POINTER, PASS(obj) :: &
    & ComputeStabParam => NULL()
```

Description of these variables is given below.

- `isConservativeForm` True if we are using conservative form
- `isCommonDomain` True if the domain is common for pressure and velocity, which means equal order interpolation
- `isSubscalePressure`, Only required when Variational Multiscale Methods are used for Equal order interpolations. If, True then we use subscale for pressure field
- `isBoundarySubscale`, Only needed when VMS is used for stabilized FEM. If true then we use subscale at the interelement boundary
- `stabParamOption`, Only needed when equal order interpolation is used. This option is for definition of stabilization parameter (`tau_supg`, `nuLSIC`, etc.)
- `rtoleranceForPressure` relative tolerance for convergence in pressure field
- `rtoleranceForVelocity` relative tolerance for convergence in velocity field
- `atoleranceForPressure` absolute tolerance for pressure
- `atoleranceForVelocity` absolute tolerance for velocity field
- `toleranceForSteadyState` tolerance for checking steady state
- `pressureError0` initial error for checking convergence in pressure field
- `velocityError0` initial error for checking convergence in velocity field
- `pressureError` current error for checking convergence in pressure field
- `velocityError` current error for checking convergence in velocity field
- `ismaterialInterfaces` True if materialInterfaces are allocated. We can have multiple fluids
- `refPressureNode` reference pressure node
- `refPressure` reference pressure at reference pressure node
- `materialInterfaces` Mesh ID of material interfaces
- `matIfaceConnectData` Facet to cell data for each materialInterface mesh. The size of matIfaceConnectData is same as the size of materialInterfaces
- `domainFileForPressure` domain file name for pressure
- `domainFileForVelocity` domain file name for velocity
- `tFluidMaterials` Total number of fluid materials
- `fluidMaterial` Pointer to the fluid materials
- `FluidMaterialToMesh` Map porous media to the mesh subregion. The size of FluidMaterialToMesh is equal to tFluidMaterials
- `baseContinuityForPressure` Continuity of basis function for pressure field
- `baseInterpolationForPressure` Interpolation of shape function for pressure field
- `quadratureTypeForPressure` Quadrature type for pressure field
- `baseContinuityForVelocity` Continuity of basis function for velocity field
- `baseInterpolationForVelocity` Interpolation of shape function for velocity field
- `quadratureTypeForVelocity` Quadrature type for velocity field
- `DBCForPressure` Dirichlet boundary condition for pressure
- `DBCForVelocity` Dirichlet boundary condition for velocity
- `NBCForPressure` Neumann boundary condition for pressure
- `NBCForVelocity` Dirichlet boundary condition for velocity
- `domForPressure` Domain for pressure field
- `domForVelocity` Domain for velocity field
- `domConnect` Domain connectivity, it contains cell to cell and node to node mapping between two domains.
- `tausups_cell` stabilization parameter for cell
- `nulsic_cell` $\nu_{LSIC}$ stabilization parameter for cell
- `hv_cell` element size, hRGN for velocity field
- `hp_cell` hRPGN for cell
- `hmax_cell` hmax for cell
- `hmin_cell` hmin for cell
- `dynamicViscosity` Dynamic viscosity (mu) of fluids
- `massDensity` mass density
- `rhs` Block vector field for containing generalized force terms of mass and linear momentum conservation equations
- `sol` Block vector field for space-time vectors and multi-physics apps
- `nodeCoord` Vector field for nodal coordinates for pressure field
- `nodeCoordForPressure` Vector field for nodal coordinates for pressure field
- `nodeCoordForVelocity` Vector field for nodal cozordinates for velocity
- `pressure` Nodal values of current pressure field
- `pressure0` Converged nodal values of pressure field
- `velocity` Nodal values of current pressure field
- `velocity0` Converged nodal values of velocity field
- `ComputeStabParam` This procedure pointer computes the stabilization parameter. Depending upon the value of stabParamOption the target of the pointer is decided. The interface is given below.

```fortran
ABSTRACT INTERFACE
  SUBROUTINE ComputeStabParam(obj)
    IMPORT :: AbstractSteadyStokes_
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE ComputeStabParam
END INTERFACE
```

## ConstructorMethods

### setAbstractSteadyStokesParam

This subroutine sets the essential parameter in the kernel

```fortran
INTERFACE
  MODULE SUBROUTINE setAbstractSteadyStokesParam( &
    & param, &
    & prefix, &
    & name, &
    & isCommonDomain, &
    & isConservativeForm, &
    & gravity, &
    & isSubscalePressure, &
    & isBoundarySubscale, &
    & stabParamOption, &
    & domainFile, &
    & domainFileForPressure, &
    & domainFileForVelocity, &
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
    & tNeumannBCForPressure, &
    & tNeumannBCForVelocity, &
    & baseInterpolationForSpace, &
    & baseContinuityForSpace, &
    & quadratureTypeForSpace, &
    & baseInterpolationForPressure, &
    & baseContinuityForPressure, &
    & quadratureTypeForPressure, &
    & baseInterpolationForVelocity, &
    & baseContinuityForVelocity, &
    & quadratureTypeForVelocity, &
    & baseContinuityForTime,&
    & baseInterpolationForTime, &
    & quadratureTypeForTime, &
    & postProcessOpt, &
    & refPressureNode, &
    & refPressure)
    !!
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(LEN=*), INTENT(IN) :: prefix
    CHARACTER(LEN=*), INTENT(IN) :: name
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isCommonDomain
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isConservativeForm
    REAL(DFP), OPTIONAL, INTENT(IN) :: gravity(3)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isSubscalePressure
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isBoundarySubscale
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: stabParamOption
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: domainFile
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: domainFileForPressure
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: domainFileForVelocity
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: materialInterfaces(:)
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: coordinateSystem
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nnt
    REAL(DFP), OPTIONAL, INTENT(IN) :: dt
    REAL(DFP), OPTIONAL, INTENT(IN) :: startTime
    REAL(DFP), OPTIONAL, INTENT(IN) :: endTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForPressure
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtoleranceForVelocity
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForPressure
    REAL(DFP), OPTIONAL, INTENT(IN) :: atoleranceForVelocity
    REAL(DFP), OPTIONAL, INTENT(IN) :: toleranceForSteadyState
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tFluidMaterials
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForPressure
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tDirichletBCForVelocity
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tNeumannBCForPressure
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: tNeumannBCForVelocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForPressure
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForPressure
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForPressure
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForVelocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForVelocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForVelocity
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForSpace
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseInterpolationForTime
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: baseContinuityForTime
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: quadratureTypeForTime
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: postProcessOpt
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: refPressureNode
    REAL(DFP), OPTIONAL, INTENT(IN) :: refPressure
  END SUBROUTINE setAbstractSteadyStokesParam
END INTERFACE
```

- `param` param stores the parameters
- `prefix` prefix is like name of directory inside param `xyz` variable will be stored inside `prefix/xyz`
- `name` name of the kernel
- `isCommonDomain` true if the domain for pressure and velocity are the same.
- `isConservativeForm` True if we are using conservative form
- `gravity` Acceleration due to gravity, default is zero. If gravity is zero then we use piezometric pressure. If gravity is nonzero then we use thermodynamic pressure
- `isSubscalePressure` If true then we consider the subscale pressure in stabilization
- `isBoundarySubscale` If true then we consider the subscale at interelement boundary
- `stabParamOption` Option for calculating stabilization-parameter tau $\tau$.
- `domainFile` Mesh/domain file for velocity and pressure. Use when pressure and velocity have common domain
- `domainFileForPressure` Mesh/domain file for pressure
- `domainFileForVelocity` Mesh/domain file for velocity
- `materialInterfaces` Mesh-id for material interfaces
- `engine` name of engine
- `coordinateSystem` Coordinate system
- `nnt` Number of nodes in time, default 1, has no effect, so ignore.
- `dt` Initial time step size, useful in case of nonlinear stokes flow
- `startTime` Starting time t0 of simulation, default=0.0
- `endTime` Final time of simulation, default is 0.0_DFP
- `maxIter` maximum iteration for Newton-method
- `rtoleranceForPressure` relative tolerance for pressure field
- `rtoleranceForVelocity` relative tolerance for velocity field
- `atoleranceForPressure` absolute tolerance for pressure
- `atoleranceForVelocity` absolute tolerance for velocity
- `toleranceForSteadyState` tolerance for steady state
- `tFluidMaterials` Total number of fluid materials; default=1
- `tDirichletBCForPressure` Total number of Dirichlet domain for pressure, default=0
- `tDirichletBCForVelocity` Total number of Dirichlet domain for velocity, default=0
- `tNeumannBCForPressure` Total number of Neumann domain for pressure, default=0
- `tNeumannBCForVelocity` Total number of Neumann domain for velocity, default=0
- `baseInterpolationForPressure` Type of interpolation function used for basis function
- `baseContinuityForPressure` Type of continuity of basis function for pressure
- `quadratureTypeForPressure` Type of quadrature for pressure field
- `baseInterpolationForVelocity` Type of interpolation function used for velocity
- `baseContinuityForVelocity` Type of continuity of basis function for velocity
- `quadratureTypeForVelocity` Type of quadrature for velocity field
- `baseInterpolationForSpace` Type of interpolation function used for velocity
- `baseContinuityForSpace` Type of continuity of basis function for velocity
- `quadratureTypeForSpace` Type of quadrature for velocity field
- `baseInterpolationForTime` Type of interpolation function used for Time
- `baseContinuityForTime` Type of continuity of basis function for Time
- `quadratureTypeForTime` Type of quadrature for time
- `postProcessOpt` Postprocessing option
- `refPressureNode` reference node number for pressure
- `refPressure` reference value of pressure.

### AddSurrogate

Add surrogate to the module [ExceptionHandler_](../ExceptionHandler/ExceptionHandler_.md)

```fortran
INTERFACE
  MODULE SUBROUTINE addSurrogate(obj, UserObj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ExceptionHandler_), INTENT(IN) :: UserObj
  END SUBROUTINE addSurrogate
END INTERFACE
```

```fortran
INTERFACE AbstractSteadyStokesAddSurrogate
  MODULE PROCEDURE addSurrogate
END INTERFACE AbstractSteadyStokesAddSurrogate
```

### Deallocate

This routine deallocates the data stored inside the kernel

```fortran
INTERFACE
  MODULE SUBROUTINE Deallocate(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```

```fortran
INTERFACE AbstractSteadyStokesDeallocate
  MODULE PROCEDURE Deallocate
END INTERFACE AbstractSteadyStokesDeallocate
```

### CheckEssentialParam

Check the essential parameters for defining the kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE checkEssentialParam(obj, param, prefix)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE checkEssentialParam
END INTERFACE
```

### Initiate

Initiate the kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, dom, domains)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE Initiate
END INTERFACE
```

```fortran
INTERFACE
  MODULE SUBROUTINE AbstractSteadyStokesInitiate(obj, param, prefix, &
    & dom, domains)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(LEN=*), INTENT(IN) :: prefix
    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom
    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)
  END SUBROUTINE AbstractSteadyStokesInitiate
END INTERFACE
```

---

## IOMethods

### Import

This rotuine imports the properties of the kernel, and then builds it. All the properties are mentioned in the HDF5 file. Domain `dom` is used as a target for kernel's domain pointer.

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, dom)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom
  END SUBROUTINE Import
END INTERFACE
```

### Export

This routine exports the kernel to [HDF5File_](../HDF5File/HDF5File_.md)

```fortran
INTERFACE
  MODULE SUBROUTINE Export(obj, hdf5, group)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```

### Display

This routine displays the content of the kernel on the screen

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitNo)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    CHARACTER(LEN=*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```

### WriteData_hdf5

This routine writes the data in the hdf5 file. Following data is written.

- velocity0
- pressure0
- tausups_cell
- nulsic_cell
- hv_cell
- hp_cell
- hmax_cell
- hmin_cell
- dynamicViscosity
- massDensity

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData_hdf5(obj, hdf5, group)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE WriteData_hdf5
END INTERFACE
```

### WriteData_vtk

This routine writes the data in the vtk file

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData_vtk(obj, vtk, group)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(VTKFile_), INTENT(INOUT) :: vtk
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE WriteData_vtk
END INTERFACE
```

## MaterialMethods

### AddFluidMaterial

- This routine adds Fluid material to the `AbstractSteadyStokes_:fluidMaterial`
- It also prepares `obj%FluidMaterialToMesh(materialNo)` and `obj%fluidMaterial(materialNo)`.
- `param` contains the parameters for constructing a FluidMaterial.
- `materialName` is the name of material, it should be `fluidMaterial`.
- `region` is an instance of [MeshSelection_](../MeshSelection/MeshSelection_.md).

:::caution
`materialNo` should be lesser than or equal to the total number of Fluid materials.
:::

```fortran
INTERFACE
  MODULE SUBROUTINE addFluidMaterial(obj, materialNo, materialName, &
    & param, region)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: materialNo
    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName
    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param
    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region
  END SUBROUTINE addFluidMaterial
END INTERFACE
```

## BCMethods

### AddPressureDirichletBC

- This routine sets the Dirichlet boundary condition for pressure field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel.
- It also makes the `obj%DBCForPressure(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for pressure field.

```fortran
INTERFACE
  MODULE SUBROUTINE addPressureDirichletBC(obj, dbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addPressureDirichletBC
END INTERFACE
```

### AddVelocityDirichletBC

- This routine sets the Dirichlet boundary condition for Velocity field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel.
- It makes `obj%DBCForVelocity(dbcNo)`
- `dbcNo` should be lesser than total dirichlet boundary condition for velocity field.

```fortran
INTERFACE
  MODULE SUBROUTINE addVelocityDirichletBC(obj, dbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addVelocityDirichletBC
END INTERFACE
```

### AddPressureNeumannBC

- This routine sets the Neumann boundary condition for pressure field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel.
- It makes `obj%NBCForPressure(nbcNo)`
- `nbcNo` should be lesser than total Neumann boundary condition for pressure field.

```fortran
INTERFACE
  MODULE SUBROUTINE addPressureNeumannBC(obj, nbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [DirichletBC_](DirichletBC_.md).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addPressureNeumannBC
END INTERFACE
```

### AddVelocityNeumannBC

- This routine sets the Neumann boundary condition for Velocity field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel.
- It makes `obj%NBCForVelocity(nbcNo)`
- `nbcNo` should be lesser than total Neumann boundary condition for velocity field.

```fortran
INTERFACE
  MODULE SUBROUTINE addVelocityNeumannBC(obj, nbcNo, param, boundary)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    TYPE(ParameterList_), INTENT(IN) :: param
    !! parameter for constructing [NeumannBC_](NeumannBC_).
    TYPE(MeshSelection_), INTENT(IN) :: boundary
    !! Boundary region
  END SUBROUTINE addVelocityNeumannBC
END INTERFACE
```

## SetMethods

### Set

- This routine is the most important one
- This routine should be called before starting the main computation.
- After initiating the kernel, we have all the information to construct the state of the kernel
- This routine checks all the options
- This routine, then sets pointer to the appropriate pointers.

This routine calls InitiateFields method

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Set
END INTERFACE
```

```fortran
INTERFACE AbstractSteadyStokesSet
  MODULE PROCEDURE Set
END INTERFACE AbstractSteadyStokesSet
```

## GetMethods

### GetPressureDirichletBCPointer

- This routine returns the pointer to Dirichlet boundary condition of pressure field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel, that is `obj%DBCForPressure(dbcNo)%ptr`.
- After obtaining the Dirichlet boundary condition pointer, user can set the
boundary condition
- `dbcNo` should be lesser than total dirichlet boundary condition.

```fortran
INTERFACE
  MODULE FUNCTION getPressureDirichletBCPointer(obj, dbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION getPressureDirichletBCPointer
END INTERFACE
```

### GetVelocityDirichletBCPointer

- This routine returns the pointer to Dirichlet boundary condition of Velocity field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel, that is `obj%DBCForVelocity(dbcNo)%ptr`.
- After obtaining the Dirichlet boundary condition pointer, user can set the boundary condition
- `dbcNo` should be lesser than total dirichlet boundary condition.

```fortran
INTERFACE
  MODULE FUNCTION getVelocityDirichletBCPointer(obj, dbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: dbcNo
    !! Dirichlet boundary nunber
    CLASS(DirichletBC_), POINTER :: ans
  END FUNCTION getVelocityDirichletBCPointer
END INTERFACE
```

### GetPressureNeumannBCPointer

- This routine returns the pointer to Neumann boundary condition of pressure field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel, that is `obj%NBCForPressure(nbcNo)%ptr`.
- After obtaining the Neumann boundary condition pointer, user can set the boundary condition
- `nbcNo` should be lesser than total Neumann boundary condition.

```fortran
INTERFACE
  MODULE FUNCTION getPressureNeumannBCPointer(obj, nbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    CLASS(NeumannBC_), POINTER :: ans
  END FUNCTION getPressureNeumannBCPointer
END INTERFACE
```

### GetVelocityNeumannBCPointer

- This routine returns the pointer to Neumann boundary condition of Velocity field in [AbstractSteadyStokes_](AbstractSteadyStokes_.md) kernel, that is `obj%NBCForVelocity(nbcNo)%ptr`.
- After obtaining the Neumann boundary condition pointer, user can set the boundary condition
- `nbcNo` should be lesser than total Neumann boundary condition.

```fortran
INTERFACE
  MODULE FUNCTION getVelocityNeumannBCPointer(obj, nbcNo) RESULT(ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: nbcNo
    !! Neumann boundary nunber
    CLASS(NeumannBC_), POINTER :: ans
  END FUNCTION getVelocityNeumannBCPointer
END INTERFACE
```

## ConvergenceMethods

### IsSteadyState

Returns true if steady state is achieved.

```fortran
INTERFACE
  MODULE FUNCTION isSteadyState(obj) RESULT(Ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isSteadyState
END INTERFACE

```

### IsConverged

Returns true if steady state is achieved.

```fortran
INTERFACE
  MODULE FUNCTION isConverged(obj) RESULT(Ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isConverged
END INTERFACE
```

## InitiateFieldMethods

### InitiateFields

This routine initiates the field variable, deferred type.

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFields(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFields
END INTERFACE
```

## ApplyDirichletBCMethods

### ApplyDirichletBC

Apply Dirichlet boundary conditions

```fortran
INTERFACE
  MODULE SUBROUTINE applyDirichletBC(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE applyDirichletBC
END INTERFACE
```

## SolveMethods

### Solve

This subroutine solves the system of linear equation.

```fortran
INTERFACE
  MODULE SUBROUTINE Solve(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Solve
END INTERFACE
```

## UpdateMethods

This subroutine Updates the system of linear equation

```fortran
INTERFACE
  MODULE SUBROUTINE Update(obj, reset)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE Update
END INTERFACE
```

### Update

This subroutine update the state of the kernel

```fortran
INTERFACE
  MODULE SUBROUTINE UpdateIteration(obj, reset)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE UpdateIteration
END INTERFACE
```

## AssembleTanmatMethods

### AssembleTanmat

This procedure pointer assembles the global tangent matrix.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleTanmat(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleTanmat
END INTERFACE
```

### AssembleTanmat_InternalFacet

Assemble tangent matrix internal facet.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleTanmat_InternalFacet(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleTanmat_InternalFacet
END INTERFACE
```

### AssembleTanMat_NeumanFacet

Assemble tangent matrix internal facet.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleTanmat_NeumanFacet(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleTanmat_NeumanFacet
END INTERFACE
```

## AssembleMethods

### Assemble

This procedure pointer assembles the problem

```fortran
INTERFACE
  MODULE SUBROUTINE Assemble(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Assemble
END INTERFACE
```

## AssembleRHSMethods

### AssembleRHS

This procedure pointer assembles the right-hand-side vector.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleRHS(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleRHS
END INTERFACE
```

## RunMethods

### Run

Run the simulation

```fortran
INTERFACE
  MODULE SUBROUTINE Run(obj, param)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Run
END INTERFACE
```
