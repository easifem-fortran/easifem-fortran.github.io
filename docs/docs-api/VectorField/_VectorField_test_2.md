In this example we initiate an instance of vector field by importing data from HDF5 file.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorField_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
```

```fortran title="Open file for import"
  CALL FPL_INIT()
  CALL param%initiate()
  CALL resultFile%initiate( filename="./result.h5", mode="READ" )
  CALL resultFile%open()
```

```fortran title="read domain"  
  !> start creating domain
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  !> end creating domain
```

```fortran title="import"
  !> start import
  CALL obj%import( hdf5=resultFile, group="/VectorField1", dom=dom )
  !> end start import
```

```fortran
  CALL obj%Display("obj = ")
```

```txt title="results"
#obj =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :NATIVE_SERIAL
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 62
# local_n: 62
# is: 0
# ie: 0
# lis_ptr: 0
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# tSize : 62
# # DOF data :
# Total Physical Variables :1
# Name : U
# Space Components : 2
# Time Components : 1
# Total Nodes : 31
# Storage Format : Nodes
# Value Map : 
--------------
       1      
      32      
      63      
# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
.
.
.
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
# spaceCompo = 2
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```
