In this example we test [Get](./Get.md) method.

Get all entry in obj2, where obj2 is an instance of `ScalarField_`

```txt
obj2 = obj
```

Both `obj` and `obj2` are instances of `ScalarFieldLis_` and `ScalarField_`, respectively.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarFieldLis_ ) :: obj
  TYPE( ScalarField_ ) :: obj2
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
    & engine="NATIVE_SERIAL")
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
# lis_ptr: 94778893242208
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
0.976837,   
0.483390,   
0.581184,   
0.147984,   
0.724879,   
0.299203,   
0.940301,   
0.663552,   
0.240904,   
0.941748,   
0.447914,   
0.202338,   
0.454285,   
0.881168,   
0.323755,   
0.373271,   
0.530906,   
0.802271,   
0.433111,   
0.472424,   
0.749044,   

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
# engine :NATIVE_SERIAL
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 102
# local_n: 102
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
--------,   
0.976837,   
0.483390,   
0.581184,   
0.147984,   
0.724879,   
0.299203,   
0.940301,   
0.663552,   
0.240904,   
0.941748,   
0.447914,   
0.202338,   
0.454285,   
0.881168,   
0.323755,   
0.373271,   
0.530906,   
0.802271,   
0.433111,   
0.472424,   
0.749044,   
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
