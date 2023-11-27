In this example we test [Set](./Set.md) method.

In this example we set multiple entries.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none

  type( domain_ ) :: dom
  type( STScalarFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr
  INTEGER( I4B ), Parameter :: timeCompo=2
  CHARACTER( LEN = * ), Parameter :: engine="LIS_OMP"
  REAL( DFP ), ALLOCATABLE :: value(:, :)
  INTEGER( I4B ) ::tNodes

  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call dom%initiate( meshfile, "" )
  call meshfile%Deallocate()

  CALL FPL_INIT()
  CALL param%initiate()
  CALL SetSTScalarFieldParam( &
    & param=param, &
    & name="U", &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine, &
    & timeCompo=timeCompo)

  call obj%initiate( param, dom )

  !> set multiple entries
  CALL Reallocate(value, timeCompo, 5)
  CALL RANDOM_NUMBER(value)

  CALL obj%set( value=value(1,:), globalNode=arange(1,10,2), timeCompo=1 )
  CALL obj%set( value=value(2,:), globalNode=arange(1,10,2), timeCompo=2 )

  CALL display(transpose(value(:, 1:5)), "value = " )
  CALL obj%display( "obj = ")

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"
 value = 
------------------
0.292455  0.677448
0.968783  0.509839
0.287100  0.279204
0.225393  0.909298
0.249951  0.347530
#obj =
# isInitiated : TRUE
# name :U
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 62
# local_n: 62
# is: 1
# ie: 63
# lis_ptr: 94207269784304
# domain : ASSOCIATED
# domains : NOT ALLOCATED
# tSize : 62
# # DOF data :
# Total Physical Variables :1
# Name : U
# Space Components : 1
# Time Components : 2
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
0.29245,  0.67745,   
0.00000,  0.00000,   
0.96878,  0.50984,   
0.00000,  0.00000,   
0.28710,  0.27920,   
0.00000,  0.00000,   
0.22539,  0.90930,   
0.00000,  0.00000,   
0.24995,  0.34753,   
```
