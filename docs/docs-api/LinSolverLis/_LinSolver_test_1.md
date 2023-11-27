```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Domain_) :: dom
  TYPE( MatrixFieldLis_ ) :: obj
  TYPE( HDF5File_) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  CHARACTER(*), PARAMETER :: engine="LIS_OMP"
  INTEGER( I4B ) :: imesh
  CLASS( Mesh_ ), POINTER :: meshptr

  CALL FPL_INIT(); CALL param%Initiate()

  CALL meshfile%Initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%Open()
  CALL dom%Initiate( meshfile, "" )
  CALL dom%InitiateNodeToNodes()
  CALL meshfile%Deallocate()

  CALL SetMatrixFieldParam( &
    & param=param, &
    & name="K", &
    & matrixProp="UNSYM", &
    & spaceCompo=2, &
    & timeCompo=1, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine )

  CALL obj%Initiate( param=param, dom=dom )


  do imesh = 1, dom%getTotalMesh(dim=dom%getNSD())
    meshptr => dom%getMeshPointer(dim=dom%getNSD(), entityNum=imesh)
    if( meshptr%isEmpty() ) cycle

    do ielem=meshptr%getMinElemNumber(), meshptr%getMaxElemNumber()

      if( .not. meshptr%isElementPresent() ) cycle

    end do

  end do


  nullify(meshptr)
  CALL obj%Deallocate()
  CALL dom%Deallocate()
  CALL param%Deallocate()
  CALL FPL_FINALIZE()
END PROGRAM main
```
