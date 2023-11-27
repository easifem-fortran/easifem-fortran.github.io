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
    INTEGER( I4B ):: tsize


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
    tsize = obj%size()
    call reallocate(value, tsize)
    call random_number(value)

    CALL obj%Set(value=value)
    CALL obj%display( "Block Node Field" )

    CALL obj%Deallocate()
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
# VAR :V
  DOF-1 ,    DOF-2 ,    DOF-3 ,    DOF-4 ,   
--------,  --------,  --------,  --------,   
0.786789,  0.480885,  0.272301,  0.986833,   
0.116533,  0.628047,  0.770503,  0.523015,   
0.199285,  0.736789,  0.544372,  0.573135,   

# VAR :P
  DOF-5 ,    DOF-6 ,   
--------,  --------,   
0.938428,  0.427799,   
0.240599,  0.588696,   
0.273588,  0.836468,   

```
