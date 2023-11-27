In this example we test [Set](./Set.md) method.

Setting multiple values using triplets.

We also test:

```txt
Obj2 =obj
```

Here `obj2` and `obj` are instances of `ScalarFieldLis_`

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
  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"
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
  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U2", &
    & engine=engine)
  CALL obj2%initiate( param, dom )
```

```fortran title="Setting multiple values using triplets"
  realVec = [1.0, 3.0, 5.0]
  CALL obj%set(istart=1, iend=5, stride=2, value=realVec )
  CALL obj2%set(obj)
  CALL obj2%Display("obj2 = ")
```

```txt title="results"
#obj2 =
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
# lis_ptr: 94340755750608
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
1.00000,   
0.00000,   
3.00000,   
0.00000,   
5.00000,   
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
