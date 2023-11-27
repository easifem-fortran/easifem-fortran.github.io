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
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, spaceCompo=1, timeCompo=1 )

    CALL random_number(value); call display(value, "1, 2 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, spaceCompo=2, timeCompo=1 )

    CALL random_number(value); call display(value, "1, 3 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, spaceCompo=1, timeCompo=2 )

    CALL random_number(value); call display(value, "1, 4 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=1, spaceCompo=2, timeCompo=2 )

    CALL random_number(value); call display(value, "2, 1 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=2, spaceCompo=1, timeCompo=1 )

    CALL random_number(value); call display(value, "2, 2 = ")
    CALL obj%Set(globalNode=arange(1, 3), value=value, ivar=2, spaceCompo=1, timeCompo=2 )

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
0.09084,  0.92117,  0.15686,  0.22677,   
0.93006,  0.00204,  0.88424,  0.20877,   
0.27417,  0.73755,  0.93329,  0.33005,   

# VAR :P
 DOF-5 ,   DOF-6 ,   
-------,  -------,   
0.74607,  0.38219,   
0.97535,  0.88128,   
0.64117,  0.05122,   



 1, 1 = 
--------
0.090844
0.930063
0.274172
 1, 2 = 
--------
0.921167
0.002038
0.737554
 1, 3 = 
--------
0.156861
0.884244
0.933287
 1, 4 = 
--------
0.226769
0.208770
0.330050
 2, 1 = 
--------
0.746069
0.975354
0.641175
 2, 2 = 
--------
0.382188
0.881279
0.051219
```
