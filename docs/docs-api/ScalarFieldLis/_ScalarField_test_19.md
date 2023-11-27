In this example we test [Set](./Set.md) method.

Setting multiple values using triplets.

We also test:

```txt
obj=obj+scale*obj2
```

Here `obj` is an instance of `ScalarFieldLis_`, and `obj2` is an instance of `ScalarField_`.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarField_ ) :: obj
  TYPE( ScalarFieldLis_ ) :: obj2
  TYPE( HDF5File_ ) :: meshfile, resultFile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  REAL( DFP ), ALLOCATABLE :: realVec( : )
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
    & engine="NATIVE_SERIAL")
  CALL obj%initiate( param, dom )

  CALL SetScalarFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U2", &
    & engine=engine)
  CALL obj2%initiate( param, dom )
```

```fortran title="Setting multiple values using triplets"
  CALL Reallocate(realVec, dom%getTotalNodes())
  CALL RANDOM_NUMBER(realVec)
  CALL obj%set(value=realVec)
  CALL obj%Display("obj = ")
```

```txt title="results"
0.444226,   
0.622197,   
0.553742,   
0.453327,   
0.252453,   
0.436322,   
0.371526,   
0.956193,   
0.684259,   
0.335780,   
```

```fortran title="Setting multiple values using triplets"
  CALL RANDOM_NUMBER(realVec)
  CALL obj2%set(value=realVec)
  CALL obj2%Display("obj2 = ")
```

```txt title="results"
0.117251,   
0.699120,   
0.400569,   
0.126309,   
0.097650,   
0.653376,   
0.497695,   
0.054821,   
0.674551,   
0.935478,   
```

```fortran title="obj=obj+scale*obj2"
  CALL obj%set(obj2=obj2, scale=1.0_DFP, addContribution=.TRUE.)
  CALL obj%Display("obj =")
```

```txt title="results"
0.56148,   
1.32132,   
0.95431,   
0.57964,   
0.35010,   
1.08970,   
0.86922,   
1.01101,   
1.35881,   
1.27126,   
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
