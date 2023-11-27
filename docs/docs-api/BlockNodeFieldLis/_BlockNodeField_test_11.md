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
    REAL( DFP ), ALLOCATABLE :: value(:)
    INTEGER( I4B ) :: tsize


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
    CALL Reallocate(value, 3*2)
    CALL random_number(value)

    CALL obj%set(globalNode=arange(1,3), value=value, &
    & ivar=1, spaceCompo=1, timeCompo=arange(1,2) )

    CALL obj%set(globalNode=arange(1,3), value=value, &
    & ivar=2, spaceCompo=1, timeCompo=arange(1,2) )

    CALL obj%display( "Block Node Field" )

    CALL Display(value, "value = ")

    CALL obj%Deallocate()
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
# VAR :V
 DOF-1 ,   DOF-2 ,   DOF-3 ,   DOF-4 ,   
-------,  -------,  -------,  -------,   
0.41123,  0.00000,  0.34550,  0.00000,   
0.29325,  0.00000,  0.39719,  0.00000,   
0.29546,  0.00000,  0.67489,  0.00000,   

# VAR :P
 DOF-5 ,   DOF-6 ,   
-------,  -------,   
0.41123,  0.34550,   
0.29325,  0.39719,   
0.29546,  0.67489,   

value = 
--------
0.411225
0.293254
0.295455

0.345501
0.397185
0.674890
```
