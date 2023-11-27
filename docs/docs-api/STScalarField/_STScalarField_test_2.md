In this example we initiate an instance of Scalar field by importing data from HDF5 file.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none

  type( domain_ ) :: dom
  type( STScalarFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr
  CHARACTER( LEN = * ), Parameter :: engine="LIS_OMP"


  CALL FPL_INIT()
  CALL param%initiate()
  CALL resultFile%initiate( filename="./result.h5", mode="READ" )
  CALL resultFile%open()

  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call dom%initiate( meshfile, "" )

  !> start import
  CALL obj%import( hdf5=resultFile, group="/STScalarField1", dom=dom )
  CALL resultFile%Deallocate()
  CALL obj%Display("obj = ")
  !> end start import

  call obj%Deallocate()
  call dom%Deallocate()
  call meshfile%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"
#obj =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 204
# local_n: 204
# is: 1
# ie: 205
# lis_ptr: 94699835249088
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# tSize : 204
# # DOF data :
# Total Physical Variables :1
# Name : U
# Space Components : 1
# Time Components : 2
# Total Nodes : 102
# Storage Format : Nodes
# Value Map : 
--------------
       1      
     103      
     205      
# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
0.00000,  0.00000,   
```
