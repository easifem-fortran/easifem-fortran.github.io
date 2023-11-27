Use of operator(.nne.).

``` fortran
PROGRAM main
TYPE( ReferenceTopology_ ) :: obj
obj = ReferenceTopology( Nptrs = [1,2,3], Name=Triangle3 )
CALL display( obj, "test-1 obj : ")
CALL display( .NNE. obj, "nne : ")
END PROGRAM main
```
