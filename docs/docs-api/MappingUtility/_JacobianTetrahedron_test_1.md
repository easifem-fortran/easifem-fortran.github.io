```fortran
program main
use easifemBase
implicit none
call ok( JacobianTetrahedron("UNIT", "BIUNIT") .EQ. 8.0_DFP, "tests: " ) 
call ok( JacobianTetrahedron("BIUNIT", "UNIT") .EQ. 0.125_DFP, "tests: " ) 
call ok( JacobianTetrahedron("BIUNIT", "BIUNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianTetrahedron("UNIT", "UNIT") .EQ. 1.0_DFP, "tests: " ) 
end program main
```
