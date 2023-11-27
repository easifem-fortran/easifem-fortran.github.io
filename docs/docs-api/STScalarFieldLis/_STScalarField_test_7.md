In this example we test [Set](./Set.md) method.

In this example we set the all values of a timeCompo by using a vector of real.

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
  
  !> set all entries
  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, timeCompo, tNodes)
  CALL RANDOM_NUMBER(value)

  CALL obj%set( value=value(1,:), timeCompo=1 )
  CALL obj%set( value=value(2,:), timeCompo=2 )

  CALL display(value(:, 1:5), "value(:, 1:5) = " )
  call obj%display( "obj = ")

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"

                value(:, 1:5) =                 
------------------------------------------------
0.092312  0.463958  0.375566  0.521316  0.103649
0.835652  0.507362  0.215718  0.664761  0.815387

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
# lis_ptr: 94384562440944
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
  DOF-1 ,    DOF-2 ,   
--------,  --------,   
0.092312,  0.835652,   
0.463958,  0.507362,   
0.375566,  0.215718,   
0.521316,  0.664761,   
0.103649,  0.815387,   
```
