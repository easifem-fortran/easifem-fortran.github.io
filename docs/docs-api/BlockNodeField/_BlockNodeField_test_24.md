This example shows the usage of [Get](./Get.md)

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
    REAL( DFP ), ALLOCATABLE :: value(:)
    REAL(DFP), ALLOCATABLE :: svalue(:)
    INTEGER( I4B ) :: tsize
    INTEGER( I4B ) :: tNodes
    TYPE(FEVariable_) :: fevar


    CALL FPL_INIT(); CALL param%initiate()


    CALL domainfile%initiate( filename=domainfilename, mode="READ" )
    CALL domainfile%open()
    CALL dom%initiate( hdf5=domainfile, group="" )
    CALL domainfile%Deallocate()
    tNodes = dom%getTotalNodes()

    CALL setBlockNodeFieldParam( param=param, &
      & name=name, &
      & physicalVarNames=physicalVarNames, &
      & spaceCompo=spaceCompo, &
      & timeCompo=timeCompo, &
      & engine=engine)
    CALL obj%initiate( param, dom )


    !!! Set1
    tsize = obj%Size()
    CALL reallocate(svalue, tsize)
    CALL random_number(svalue)
    CALL obj%set(svalue)

    CALL obj%get(value=fevar, globalNode=arange(1,3,1), ivar=1)
    CALL Display(fevar, "fevar = ")
    CALL Display(svalue(1:3), "value = " )
    CALL Display(svalue(tnodes+1:tnodes+3), "value = " )
    CALL Display(svalue(2*tnodes+1:2*tnodes+3), "value = " )
    CALL Display(svalue(3*tnodes+1:3*tnodes+3), "value = " )

    CALL obj%Deallocate()
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
fevar = 
RANK :: 1 (VECTOR)
# VarType: SPACE & TIME
   # VALUE:( :, :, 1 ) =    
----------------------------
0.930164  0.468266  0.691505
0.301028  0.816928  0.697816
   # VALUE:( :, :, 2 ) =    
----------------------------
0.903640  0.123752  0.941015
0.598803  0.752262  0.883365

value = 
--------
0.930164
0.468266
0.691505

value = 
--------
0.301028
0.816928
0.697816

value = 
--------
0.903640
0.123752
0.941015

value = 
--------
0.598803
0.752262
0.883365

```
