!> authors: Vikas Sharma, Ph. D.
! date: 29 Sept 2021
! update:
!   - 21 Oct 2021
! summary: Testing Initiate, Display, and Deallocate, common domain

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
TYPE( HDF5File_ ) :: domainFile
TYPE( Domain_ ), TARGET :: dom
CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh_tri3.h5"
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
  & domainFileForPressure=domainFileName, &
  & domainFileForVelocity=domainFileName )
! #SetLinSolverParam
CALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&
  & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
  & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&
  & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
! #HDF5File/Initiate
CALL domainFile%Initiate( filename=domainFileName, &
  & MODE="READ" )
! #HDF5File/Open
CALL domainFile%Open()
! Domain/Initiate
CALL dom%Initiate( domainFile, "" )
! #STDarcyBrinkmann/Initiate
CALL obj%Initiate(param=param, dom=dom )
! #STDarcyBrinkmann/Display
CALL obj%Display("")
! #STDarcyBrinkmann/Deallocate
CALL obj%Deallocate()
! #Domain/Deallocate
CALL dom%Deallocate()
! #HDF5File/Close
CALL domainFile%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
