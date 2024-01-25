!> author: Vikas Sharma, Ph. D.
! date:  2023-12-01
! summary:  Test initiate method for LinearElasticModel_
!
! Following methods are tested
!
! setLinearElasticModelParam
! initiate
! display

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_INIT; CALL param%initiate()

CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=TypeElasticity%Isotropic, &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)

CALL obj%Initiate(param)
CALL obj%Display(msg="ISOTROPIC")

CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
