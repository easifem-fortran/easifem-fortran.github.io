In this example we test [Set](./Set.md) method.

Setting multiple values using triplets.

We also test:

```txt
obj=obj+scale*obj2
```

Here `obj` and `obj2` are instances of `ScalarFieldLis_`.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( ScalarFieldLis_ ) :: obj
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
    & engine=engine)
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
0.122526,   
0.004512,   
0.338894,   
0.634983,   
0.530011,   
0.772392,   
0.907221,   
```

```fortran title="Setting multiple values using triplets"
  CALL RANDOM_NUMBER(realVec)
  CALL obj2%set(value=realVec)
  CALL obj2%Display("obj2 = ")
```

```txt title="results"
0.370250,   
0.898448,   
0.029706,   
0.299606,   
0.505284,   
0.072251,   
0.943977,   
```

```fortran title="obj=obj+scale*obj2"
  CALL obj%set(obj2=obj2, scale=1.0_DFP, addContribution=.TRUE.)
  CALL obj%Display("obj =")
```

```txt title="results"
0.49278,   
0.90296,   
0.36860,   
0.93459,   
1.03529,   
0.84464,   
1.85120,   
```

```fortran title="Cleanup"
  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL meshfile%Deallocate()
  CALL resultFile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
  if(allocated(realVec) ) deallocate(realVec)
END PROGRAM main
```
