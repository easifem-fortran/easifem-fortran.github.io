!> authors: Vikas Sharma, Ph. D.
! date: 29 Sept 2021
! update: 23 Sept 2021
! summary: Testing setSTDarcyBrinkmannParam()

! [[STDarcyBrinkmann_]], [[ParameterList_]]

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE easifemKernels
USE STDarcyBrinkmann_Class
IMPLICIT NONE
TYPE( STDarcyBrinkmann_ ) :: obj
TYPE( ParameterList_ ) :: param
CHARACTER( LEN = * ), PARAMETER :: domainFileForPressure="./mesh_tri3.h5"
CHARACTER( LEN = * ), PARAMETER :: domainFileForVelocity="./mesh_tri6.h5"
!> main
CALL FPL_INIT(); CALL param%Initiate()
! #CALL SetSTDarcyBrinkmannParam
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
  & tDirichletBCForVelocity=6, &
  & domainFileForPressure=domainFileForPressure, &
  & domainFileForVelocity=domainFileForVelocity )
CALL param%Print()
! #STDarcyBrinkmann/CheckEssentialParam
CALL obj%CheckEssentialParam( param )
CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main