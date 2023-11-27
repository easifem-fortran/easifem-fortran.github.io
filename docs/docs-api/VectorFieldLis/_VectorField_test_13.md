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
  REAL( DFP ), allocatable :: value(:, :)
  INTEGER( I4B ) :: tNodes

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

  CALL Reallocate(value, spaceCompo, 5)
  CALL Random_number(value)

  CALL obj%set(value=value(1, 1), globalNode=1, spaceCompo=1)
  CALL obj%set(value=value(1, 2), globalNode=2, spaceCompo=1)
  CALL obj%set(value=value(2, 1), globalNode=1, spaceCompo=2)
  CALL obj%set(value=value(2, 2), globalNode=2, spaceCompo=2)

  CALL obj%Display("obj = ")
  CALL Display(value, "value = " )

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.83458,  0.84350,   
0.03367,  0.82750,   

# spaceCompo = 2

                    value =                     
------------------------------------------------
0.834581  0.033674  0.545850  0.677263  0.493727
0.843498  0.827498  0.437508  0.690990  0.205617
```
