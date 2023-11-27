```fortran
program main
use easifembase
use easifemclasses
use easifemmaterials
implicit none
type( newtonianfluidmodel_ ) :: obj
type( parameterlist_ ) :: param
call fpl_init; call param%initiate()
call setnewtonianfluidmodelparam( param = param, viscosity=0.001_dfp )
call obj%initiate( param )
call param%print()
call obj%display( msg="test-1 : " )
call obj%deallocate()
call param%deallocate(); call fpl_finalize
end program main
```
