In this example we test [Get](./Get.md) method.

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
  REAL( DFP ) :: val2
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
  call Display(val1(:, 1:5), "val1 = " )

  call obj%set(value=val1)
  call obj%get(value=val2, globalNode=1, timeCompo=1 )
  call Display(val2, "val2 = "  )
  call obj%get(value=val2, globalNode=2, timeCompo=1 )
  call Display(val2, "val2 = "  )
  call obj%get(value=val2, globalNode=1, timeCompo=2 )
  call Display(val2, "val2 = "  )
  call obj%get(value=val2, globalNode=2, timeCompo=2 )
  call Display(val2, "val2 = "  )

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"
                     val1 =                     
------------------------------------------------
0.603828  0.756928  0.863545  0.512535  0.914640
0.214214  0.073219  0.731039  0.124185  0.871294
val2 = 0.603828
val2 = 0.756928
val2 = 0.214214
val2 = 7.32189E-2
```
