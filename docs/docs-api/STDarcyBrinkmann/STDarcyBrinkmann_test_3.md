!> authors: Vikas Sharma, Ph. D.
! date: 29 Sept 2021
! update:
!   - 21 Oct 2021
! summary: Testing Initiate, Display, and Deallocate, different domain

! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]

! [[Domain_]]

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
TYPE( Domain_ ), TARGET :: domainForPressure
TYPE( Domain_ ), TARGET :: domainForVelocity
TYPE( DomainPointer_ ) :: domains( 2 )
CHARACTER( LEN = * ), PARAMETER :: domainFileNameForPressure="./mesh_tri3.h5"
CHARACTER( LEN = * ), PARAMETER :: domainFileNameForVelocity="./mesh_tri6.h5"
!> main
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
  & tDirichletBCForVelocity=0, &
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
! #STDarcyBrinkmann/Initiate
CALL obj%Initiate(param=param, domains=domains )
! #STDarcyBrinkmann/Display
CALL obj%Display("")
! #STDarcyBrinkmann/Deallocate
CALL obj%Deallocate()
! #Domain/Deallocate
CALL domainForPressure%Deallocate()
CALL domainForVelocity%Deallocate()
! #HDF5File/Close
CALL domainFileForPressure%Deallocate()
CALL domainFileForVelocity%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
