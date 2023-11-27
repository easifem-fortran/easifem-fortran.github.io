!> authors: Vikas Sharma, Ph. D.
! date: 29 Sept 2021
! update:
!   - 21 Oct 2021
!   - 23 Oct 2021
! summary: Testing AddPressureBC, AddVelocityBC

! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]

! [[Domain_]], [[MeshSelection_]], [[NeumannBC_]]

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE easifemKernels
USE STDarcyBrinkmann_Class
IMPLICIT NONE
TYPE( STDarcyBrinkmann_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( HDF5File_ ) :: domainFileForPressure
TYPE( HDF5File_ ) :: domainFileForVelocity
TYPE( MeshSelection_ ) :: region
TYPE( Domain_ ), TARGET :: domainForPressure
TYPE( Domain_ ), TARGET :: domainForVelocity
TYPE( DomainPointer_ ) :: domains( 2 )
CLASS( DirichletBC_ ), POINTER :: dbc => NULL()
CHARACTER( LEN = * ), PARAMETER :: domainFileNameForPressure="./mesh_tri3.h5"
CHARACTER( LEN = * ), PARAMETER :: domainFileNameForVelocity="./mesh_tri6.h5"
! main
! #ParameterList/Initiate
CALL FPL_INIT(); CALL param%Initiate()
! #SetSTDarcyBrinkmannParam
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
  & domainFileForVelocity=domainFileNameForVelocity )
! #SetLinSolverParam
CALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&
  & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
  & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
  & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
! #HDF5File/Initiate
CALL domainFileForPressure%Initiate( filename=domainFileNameForPressure, &
  & MODE="READ" )
! #HDF5File/Open
CALL domainFileForPressure%Open()
! Domain/Initiate
CALL domainForPressure%Initiate( domainFileForPressure, "" )
! #HDF5File/Initiate
CALL domainFileForVelocity%Initiate( filename=domainFileNameForVelocity, &
  & MODE="READ" )
! #HDF5File/Open
CALL domainFileForVelocity%Open()
! #Domain/Initiate
CALL domainForVelocity%Initiate( domainFileForVelocity, "" )
! Domains
domains(1)%ptr => domainForVelocity
domains(2)%ptr => domainForPressure
CALL domainFileForPressure%Deallocate()
CALL domainFileForVelocity%Deallocate()
! #STDarcyBrinkmann/Initiate
CALL obj%Initiate(param=param, domains=domains )
!----------------------------------------------------------------------------
!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POROUS MATERIAL 1
!----------------------------------------------------------------------------
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=domainForPressure%GetNSD(), meshID=[1] )
! #SetPorousMaterialParam
CALL SetPorousMaterialParam( param=param, name="porousMaterial", &
  & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )
! #SetLinearPoroElasticModelParam
CALL SetLinearPoroElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .TRUE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
! #STDarcyBrinkmann/AddPorousMaterial
CALL obj%AddPorousMaterial(materialNo=1, materialName="porousMaterial", &
  & param=param, region=region)
!> Adding another porous material
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POROUS MATERIAL 2
!----------------------------------------------------------------------------
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=domainForPressure%GetNSD(), meshID=[2] )
! #SetPorousMaterialParam
CALL SetPorousMaterialParam( param=param, name="porousMaterial", &
  & massDensity=1700.0_DFP, stressStrainModel="LinearPoroElasticModel" )
! #SetLinearPoroElasticModelParam
CALL SetLinearPoroElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .TRUE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
! #STDarcyBrinkmann/AddPorousMaterial
CALL obj%AddPorousMaterial(materialNo=2, materialName="porousMaterial", &
  & param=param, region=region)
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!::::::::::::::::::::::::::::::::::::::::::::::::::::::::: FLUID MATERIAL 1
!----------------------------------------------------------------------------
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=domainForVelocity%GetNSD(), meshID=[1,2] )
! #SetFluidMaterialParam
CALL SetFluidMaterialParam( param=param, name="fluidMaterial", &
  & massDensity=1000.0_DFP, stressStrainModel="NewtonianFluidModel" )
