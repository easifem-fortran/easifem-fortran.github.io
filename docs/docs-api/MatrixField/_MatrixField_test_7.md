
```fortran
program main
	use easifemBase
	use easifemClasses
  type( domain_) :: dom
  type( MatrixField_ ) :: obj
  type( HDF5File_) :: meshfile
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr
  real( DFP ), ALLOCATABLE :: realVec( : )
  call eScalarField%setStopOnError( .FALSE. )
  call display( "Testing set methods for constant data" )
  CALL FPL_INIT()
  CALL param%initiate()
  ierr = param%set(key="name", value="U" )
  ierr = param%set(key="fieldType", value=FIELD_TYPE_CONSTANT)
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call dom%initiate( meshfile )
  call obj%initiate( param, dom )
  call obj%set( globalNode = 10, value= 100.0_DFP )
  call obj%display( "scalar field = ")
  call obj%set( value= 200.0_DFP )
  call obj%display( "scalar field = ")
  call reallocate( realVec, obj%domain%getTotalNodes() )
  call RANDOM_NUMBER( realVec )
  call obj%set(realVec)
  call obj%display( "scalar field = ")
  call obj%set(globalNode=[1,2,5], value=0.0_DFP )
  call obj%display( "scalar field = ")
  call obj%Deallocate()
  call dom%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```
