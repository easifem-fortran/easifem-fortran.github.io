This example shows the usage of [Set](./Set.md)

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( BlockNodeFieldLis_ ) :: obj
    TYPE( BlockNodeFieldLis_ ) :: obj2
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


    CALL domainfile%initiate( filename=domainfilename, mode="READ" )
    CALL domainfile%open()
    CALL dom%initiate( hdf5=domainfile, group="" )
    CALL domainfile%Deallocate()

    CALL setBlockNodeFieldParam( param=param, &
      & name=name, &
      & physicalVarNames=physicalVarNames, &
      & spaceCompo=spaceCompo, &
      & timeCompo=timeCompo, &
      & engine=engine)
    CALL obj%initiate( param, dom )


    CALL setBlockNodeFieldParam( param=param, &
      & name=name, &
      & physicalVarNames=physicalVarNames, &
      & spaceCompo=spaceCompo, &
      & timeCompo=timeCompo, &
      & engine=engine)
    CALL obj2%initiate( param, dom )

    !!! Set1
    tsize = obj2%Size()
    CALL reallocate(value, tsize)
    CALL random_number(value)
    CALL obj2%set(value)

    CALL obj%set(obj2, scale=2.0_DFP, addContribution=.TRUE.) 

    CALL obj%display( "obj, Block Node Field" )
    CALL obj2%display( "obj2, Block Node Field" )

    CALL obj2%Deallocate()
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
0.75507,  1.13379,  1.52692,  1.74886,   
0.05671,  1.68179,  0.81682,  0.61281,   
1.71799,  0.32611,  1.28185,  0.99179,   

# VAR :P
 DOF-5 ,   DOF-6 ,   
-------,  -------,   
1.60471,  1.64719,   
0.17939,  1.12910,   
0.05687,  0.71583,   


# VAR :V
  DOF-1 ,    DOF-2 ,    DOF-3 ,    DOF-4 ,   
--------,  --------,  --------,  --------,   
0.377536,  0.566896,  0.763460,  0.874429,   
0.028356,  0.840897,  0.408409,  0.306406,   
0.858994,  0.163054,  0.640927,  0.495895,   

# VAR :P
  DOF-5 ,    DOF-6 ,   
--------,  --------,   
0.802354,  0.823593,   
0.089697,  0.564551,   
0.028433,  0.357913,   

```
