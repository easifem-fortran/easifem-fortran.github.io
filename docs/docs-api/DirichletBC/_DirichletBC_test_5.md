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
TYPE( HDF5File_ ) :: domainFile
REAL( DFP ), ALLOCATABLE :: real1( : ), real2( :, : )
INTEGER( I4B ), ALLOCATABLE :: int1( : ), int2( :, : )
!>
CALL FPL_INIT(); CALL param%Initiate()
CALL setDirichletBCParam(param=param, name="DBC1", idof=1, &
  & nodalValueType=Space, useFunction=.FALSE.)
CALL boundary%Initiate( isSelectionByNodeNum=.TRUE. )
CALL boundary%Add( xidim=1, nodeNum=[1,7,8,9,5,10,11,12,2] )
CALL boundary%Set()
CALL domainFile%Initiate( filename=domainFilePath, mode="READ" )
CALL domainFile%Open()
CALL dom%Initiate( domainFile, '' )
CALL obj%Initiate( param=param, boundary=boundary, dom=dom )
CALL reallocate( real1, 9 ); CALL RANDOM_NUMBER( real1 )
CALL obj%Set( SpaceNodalValue = real1 )
CALL obj%Get( nodalValue= real2, nodeNum=int1 )
CALL obj%Deallocate()
CALL domainFile%Close(); CALL domainFile%Deallocate()
CALL dom%Deallocate()
CALL FPL_FINALIZE(); CALL param%Deallocate()
END PROGRAM main
```
