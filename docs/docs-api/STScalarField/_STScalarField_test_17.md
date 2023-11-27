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
  REAL( DFP ), ALLOCATABLE :: val2(:, :)
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
  call obj%get(value=val2, globalNode=arange(1,5) )
  call Display(val2(:, 1:5), "val2 = "  )

  call obj%Deallocate()
  call dom%Deallocate()
  call param%Deallocate()
  call FPL_FINALIZE()
end program main
```

```txt title="results"
                     val1 =                     
------------------------------------------------
0.450271  0.195486  0.123940  0.445466  0.178457
0.779424  0.951806  0.209786  0.867207  0.345955
                     val2 =                     
------------------------------------------------
0.450271  0.195486  0.123940  0.445466  0.178457
0.779424  0.951806  0.209786  0.867207  0.345955

```
