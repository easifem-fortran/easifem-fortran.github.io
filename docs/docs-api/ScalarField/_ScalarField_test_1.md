In this example we test following methods:

- [SetScalarFieldParam](./SetScalarFieldParam.md)
- [Initiate](./Initiate.md)
- [Export](./Export.md)

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarField_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  CHARACTER(*), PARAMETER :: engine = "NATIVE_SERIAL"
```

```fortran title="setScalarFieldParam"  
  CALL FPL_INIT()
  CALL param%initiate()
  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine)
```

```fortran title="Initiate"
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  CALL obj%initiate( param, dom )
```

Let's display the scalar field.

```fortran
  CALL obj%Display("obj = ")
```

```txt title="Results"
#obj =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :NATIVE_SERIAL
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 0
# local_n: 0
# is: 0
# ie: 0
# lis_ptr: 0
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# tSize : 102
# # DOF data :
# Total Physical Variables :1
# Name : U
# Space Components : 1
# Time Components : 1
# Total Nodes : 102
# Storage Format : Nodes
# Value Map : 
--------------
       1      
     103      
# VAR :U
 DOF-1 ,   
-------,   
0.00000,   
0.00000,   
0.00000,   
0.00000,   
0.00000,   
0.00000,   
.
.
.
```

```fortran title="Export"
  CALL resultFile%initiate( filename="./result.h5", mode="NEW" )
  CALL resultFile%open()
  CALL obj%export( hdf5=resultFile, group="/scalarField1")
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
