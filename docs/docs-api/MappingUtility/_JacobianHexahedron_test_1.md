```fortran
program main
use easifemBase
implicit none
call ok( JacobianHexahedron("UNIT", "BIUNIT") .EQ. 8.0_DFP, "tests: " ) 
call ok( JacobianHexahedron("BIUNIT", "UNIT") .EQ. 0.125_DFP, "tests: " ) 
call ok( JacobianHexahedron("BIUNIT", "BIUNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianHexahedron("UNIT", "UNIT") .EQ. 1.0_DFP, "tests: " ) 
end program main
```
