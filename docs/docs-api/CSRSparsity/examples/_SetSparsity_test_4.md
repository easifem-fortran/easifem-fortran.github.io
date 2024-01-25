### Example 6

This example shows how to set sparsity pattern by using `IA` and `JA`.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE( CSRSparsity_) :: obj
INTEGER( I4B ) :: i
TYPE( IntVector_ ) :: IA, JA
TYPE( RealVector_ ) :: A

IA = [1,3,6,9,10,13]
JA = [1,4,1,2,4,2,3,5,4,5,3,2]
A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]

CALL Initiate( obj=obj, IA=IA%val, JA=JA%val )

CALL SetSparsity(obj)

CALL Display( obj, "obj" )

CALL Deallocate( obj )
END PROGRAM main
```
