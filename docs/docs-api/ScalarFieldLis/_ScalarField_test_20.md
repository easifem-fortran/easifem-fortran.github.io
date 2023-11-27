In this example we test [Get](./Get.md) method.

Get all entry in obj2, where obj2 is an instance of ScalarFieldLis_

```txt
obj2 = obj
```

Both `obj` and `obj2` are instances of `ScalarFieldLis_`

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarFieldLis_ ) :: obj
  TYPE( ScalarFieldLis_ ) :: obj2
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  REAL( DFP ) :: avar
  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"
  TYPE(FEVariable_) :: fevar
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

```fortran title="initiate scalar field"
  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine)
  CALL obj%initiate( param, dom )
```

```fortran title="initiate scalar field"
  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U2", &
    & engine=engine)
  CALL obj2%initiate( param, dom )
```

```fortran title="setting all values using vector"
  CALL reallocate( realVec, dom%getTotalNodes() )
  CALL RANDOM_NUMBER( realVec )
  CALL obj%set(realVec)
  CALL obj%display( "scalar field = ")
```

```txt title="results"
#scalar field =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 102
# local_n: 102
# is: 1
# ie: 103
# lis_ptr: 94642949263200
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
--------,   
0.677787,   
0.648929,   
0.876577,   
0.929737,   
0.746531,   
0.655029,   
0.956440,   
0.892157,   
0.563374,   
0.149392,   
0.217981,   
0.207189,   
0.355624,   
0.396910,   
0.559421,   
0.589930,   
0.713219,   
0.625906,   
0.838845,   
0.960102,   
```

```fortran title="Get multiple entries"
  CALL obj%get( value=obj2 )
  CALL obj2%Display("obj2")
```

```txt title="results"
#obj2
# isInitiated : TRUE
# name :U2
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 102
# local_n: 102
# is: 1
# ie: 103
# lis_ptr: 94642948865744
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
--------,   
0.677787,   
0.648929,   
0.876577,   
0.929737,   
0.746531,   
0.655029,   
0.956440,   
0.892157,   
0.563374,   
0.149392,   
0.217981,   
0.207189,   
0.355624,   
0.396910,   
0.559421,   
0.589930,   
0.713219,   
0.625906,   
0.838845,   
0.960102,   
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
