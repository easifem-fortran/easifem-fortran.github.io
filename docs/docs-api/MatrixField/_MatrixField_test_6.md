```fortran
! subroutine test5
!   type( domain_) :: dom
!   type( MatrixField_ ) :: obj
!   type( HDF5File_) :: meshfile
!   type( ParameterList_ ) :: param
!   integer( i4b ) :: ierr
!   real( DFP ), ALLOCATABLE :: realVec( : )
!   call display( "Testing get methods for normal data" )
!   CALL FPL_INIT()
!   CALL param%initiate()
!   ierr = param%set(key="name", value="U" )
!   ierr = param%set(key="fieldType", value=FIELD_TYPE_NORMAL)
!   call meshfile%initiate( filename="./mesh.h5", mode="READ" )
!   call meshfile%open()
!   call dom%initiate( meshfile )
!   call obj%initiate( param, dom )
!   call obj%set( globalNode = 10, value= 100.0_DFP )
!   realVec = [obj%get( globalNode = 10 )]
!   call display( realVec, "100.0=" )
!   call obj%set( value= 200.0_DFP )
!   realVec = obj%get()
!   call display( realVec, "realVec = " )
!   call obj%set(globalNode=[1,2,5], value=1.0_DFP )
!   realVec = obj%get([1,2,5])
!   call display( realVec, "realVec = " )
!   call obj%Deallocate()
!   call dom%Deallocate()
!   call meshfile%close()
!   call meshfile%Deallocate()
!   call param%Deallocate()
!   call FPL_FINALIZE()
! end subroutine
```
