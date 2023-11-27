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

  CALL obj%set( value=value, globalNode=arange(1,10,2) )

  CALL display(transpose(value(:, 1:5)), "value(:, 1:10) = " )
  CALL obj%display( "obj = ")

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"

 value(:, 1:10) = 
------------------
0.342982  0.188825
0.445002  0.148488
0.201990  0.782645
0.099369  0.353710
0.248980  0.880695
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
# lis_ptr: 94584136927984
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
0.34298,  0.18882,   
0.00000,  0.00000,   
0.44500,  0.14849,   
0.00000,  0.00000,   
0.20199,  0.78265,   
0.00000,  0.00000,   
0.09937,  0.35371,   
0.00000,  0.00000,   
0.24898,  0.88070,   
```
