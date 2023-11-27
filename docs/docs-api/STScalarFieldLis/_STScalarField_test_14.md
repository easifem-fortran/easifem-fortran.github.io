In this example we test [Get](./Get.md) method.

In this example we get all temporal values of a given space node.

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none

  type( domain_ ) :: dom
  type( STScalarFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr
  INTEGER( I4B ), Parameter :: timeCompo=2
  CHARACTER( LEN = * ), Parameter :: engine="LIS_OMP"
  INTEGER( I4B ) ::tNodes
  REAL( DFP ), ALLOCATABLE :: val2(:)
  REAL( DFP ), ALLOCATABLE :: val1(:,:)

  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call dom%initiate( meshfile, "" )
  call meshfile%Deallocate()

  CALL FPL_INIT()
  CALL param%initiate()
  CALL SetSTScalarFieldParam( &
    & param=param, &
    & name="U", &
    & fieldType=FIELD_TYPE_NORMAL, &
    & engine=engine, &
    & timeCompo=timeCompo)

  call obj%initiate( param, dom )

  tNodes = dom%getTotalNodes()
  call reallocate(val1, timeCompo, tNodes)
  call random_number(val1)

  call obj%set(value=val1)
  call obj%get(value=val2, globalNode=1)

  call Display(val1(:,1:5), "val1 = " )
  call Display(val2, "val2 node 1 = "  )
  call obj%get(value=val2, globalNode=5)
  call Display(val2, "val2 node 5 = "  )

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"
                     val1 =                     
------------------------------------------------
0.985725  0.712300  0.838596  0.656728  0.490376
0.674099  0.196048  0.327113  0.386112  0.450990
val2 node 1 = 
--------------
   0.985725   
   0.674099   
val2 node 5 = 
--------------
   0.490376   
   0.450990   
```
