```fortran
program main
use VSTElasticity_Class

type(VSTElasticity_) :: obj
type(ParameterList_) :: param

CALL FPL_INIT; CALL param%initiate
CALL SetVSTElasticityParam()
!CALL obj%initiate()
!CALL obj%set()
!CALL obj%run()
end program main
```
