```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE easifemKernels
USE SteadyStokes111_Class
IMPLICIT NONE
TYPE(SteadyStokes111_) :: obj
TYPE(ParameterList_) :: param
TYPE(VTKFile_) :: vtk_outputfile
TYPE(HDF5File_) :: hdf_outputfile
TYPE(HDF5File_) :: domainFile
TYPE(Domain_) :: dom
INTEGER(I4B), PARAMETER :: refPressureNode = 1
REAL(DFP), PARAMETER :: refPressure = 0.0_DFP
INTEGER(I4B), PARAMETER :: tDirichletBCForVelocity = 5
INTEGER(I4B), PARAMETER :: tDirichletBCForPressure = 0
INTEGER(I4B), PARAMETER :: tFluidMaterials = 1
INTEGER(I4B), PARAMETER :: stabParamOption = 1
LOGICAL(LGT), PARAMETER :: isSubscalePressure = .FALSE.
LOGICAL(LGT), PARAMETER :: isBoundarySubscale = .FALSE.
REAL(DFP), PARAMETER :: gravity(3) = [0.0, -9.8, 0.0]
LOGICAL(LGT), PARAMETER :: isConservativeForm = .TRUE.
CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
CHARACTER(*), PARAMETER :: domainFileName = "./flow_around_circle.h5"
INTEGER(I4B), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN
INTEGER(I4B), PARAMETER :: maxIter = 100
REAL(DFP), PARAMETER :: rtoleranceForPressure = 1.0E-6
REAL(DFP), PARAMETER :: rtoleranceForVelocity = 1.0E-6
REAL(DFP), PARAMETER :: atoleranceForPressure = 1.0E-6
REAL(DFP), PARAMETER :: atoleranceForVelocity = 1.0E-6
REAL(DFP), PARAMETER :: toleranceForSteadyState = 1.0E-6
CHARACTER(*), PARAMETER :: baseInterpolationForSpace = "LagrangeInterpolation"
CHARACTER(*), PARAMETER :: baseContinuityForSpace = "H1"
CHARACTER(*), PARAMETER :: quadratureTypeForSpace = "GaussLegendre"
INTEGER(I4B), PARAMETER :: ls_solverName = LIS_SUPERLU !! LIS_GMRES
INTEGER(I4B), PARAMETER :: ls_preconditionOption = NO_PRECONDITION
INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes !! convergenceInSol
INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence
INTEGER(I4B), PARAMETER :: ls_maxIter = -1
LOGICAL(LGT), PARAMETER :: ls_relativeToRHS = .TRUE. !! True
INTEGER(I4B), PARAMETER :: ls_KrylovSubspaceSize = 40
REAL(DFP), PARAMETER :: ls_rtol = 1.0E-10
REAL(DFP), PARAMETER :: ls_atol = 1.0E-15
TYPE(MeshSelection_) :: region
INTEGER(I4B), PARAMETER :: fluid_meshID(1) = [1]
REAL(DFP), PARAMETER :: fluid_massDensity = 1000.0
REAL(DFP), PARAMETER :: fluid_dynamicViscosity = 0.001_DFP
CHARACTER(LEN=*), PARAMETER :: fluid_stressStrainModel = "NewtonianFluidModel"
CLASS(DirichletBC_), POINTER :: dbc => NULL()
TYPE(TxtFile_) :: atxtFile
REAL(DFP), ALLOCATABLE :: rmat1(:, :)
INTEGER(I4B), ALLOCATABLE :: ivec1(:)
INTEGER(I4B) :: ii

CALL FPL_INIT(); CALL param%Initiate()

CALL SetSteadyStokes111Param( &
  & param=param, &
  & isConservativeForm=isConservativeForm, &
  & gravity=gravity, &
  & isSubscalePressure=isSubscalePressure, &
  & isBoundarySubscale=isBoundarySubscale, &
  & stabParamOption=stabParamOption, &
  & domainFile=domainFileName, &
  & engine=engine, &
  & CoordinateSystem=KERNEL_CARTESIAN, &
  & maxIter=maxIter, &
  & rtoleranceForPressure=rtoleranceForPressure, &
  & rtoleranceForVelocity=rtoleranceForVelocity, &
  & atoleranceForPressure=atoleranceForPressure, &
  & atoleranceForVelocity=atoleranceForVelocity, &
  & toleranceForSteadyState=toleranceForSteadyState, &
  & tFluidMaterials=tFluidMaterials, &
  & tDirichletBCForPressure=tDirichletBCForPressure, &
  & tDirichletBCForVelocity=tDirichletBCForVelocity, &
  & baseInterpolationForSpace=baseInterpolationForSpace, &
  & baseContinuityForSpace=baseContinuityForSpace, &
  & quadratureTypeForSpace=quadratureTypeForSpace, &
  & refPressureNode=refPressureNode, &
  & refPressure=refPressure &
  & )

CALL SetLinSolverParam( &
  & param=param, &
  & solverName=ls_solverName,&
  & preconditionOption=ls_preconditionOption, &
  & convergenceIn=ls_convergenceIn, &
  & convergenceType=ls_convergenceType, &
  & maxIter=ls_maxIter, &
  & relativeToRHS=ls_relativeToRHS, &
  & KrylovSubspaceSize=ls_KrylovSubspaceSize, &
  & rtol=ls_rtol, &
  & atol=ls_atol)

CALL domainFile%Initiate(filename=domainFileName, MODE="READ")
CALL domainFile%OPEN()
CALL dom%Initiate(domainFile, "")
CALL domainFile%DEALLOCATE()

CALL obj%Initiate(param=param, dom=dom)

CALL region%Initiate(isSelectionByMeshID=.TRUE.)
CALL region%Add(dim=dom%GetNSD(), meshID=fluid_meshID)
CALL SetFluidMaterialParam( &
  & param=param, &
  & name="fluidMaterial", &
  & massDensity=fluid_massDensity, &
  & dynamicViscosity=fluid_dynamicViscosity, &
  & stressStrainModel=fluid_stressStrainModel)
CALL SetNewtonianFluidModelParam( &
  & param=param, &
  & dynamicViscosity=fluid_dynamicViscosity)

CALL obj%AddFluidMaterial( &
  & materialNo=1, &
  & materialName="fluidMaterial", &
  & param=param, &
  & region=region)
CALL region%DEALLOCATE()

!
! Vy=0
!

CALL SetDirichletBCParam( &
  & param=param, &
  & name="Vy=0", &
  & idof=2, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE.)

CALL atxtFile%Initiate(filename="./Vy=0.txt", status='OLD', &
  & action='READ')
CALL atxtFile%OPEN()
CALL atxtFile%READ(val=ivec1)
CALL atxtFile%DEALLOCATE()

CALL region%Initiate(isSelectionByNodeNum=.TRUE.)
CALL region%Add(nodenum=ivec1)
CALL region%Set()

CALL obj%AddVelocityDirichletBC( &
  & dbcNo=1, &
  & param=param, &
  & boundary=region)
dbc => obj%GetVelocityDirichletBCPointer(dbcNo=1)
CALL dbc%Set(ConstantNodalValue=0.0_DFP)
dbc => NULL()
DEALLOCATE (ivec1)

!
! Vx=U
!

CALL atxtFile%Initiate(filename="./Vx=U.txt", status='OLD', &
  & action='READ')
CALL atxtFile%OPEN()
CALL atxtFile%READ(val=rmat1, iostat=ii, separator=",")
ivec1 = INT(rmat1(:, 1), kind=I4B)
CALL atxtFile%DEALLOCATE()

CALL SetDirichletBCParam( &
  & param=param, &
  & name="Vx=U", &
  & idof=1, &
  & nodalValueType=Space, &
  & useFunction=.FALSE.)

CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByNodeNum=.TRUE.)
CALL region%Add(nodenum=ivec1)
CALL region%Set()

CALL obj%AddVelocityDirichletBC( &
  & dbcNo=2, &
  & param=param, &
  & boundary=region)
dbc => obj%GetVelocityDirichletBCPointer(dbcNo=2)
CALL dbc%Set(SpaceNodalValue=rmat1(:, 2))
dbc => NULL()
DEALLOCATE (ivec1, rmat1)

!
! Vx=0
!

CALL atxtFile%Initiate(filename="./Vx=0.txt", status='OLD', &
  & action='READ')
CALL atxtFile%OPEN()
CALL atxtFile%READ(val=ivec1)
CALL atxtFile%DEALLOCATE()

CALL SetDirichletBCParam( &
  & param=param, &
  & name="Vx=0", &
  & idof=1, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE.)

CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByNodeNum=.TRUE.)
CALL region%Add(nodenum=ivec1)
CALL region%Set()

CALL obj%AddVelocityDirichletBC( &
  & dbcNo=3, &
  & param=param, &
  & boundary=region)
dbc => obj%GetVelocityDirichletBCPointer(dbcNo=3)
CALL dbc%Set(ConstantNodalValue=0.0_DFP)
dbc => NULL()
DEALLOCATE (ivec1)
CALL region%DEALLOCATE()

!
! SoilParticles=0
!

CALL atxtFile%Initiate(filename="./SoilParticles.txt", status='OLD', &
  & action='READ')
CALL atxtFile%OPEN()
CALL atxtFile%READ(val=ivec1)
CALL atxtFile%DEALLOCATE()

CALL SetDirichletBCParam( &
  & param=param, &
  & name="SoilParticles Vx=0", &
  & idof=1, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE.)

CALL region%DEALLOCATE()
CALL region%Initiate(isSelectionByNodeNum=.TRUE.)
CALL region%Add(nodenum=ivec1)
CALL region%Set()

CALL obj%AddVelocityDirichletBC( &
  & dbcNo=4, &
  & param=param, &
  & boundary=region)
dbc => obj%GetVelocityDirichletBCPointer(dbcNo=4)
CALL dbc%Set(ConstantNodalValue=0.0_DFP)
dbc => NULL()

CALL SetDirichletBCParam( &
  & param=param, &
  & name="SoilParticles Vy=0", &
  & idof=2, &
  & nodalValueType=Constant, &
  & useFunction=.FALSE.)

CALL obj%AddVelocityDirichletBC( &
  & dbcNo=5, &
  & param=param, &
  & boundary=region)
dbc => obj%GetVelocityDirichletBCPointer(dbcNo=5)
CALL dbc%Set(ConstantNodalValue=0.0_DFP)
dbc => NULL()
DEALLOCATE (ivec1)
CALL region%DEALLOCATE()

IF (tDirichletBCForPressure .GT. 0) THEN
  CALL SetDirichletBCParam( &
    & param=param, &
    & name="P=0", &
    & idof=1, &
    & nodalValueType=Constant, &
    & useFunction=.FALSE.)
  !
  !
  !
  CALL region%Initiate( &
    & isSelectionByNodeNum=.TRUE.)
  CALL region%Add(nodenum=[refPressureNode])
  !
  !
  !
  ! CALL region%Initiate( &
  !   & isSelectionByMeshID=.TRUE.)
  ! CALL region%Add(dim=obj%nsd - 1, meshID=[RIGHT])
    !!
  CALL region%Set()
  CALL obj%AddPressureDirichletBC(dbcNo=1, param=param, boundary=region)
  CALL region%DEALLOCATE()
  dbc => obj%GetPressureDirichletBCPointer(dbcNo=1)
  CALL dbc%Set(ConstantNodalValue=refPressure)
  dbc => NULL()
END IF

CALL obj%Set()

CALL obj%run(param=param)

! CALL outputfile%Initiate(outputfilePrefix//'.h5', "NEW")
! CALL outputfile%Open()
!!
! CALL obj%WriteData(outputfile, "")
CALL obj%WriteData(vtk_outputfile, "")

CALL obj%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()

END PROGRAM main
```
