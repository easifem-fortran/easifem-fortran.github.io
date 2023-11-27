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

  CALL obj%set(value=value(:, :), iStart=1, iEnd=9, stride=2)

  CALL obj%Display("obj = ")
  CALL Display(value(:,:), "value = " )

  CALL obj%Deallocate(); CALL dom%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="Results"
# VAR :U
 DOF-1 ,   DOF-2 ,   
-------,  -------,   
0.99731,  0.18031,   
0.00000,  0.00000,   
0.73899,  0.44145,   
0.00000,  0.00000,   
0.40767,  0.66327,   
0.00000,  0.00000,   
0.19243,  0.70932,   
0.00000,  0.00000,   
0.13617,  0.31289,   
0.00000,  0.00000,   

# spaceCompo = 2

                    value =                     
------------------------------------------------
0.997308  0.738993  0.407674  0.192429  0.136169
0.180306  0.441451  0.663268  0.709317  0.312890
```
