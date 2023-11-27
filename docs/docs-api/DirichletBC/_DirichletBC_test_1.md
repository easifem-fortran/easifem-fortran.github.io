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
!> main
CALL FPL_INIT(); CALL param%Initiate()
CALL SetDirichletBCParam(param=param, name="DBC1", idof=1, &
  & nodalValueType=Constant, useFunction=.FALSE.)
CALL boundary%Initiate( isSelectionByMeshID=.TRUE. )
CALL boundary%Add( xidim=1, meshID=[1,2] )
CALL boundary%Set()
CALL domainFile%Initiate( filename=domainFilePath, mode="READ" )
CALL domainFile%Open()
CALL dom%Initiate( domainFile, '' )
CALL obj%Initiate( param=param, boundary=boundary, dom=dom )
CALL obj%Set( ConstantNodalValue = 1.0_DFP )
CALL obj%Display( "DBC1:" )
CALL obj%Deallocate()
CALL domainFile%Close(); CALL domainFile%Deallocate()
CALL dom%Deallocate()
CALL FPL_FINALIZE(); CALL param%Deallocate()
END PROGRAM main
```
