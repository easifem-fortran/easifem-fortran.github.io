In this example we test the [Set](./Set.md) method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  TYPE( Domain_ ) :: dom
  TYPE( VectorFieldLis_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  TYPE( ParameterList_ ) :: param
  INTEGER( I4B ) :: ierr
  INTEGER( I4B ), PARAMETER :: spaceCompo=2_I4B
  CHARACTER(*), PARAMETER :: engine = "LIS_OMP"
  REAL( DFP ), allocatable :: value(:)

  ! import domain
  CALL meshfile%initiate( filename="./mesh.h5", mode="READ" )
  CALL meshfile%open()
  CALL dom%initiate( hdf5=meshfile, group="" )
  CALL meshfile%Deallocate()


  ! set parameters for VectorField_
  CALL FPL_INIT()
  CALL param%initiate()
  CALL SetVectorFieldParam( param=param, &
    & fieldType=FIELD_TYPE_NORMAL, &
    & name="U", &
    & engine=engine, &
    & spaceCompo=spaceCompo)

  CALL obj%initiate( param, dom )
  !! set a single entry
  CALL Reallocate(value, spaceCompo)
  CALL Random_number(value)
  CALL Display(value, "value = ")
  CALL obj%set(value=value, globalNode=1)
  CALL obj%set(value=value, globalNode=2)
  CALL obj%set(value=value, globalNode=3)
  CALL obj%Display("obj = ")

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
value = 
--------
0.574890
0.598815

# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.57489,  0.59881,   
0.57489,  0.59881,   
0.57489,  0.59881,   
```
