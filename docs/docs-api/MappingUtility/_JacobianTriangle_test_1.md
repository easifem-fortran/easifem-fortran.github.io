```fortran
program main
use easifemBase
implicit none
call ok( JacobianTriangle("UNIT", "BIUNIT") .EQ. 4.0_DFP, "tests: " ) 
call ok( JacobianTriangle("BIUNIT", "UNIT") .EQ. 0.25_DFP, "tests: " ) 
call ok( JacobianTriangle("BIUNIT", "BIUNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianTriangle("UNIT", "UNIT") .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianTriangle("UNIT", "TRIANGLE", RefCoord_Triangle("UNIT") ) .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianTriangle("TRIANGLE", "UNIT", RefCoord_Triangle("UNIT") ) .EQ. 1.0_DFP, "tests: " ) 

call ok( JacobianTriangle("BIUNIT", "TRIANGLE", RefCoord_Triangle("BIUNIT") ) .EQ. 1.0_DFP, "tests: " ) 
call ok( JacobianTriangle("TRIANGLE", "BIUNIT", RefCoord_Triangle("BIUNIT") ) .EQ. 1.0_DFP, "tests: " ) 

call ok( JacobianTriangle("UNIT", "TRIANGLE", RefCoord_Triangle("BIUNIT") ) .EQ. 4.0_DFP, "tests: " ) 
call ok( JacobianTriangle("BIUNIT", "TRIANGLE", RefCoord_Triangle("UNIT") ) .EQ. 0.25_DFP, "tests: " ) 
end program main
```
