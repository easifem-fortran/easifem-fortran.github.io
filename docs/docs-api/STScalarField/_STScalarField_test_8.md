In this example we test [Set](./Set.md) method.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none

  type( domain_ ) :: dom
  type( STScalarFieldLis_ ) :: obj
  type( ScalarFieldLis_ ) :: obj2
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


  CALL SetScalarFieldParam( &
    & param=param, &
    & name="U", &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine)

  call obj2%initiate( param, dom )

  !> set all entries
  tNodes = dom%getTotalNodes()
  CALL Reallocate(value, timeCompo, tNodes)
  CALL RANDOM_NUMBER(value)
  CALL obj2%set(value=value(1,:))
  CALL obj%set( value=obj2, timeCompo=1 )

  CALL obj2%set(value=value(2,:))
  CALL obj%set( value=obj2, timeCompo=2 )

  CALL display(value(:, 1:5), "value(:, 1:5) = " )
  CALL obj%display( "obj = ")

  call obj%Deallocate()
  call obj2%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"

                value(:, 1:5) =                 
------------------------------------------------
0.040207  0.491438  0.943856  0.172155  0.719283
0.183957  0.697048  0.376879  0.552362  0.539996
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
# lis_ptr: 94380060994288
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
0.040207,  0.183957,   
0.491438,  0.697048,   
0.943856,  0.376879,   
0.172155,  0.552362,   
0.719283,  0.539996,   
```
