In this example we test [Get](./Get.md) method.

Get single entry.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
  REAL( DFP ) :: avar
  CHARACTER( LEN = * ), PARAMETER :: engine = "LIS_OMP"
```

```fortran title="Open file for import"
  CALL FPL_INIT()
  CALL param%initiate()
  CALL resultFile%initiate( filename="./result.h5", mode="READ" )
  CALL resultFile%open()
```

```fortran title="read domain"  
  !> start creating domain
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  !> end creating domain
```

```fortran title="initiate scalar field"
  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine)
  CALL obj%initiate( param, dom )
```

```fortran title="setting all values using vector"
  CALL reallocate( realVec, dom%getTotalNodes() )
  CALL RANDOM_NUMBER( realVec )
  CALL obj%set(realVec)
  CALL obj%display( "scalar field = ")
```

```txt title="results"
0.525588,   
0.106782,   
0.665122,   
0.108642,   
0.482753,   
0.356140,   
0.737333,   
0.739410,   
0.286026,   
```

```fortran
  CALL obj%get( value=avar, globalNode=2)
  CALL Display(avar, "avar = ")
```

```txt title="results"
avar = 0.106782
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  IF(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
