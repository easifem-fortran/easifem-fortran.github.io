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

    CALL obj%get(value=value, istart=1, iend=3, stride=1, ivar=1, idof=1)
    CALL OK( ALL(value(1:3) .APPROXEQ. svalue(1:3)), " test 1 " )

    CALL obj%Deallocate()
    CALL dom%Deallocate()
    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```
