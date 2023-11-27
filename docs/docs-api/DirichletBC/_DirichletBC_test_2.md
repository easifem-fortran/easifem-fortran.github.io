```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE( DirichletBC_ ) :: obj
TYPE( PARAMETERList_ ) :: param
TYPE( MeshSelection_ ) :: boundary
TYPE( Domain_ ) :: dom
CHARACTER( LEN = * ), PARAMETER :: domainFilePath="./mesh.h5"
TYPE( HDF5File_ ) :: domainFile
ABSTRACT INTERFACE
  PURE FUNCTION SpaceFunction( x ) RESULT( ans )
  IMPORT
  REAL( DFP ), INTENT( IN ) :: x(:)
  REAL( DFP ) :: ans
  END FUNCTION SpaceFunction
END INTERFACE
PROCEDURE( SpaceFunction ), POINTER :: spaceFunc
!>
CALL FPL_INIT(); CALL param%Initiate()
CALL SetDirichletBCParam(param=param, name="DBC1", idof=1, &
  & nodalValueType=Space, useFunction=.TRUE.)
CALL boundary%Initiate( isSelectionByMeshID=.TRUE. )
CALL boundary%Add( xidim=1, meshID=[1,2] )
CALL boundary%Set()
CALL domainFile%Initiate( filename=domainFilePath, mode="READ" )
CALL domainFile%Open()
CALL dom%Initiate( domainFile, '' )
CALL obj%Initiate( param=param, boundary=boundary, dom=dom )
spaceFunc => SpaceFunction1
CALL obj%Set( SpaceFunction = spaceFunc )
CALL obj%Display( "DBC1:" )
CALL obj%Deallocate()
CALL domainFile%Close(); CALL domainFile%Deallocate()
CALL dom%Deallocate()
CALL FPL_FINALIZE(); CALL param%Deallocate()
CONTAINS
PURE FUNCTION SpaceFunction1( x ) RESULT( ans )
  REAL( DFP ), INTENT( IN ) :: x(:)
  REAL( DFP ) :: ans
  ans = sum(x)
END FUNCTION
END PROGRAM main
```
