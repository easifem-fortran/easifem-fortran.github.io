This example shows the usage of [Set](./Set.md)

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( BlockNodeFieldLis_ ) :: obj
    TYPE( ParameterList_ ) :: param
    TYPE( HDF5File_ ) :: domainfile
    TYPE(Domain_) :: dom
    CHARACTER(LEN=*), PARAMETER :: domainfilename = "./mesh.h5"
    CHARACTER(LEN=*), PARAMETER :: engine = "LIS_OMP"
    CHARACTER(LEN=*), PARAMETER :: name = "BlockNodeField"
    CHARACTER(LEN=*), PARAMETER :: physicalVarNames(2)= ["V","P"]
    INTEGER( I4B ), PARAMETER :: spaceCompo(2) = [2,1]
    INTEGER( I4B ), PARAMETER :: timeCompo(2) = [2,2]


    CALL FPL_INIT(); CALL param%initiate()

    CALL setBlockNodeFieldParam( param=param, &
      & name=name, &
      & physicalVarNames=physicalVarNames, &
      & spaceCompo=spaceCompo, &
      & timeCompo=timeCompo, &
      & engine=engine)

    CALL domainfile%initiate( filename=domainfilename, mode="READ" )
    CALL domainfile%open()
    CALL dom%initiate( hdf5=domainfile, group="" )
    CALL domainfile%Deallocate()

    CALL obj%initiate( param, dom )

    !!! Set1

    CALL obj%Set(globalNode=10, value=10.0_DFP, ivar=1, idof=1 )
    CALL obj%Set(globalNode=10, value=11.0_DFP, ivar=1, idof=2 )
    CALL obj%Set(globalNode=10, value=12.0_DFP, ivar=1, idof=3 )
    CALL obj%Set(globalNode=10, value=13.0_DFP, ivar=1, idof=4 )
    CALL obj%Set(globalNode=10, value=14.0_DFP, ivar=2, idof=1 )
    CALL obj%Set(globalNode=10, value=15.0_DFP, ivar=2, idof=2 )
    CALL obj%display( "Block Node Field" )

    CALL obj%Deallocate()
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
#Block Node Field
# isInitiated : TRUE
# name :BlockNodeField
# fieldType : NORMAL
# engine :LIS_OMP
# comm: 0
# myRank: 0
# numProcs: 1
# global_n: 186
# local_n: 186
# is: 0
# ie: 0
# lis_ptr: 0
# domain : NOT ASSOCIATED
# domains : ALLOCATED [2]
# domains(1)%ptr : ASSOCIATED
# domains(2)%ptr : ASSOCIATED
# tSize : 186
# # DOF data :
# Total Physical Variables :2
# Name : V
# Space Components : 2
# Time Components : 2
# Total Nodes : 31
# Name : P
# Space Components : 1
# Time Components : 2
# Total Nodes : 31
# Storage Format : DOF
# Value Map : 
--------------
       1      
      32      
      63      
      94      
     125      
     156      
     187      
# VAR :V
 DOF-1 ,   DOF-2 ,   DOF-3 ,   DOF-4 ,   
-------,  -------,  -------,  -------,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
 0.0000,   0.0000,   0.0000,   0.0000,   
10.0000,  11.0000,  12.0000,  13.0000,   

# VAR :P
 DOF-5 ,   DOF-6 ,   
-------,  -------,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
 0.0000,   0.0000,   
14.0000,  15.0000,   
```