! #SetNewtonianFluidModelParam
CALL SetNewtonianFluidModelParam( param = param, Viscosity = 0.001_DFP )
! #STDarcyBrinkmann/AddFluidMaterial
CALL obj%AddFluidMaterial(materialNo=1, materialName="fluidMaterial", &
  & param=param, region=region)
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!:::::::::::::::::::::::::::::::::::::::::::::::::::::: ZERO V1 DIRICHLET BC
!----------------------------------------------------------------------------
! #SetDirichletBCParam
CALL SetDirichletBCParam(param=param, name="ZeroV1", &
  & idof=1, nodalValueType=Constant, useFunction=.FALSE. )
! #MesSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=1, meshID=[1,2,4,5] )
! #MeshSelection/Set
CALL region%Set()
! #STDarcyBrinkmann/AddVelocityBC
CALL obj%AddVelocityBC( dbcNo=1, param=param, boundary=region )
! #STDarcyBrinkmann/GetVelocityBCPointer
dbc => obj%GetVelocityBCPointer( dbcNo=1 )
CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()
!----------------------------------------------------------------------------
!::::::::::::::::::::::::::::::::::::::::::::::::::: UPSTREAM V1 DIRICHLET BC
!----------------------------------------------------------------------------
! #SetDirichletBCParam
CALL SetDirichletBCParam(param=param, name="UpstreamV1", &
  & idof=1, nodalValueType=Constant, useFunction=.FALSE. )
! #MeshSelection/Deallocate
CALL region%Deallocate()
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=1, meshID=[6] )
! #MeshSelection/Set
CALL region%Set()
! #STDarcyBrinkmann/AddVelocityBC
CALL obj%AddVelocityBC( dbcNo=2, param=param, boundary=region )
! #STDarcyBrinkmann/GetVelocityBCPointer
dbc => obj%GetVelocityBCPointer( dbcNo=2 )
! #DirichletBc/Set
call dbc%Set( ConstantNodalValue=0.1_DFP ); dbc=>NULL()
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!::::::::::::::::::::::::::::::::::::::::::::::::::::::: ZERO V2 DIRICHLET BC
!----------------------------------------------------------------------------
! #SetDirichletBCParam
CALL SetDirichletBCParam(param=param, name="ZeroV2", &
  & idof=2, nodalValueType=Constant, useFunction=.FALSE. )
! #MeshSelection/Deallocate
CALL region%Deallocate()
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=1, meshID=[1,2,4,5,6,3] )
! #MeshSelection/Set
CALL region%Set()
! #STDarcyBrinkmann/AddVelocityBC
CALL obj%AddVelocityBC( dbcNo=3, param=param, boundary=region )
! #STDarcyBrinkmann/GetVelocityBCPointer
dbc => obj%GetVelocityBCPointer( dbcNo=3 )
! #DirichletBc/Set
call dbc%Set( ConstantNodalValue=0.1_DFP ); dbc=>NULL()
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!:::::::::::::::::::::::::::::::::::::::::: DOWN-STREAM PRESSURE DIRICHLET BC
!----------------------------------------------------------------------------
! #SetDirichletBCParam
CALL SetDirichletBCParam(param=param, name="ZeroP", &
  & idof=1, nodalValueType=Constant, useFunction=.FALSE. )
! #MeshSelection/Deallocate
CALL region%Deallocate()
! #MeshSelection/Initiate
CALL region%Initiate( isSelectionByMeshID=.TRUE. )
! #MeshSelection/Add
CALL region%Add( xidim=1, meshID=[3] )
! #MeshSelection/Set
CALL region%Set()
! #STDarcyBrinkmann/AddVelocityBC
CALL obj%AddPressureBC( dbcNo=1, param=param, boundary=region )
! #STDarcyBrinkmann/GetVelocityBCPointer
dbc => obj%GetPressureBCPointer( dbcNo=1 )
! #DirichletBc/Set
call dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()
! #MeshSelection/Deallocate
CALL region%Deallocate()
!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------
! #STDarcyBrinkmann/Display
CALL obj%Display("")
! #STDarcyBrinkmann/Deallocate
CALL obj%Deallocate()
! #Domain/Deallocate
CALL domainForPressure%Deallocate()
CALL domainForVelocity%Deallocate()
! #ParameterList/Deallocate
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main