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
    tsize = (obj%dof .tdof. 1) * 2
    CALL reallocate(value, tsize)
    CALL random_number(value)
    CALL obj%Set(globalNode=arange(1, 2), value=value, ivar=1 )
    CALL obj%display( "Block Node Field" )
    CALL Display(value, "value")

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
0.20775,  0.12841,  0.41529,  0.38454,   
0.06529,  0.98029,  0.27242,  0.31009,   

value
--------
0.207749
0.065286

0.128411
0.980286

0.415291
0.272415

0.384540
0.310093
```
