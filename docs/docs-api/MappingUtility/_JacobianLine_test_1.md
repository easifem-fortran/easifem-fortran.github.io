```fortran
program main
use easifemBase
implicit none
call ok( JacobianLine("UNIT", "BIUNIT") .EQ. 2.0_DFP, "tests: " ) 
call ok( JacobianLine("BIUNIT", "UNIT") .EQ. 0.5_DFP, "tests: " ) 
call ok( JacobianLine("BIUNIT", "BIUNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianLine("UNIT", "UNIT") .EQ. 1.0_DFP, "tests: " ) 
end program main
```
