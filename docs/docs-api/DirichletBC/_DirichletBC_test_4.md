```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE( DirichletBC_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( MeshSelection_ ) :: boundary
TYPE( Domain_ ) :: dom
CHARACTER( LEN = * ), PARAMETER :: domainFilePath="./mesh.h5"
CHARACTER( LEN = * ), PARAMETER :: tempFilePath="./TempDirichletBC.h5"
TYPE( HDF5File_ ) :: domainFile
TYPE( HDF5File_ ) :: tempFile
REAL( DFP ), ALLOCATABLE :: nodalValue( : )
!>
CALL FPL_INIT(); CALL param%Initiate()
CALL SetDirichletBCParam(param=param, name="DBC1", idof=1, &
  & nodalValueType=Space, useFunction=.FALSE.)
CALL boundary%Initiate( isSelectionByNodeNum=.TRUE. )
CALL boundary%Add( xidim=1, nodeNum=[1,7,8,9,5,10,11,12,2] )
CALL boundary%Set()
CALL domainFile%Initiate( filename=domainFilePath, mode="READ" )
CALL domainFile%Open()
CALL dom%Initiate( domainFile, '' )
CALL tempFile%Initiate( filename=tempFilePath, mode="NEW" )
CALL tempFile%Open()
CALL obj%Initiate( param=param, boundary=boundary, dom=dom )
CALL Reallocate( nodalValue, 9 ); CALL RANDOM_NUMBER( nodalValue )
CALL obj%Set( SpaceNodalValue = nodalValue )
CALL obj%Export( tempFile, '' )
CALL tempFile%Close(); CALL tempFile%Deallocate()
CALL domainFile%Close(); CALL domainFile%Deallocate()
CALL dom%Deallocate()
CALL FPL_FINALIZE(); CALL param%Deallocate()
END PROGRAM main
```
