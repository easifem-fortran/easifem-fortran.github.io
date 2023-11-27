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
    REAL( DFP ), allocatable :: value(:)
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
    CALL reallocate(value, 3)
    CALL random_number(value); call display(value, "1, 1 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, idof=1 )

    CALL random_number(value); call display(value, "1, 2 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, idof=2 )

    CALL random_number(value); call display(value, "1, 3 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, idof=3 )

    CALL random_number(value); call display(value, "1, 4 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, idof=4 )

    CALL random_number(value); call display(value, "2, 1 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=2, idof=1 )

    CALL random_number(value); call display(value, "2, 2 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=2, idof=2 )

    CALL obj%display( "Block Node Field" )

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
0.32135,  0.41513,  0.74312,  0.38962,   
0.11989,  0.57660,  0.98477,  0.19780,   
0.98783,  0.28198,  0.66409,  0.18018,   

# VAR :P
 DOF-5 ,   DOF-6 ,   
-------,  -------,   
0.27082,  0.12106,   
0.46553,  0.94307,   
0.65410,  0.32742,   


 1, 1 = 
--------
0.321347
0.119888
0.987827
 1, 2 = 
--------
0.415131
0.576602
0.281984
 1, 3 = 
--------
0.743116
0.984773
0.664091
 1, 4 = 
--------
0.389616
0.197797
0.180180
 2, 1 = 
--------
0.270816
0.465528
0.654098
 2, 2 = 
--------
0.121058
0.943066
0.327423
```
