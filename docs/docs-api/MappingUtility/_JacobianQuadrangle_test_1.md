```fortran
program main
use easifemBase
implicit none
call ok( JacobianQuadrangle("UNIT", "BIUNIT") .EQ. 4.0_DFP, "tests: " ) 
call ok( JacobianQuadrangle("BIUNIT", "UNIT") .EQ. 0.25_DFP, "tests: " ) 
call ok( JacobianQuadrangle("BIUNIT", "BIUNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianQuadrangle("UNIT", "UNIT") .EQ. 1.0_DFP, "tests: " ) 
end program main
```
