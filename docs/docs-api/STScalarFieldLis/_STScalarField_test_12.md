In this example we test [Set](./Set.md) method.

In this example we set multiple entries by using FEVariable

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
  TYPE(FEVariable_) :: fevar
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

  fevar = NodalVariable(value, TypeFEVariableScalar, TypeFEVariableSpaceTime)

  CALL obj%set( value=fevar, globalNode=arange(1,10,2) )

  CALL Display(fevar, "fevar = ")
  CALL obj%display( "obj = ")

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
  CALL Deallocate(fevar)
end program main
```

```txt title="results"

fevar = 
# RANK :: 0 (SCALAR)
# VarType: SPACE & TIME
                    # VALUE:                    
------------------------------------------------
0.364310  0.982040  0.642988  0.875825  0.827356
0.736854  0.852561  0.825102  0.919856  0.946324
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
# lis_ptr: 93943052417776
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
0.36431,  0.73685,   
0.00000,  0.00000,   
0.98204,  0.85256,   
0.00000,  0.00000,   
0.64299,  0.82510,   
0.00000,  0.00000,   
0.87583,  0.91986,   
0.00000,  0.00000,   
0.82736,  0.94632,   
```
